import { useEffect, useState, useRef } from 'react'

const colors = {
  maple: '#e63f02',
  mapleDark: '#b43200',
  butter: '#f4d35e',
  ink: '#1a1612',
  stone700: '#5c5248',
  stone400: '#b8a99a',
  stone200: '#e8e0d6',
  stone50: '#faf8f5',
}

const Spinner = () => (
  <svg style={{ width: 16, height: 16, animation: 'spin 1s linear infinite' }} viewBox="0 0 24 24">
    <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
    <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
)

const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

// Legacy ZIP links (kept as a safety net until the release flow is fully retired)
const DOWNLOAD_PATTERN = /github\.com\/carlvellotti\/(claude-code-pm-course|free-ai-courses)\/releases\/.*\/complete-course\.zip/
const EMAIL_SUBMITTED_KEY = 'ccpm-download-email-submitted'

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    try {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(textarea)
      return ok
    } catch (err2) {
      return false
    }
  }
}

const announceCopied = (prompt) => {
  window.dispatchEvent(new CustomEvent('fspm:prompt-copied', { detail: { prompt } }))
}

export default function DownloadGate() {
  const [isVisible, setIsVisible] = useState(false)
  const [pendingUrl, setPendingUrl] = useState(null)
  const [pendingPrompt, setPendingPrompt] = useState(null)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [successCopied, setSuccessCopied] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      // Find the nearest element that is either a copy-prompt button or a link
      let node = e.target
      let promptEl = null
      let anchorEl = null
      while (node && node !== document) {
        if (!promptEl && node.getAttribute && node.getAttribute('data-fspm-prompt')) {
          promptEl = node
          break
        }
        if (!anchorEl && node.tagName === 'A') {
          anchorEl = node
          break
        }
        node = node.parentElement
      }

      // Primary target: the "copy this prompt" click
      if (promptEl) {
        e.preventDefault()
        const prompt = promptEl.getAttribute('data-fspm-prompt')
        const emailAlreadySubmitted = localStorage.getItem(EMAIL_SUBMITTED_KEY)

        trackEvent('copy_prompt_click', { prompt_page: window.location.pathname })

        if (emailAlreadySubmitted) {
          copyText(prompt).then(() => {
            announceCopied(prompt)
            trackEvent('prompt_copied', { prompt_page: window.location.pathname })
          })
          return
        }

        setPendingPrompt(prompt)
        setPendingUrl(null)
        setIsVisible(true)
        setStatus('idle')
        setEmail('')
        setErrorMessage('')
        setSuccessCopied(false)
        trackEvent('email_gate_shown', { gate_type: 'copy_prompt' })
        return
      }

      // Legacy target: direct ZIP download links
      if (!anchorEl) return
      const href = anchorEl.getAttribute('href') || ''
      if (!DOWNLOAD_PATTERN.test(href)) return

      e.preventDefault()

      const emailAlreadySubmitted = localStorage.getItem(EMAIL_SUBMITTED_KEY)

      trackEvent('download_click', { download_url: href })

      if (emailAlreadySubmitted) {
        trackEvent('download_started', { download_url: href })
        window.location.href = href
        return
      }

      setPendingUrl(href)
      setPendingPrompt(null)
      setIsVisible(true)
      setStatus('idle')
      setEmail('')
      setErrorMessage('')
      trackEvent('email_gate_shown', { download_url: href })
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
    trackEvent('email_gate_dismissed', {
      gate_type: pendingPrompt ? 'copy_prompt' : 'download',
    })
  }

  const handleCopyFromSuccess = async () => {
    if (!pendingPrompt) return
    const ok = await copyText(pendingPrompt)
    if (ok) {
      setSuccessCopied(true)
      announceCopied(pendingPrompt)
      trackEvent('prompt_copied', { prompt_page: window.location.pathname })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('https://fullstackpm.com/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'cc4pm-download-gate',
          publication: 'cc4pm',
          utm_source: 'ccforpms',
          utm_medium: 'download-gate',
          utm_campaign: pendingPrompt ? 'copy-prompt-gate' : 'download-ab-test',
          landing_page: window.location.pathname,
          referrer: document.referrer || 'direct',
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        localStorage.setItem(EMAIL_SUBMITTED_KEY, 'true')
        trackEvent('email_gate_completed', {
          gate_type: pendingPrompt ? 'copy_prompt' : 'download',
        })

        if (pendingPrompt) {
          const ok = await copyText(pendingPrompt)
          if (ok) {
            setSuccessCopied(true)
            announceCopied(pendingPrompt)
            trackEvent('prompt_copied', { prompt_page: window.location.pathname })
          }
          // Stay open so the student can copy manually if the auto-copy failed
        } else {
          trackEvent('download_started', { download_url: pendingUrl })
          window.location.href = pendingUrl
          setTimeout(() => setIsVisible(false), 500)
        }
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  if (!isVisible) return null

  return (
    <>
      <div className="gate-overlay" onClick={handleClose} />
      <div className="gate-container">
        <button className="gate-close" onClick={handleClose} aria-label="Close">&times;</button>

        {status === 'success' ? (
          <div className="gate-content">
            <div className="gate-success">
              <span className="gate-success-icon">&#x1F95E;</span>
              {pendingPrompt ? (
                <>
                  <h3>{successCopied ? 'Prompt copied!' : "You're in!"}</h3>
                  <p className="gate-prompt-text">{pendingPrompt}</p>
                  <button type="button" className="gate-copy-again" onClick={handleCopyFromSuccess}>
                    {successCopied ? 'Copy again' : 'Copy the prompt'}
                  </button>
                  <p className="gate-success-note">Paste it into Claude to start the course.</p>
                </>
              ) : (
                <h3>Your download is starting!</h3>
              )}
            </div>
          </div>
        ) : (
          <div className="gate-content">
            <div className="gate-header">
              <h2>
                {pendingPrompt
                  ? 'Enter your email to copy the start prompt! (100% free)'
                  : 'Enter your email for an instant download! (100% free)'}
              </h2>
              <p className="gate-subhead">Join <span className="highlight">The Full Stack PM</span> — a community and newsletter of <strong>30,000+ PM builders</strong> learning to do amazing things with AI.</p>
            </div>

            <form onSubmit={handleSubmit} className="gate-form">
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                disabled={status === 'loading'}
              />
              <button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <><Spinner /> Sending...</>
                ) : (
                  pendingPrompt ? 'Copy the prompt' : 'Download'
                )}
              </button>
            </form>
            {status === 'error' && (
              <p className="gate-error">{errorMessage}</p>
            )}
            <p className="gate-disclaimer">No spam. Unsubscribe anytime.</p>
          </div>
        )}

        <div className="gate-footer">
          Made with 🧡 and 🥞 by <a href="https://www.linkedin.com/in/carlvellotti/" target="_blank" rel="noopener noreferrer">Carl Vellotti</a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gate-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <style jsx>{`
        .gate-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 10000;
          animation: gate-fadeIn 0.3s ease;
        }

        .gate-container {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10001;
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
          background: ${colors.stone50};
          animation: gate-slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
          border-top: 3px solid ${colors.maple};
        }

        .gate-close {
          position: absolute;
          top: 12px;
          right: 16px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid ${colors.stone200};
          border-radius: 4px;
          font-size: 20px;
          line-height: 1;
          color: ${colors.stone400};
          cursor: pointer;
          transition: all 0.2s;
          z-index: 10;
        }
        .gate-close:hover {
          background: ${colors.stone200};
          color: ${colors.ink};
          border-color: ${colors.stone400};
        }

        .gate-content {
          padding: 32px 24px;
          max-width: 500px;
          margin: 0 auto;
        }

        .gate-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .gate-header h2 {
          color: ${colors.ink};
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 8px 0;
        }

        .gate-subhead {
          color: ${colors.stone700};
          font-size: 14px;
          margin: 0;
        }

        .highlight {
          color: ${colors.maple};
          font-weight: 700;
        }

        .gate-form {
          display: flex;
          gap: 12px;
          max-width: 400px;
          margin: 0 auto;
        }

        .gate-form input {
          flex: 1;
          padding: 12px 16px;
          font-size: 14px;
          font-family: inherit;
          background: ${colors.stone50};
          border: 1px solid ${colors.stone200};
          border-radius: 8px;
          outline: none;
          transition: all 0.2s;
          color: ${colors.ink};
        }
        .gate-form input::placeholder {
          color: ${colors.stone400};
        }
        .gate-form input:focus {
          border-color: ${colors.maple};
          box-shadow: 0 0 0 2px rgba(230, 63, 2, 0.15);
        }
        .gate-form input:disabled {
          opacity: 0.5;
        }

        .gate-form button {
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          color: ${colors.stone50};
          background: ${colors.maple};
          border: none;
          border-radius: 8px;
          cursor: pointer;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s;
        }
        .gate-form button:hover {
          background: ${colors.mapleDark};
        }
        .gate-form button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .gate-error {
          margin: 12px 0 0;
          font-size: 13px;
          color: ${colors.maple};
          text-align: center;
        }

        .gate-success {
          text-align: center;
          padding: 20px 0;
        }
        .gate-success-icon {
          font-size: 48px;
          display: block;
          margin-bottom: 16px;
        }
        .gate-success h3 {
          font-size: 24px;
          font-weight: 700;
          color: ${colors.ink};
          margin: 0;
        }

        .gate-prompt-text {
          margin: 16px auto 0;
          max-width: 440px;
          padding: 12px 16px;
          font-size: 13px;
          line-height: 1.5;
          color: ${colors.ink};
          background: ${colors.stone200};
          border-radius: 8px;
          text-align: left;
        }

        .gate-copy-again {
          margin-top: 12px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          color: ${colors.stone50};
          background: ${colors.maple};
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .gate-copy-again:hover {
          background: ${colors.mapleDark};
        }

        .gate-success-note {
          margin: 12px 0 0;
          font-size: 13px;
          color: ${colors.stone700};
        }

        .gate-disclaimer {
          margin: 12px 0 0;
          font-size: 12px;
          color: ${colors.stone400};
          text-align: center;
        }

        .gate-footer {
          padding: 12px 24px;
          background: ${colors.stone200};
          border-top: 1px solid ${colors.stone200};
          font-size: 13px;
          color: ${colors.stone700};
          text-align: center;
        }
        .gate-footer a {
          color: ${colors.maple};
          text-decoration: none;
        }
        .gate-footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .gate-form {
            flex-direction: column;
          }
        }

        @keyframes gate-fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes gate-slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  )
}
