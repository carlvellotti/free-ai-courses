import { useEffect, useState, useRef } from 'react'

const colors = {
  bg: '#faf8f5',
  bgLight: '#e8e0d6',
  teal: '#1DD3B0',
  tealDark: '#17b898',
  ink: '#1a1612',
  textBody: '#5c5248',
  textMuted: '#7a6e62',
  textLight: '#b8a99a',
  border: '#e8e0d6',
  coral: '#FF5856',
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

const DOWNLOAD_PATTERN = /github\.com\/carlvellotti\/claude-code-everyone-course\/releases\/download\/v[^/]+\/complete-course\.zip/
const EMAIL_SUBMITTED_KEY = 'cc4e-download-email-submitted'

export default function DownloadGate() {
  const [isVisible, setIsVisible] = useState(false)
  const [pendingUrl, setPendingUrl] = useState(null)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      let target = e.target
      while (target && target !== document && target.tagName !== 'A') {
        target = target.parentElement
      }
      if (!target || target.tagName !== 'A') return

      const href = target.getAttribute('href') || ''
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
    trackEvent('email_gate_dismissed', { download_url: pendingUrl })
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
          source: 'cc4e-download-gate',
          publication: 'cc4e',
          utm_source: 'ccforeveryone',
          utm_medium: 'download-gate',
          utm_campaign: 'download-ab-test',
          landing_page: window.location.pathname,
          referrer: document.referrer || 'direct',
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        localStorage.setItem(EMAIL_SUBMITTED_KEY, 'true')
        trackEvent('email_gate_completed', { download_url: pendingUrl })
        trackEvent('download_started', { download_url: pendingUrl })

        // Trigger download then close modal
        window.location.href = pendingUrl
        setTimeout(() => setIsVisible(false), 500)
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
              <span className="gate-success-icon">&#10003;</span>
              <h3>Your download is starting!</h3>
            </div>
          </div>
        ) : (
          <div className="gate-content">
            <div className="gate-header">
              <h2>Enter your email for an instant download! (100% free)</h2>
              <p className="gate-subhead">Join a community and newsletter of <strong>30,000+ non-technical people</strong> learning to do amazing things with AI.</p>
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
                  'Download'
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
          Made with 🧡 and 🥞 by <a href="https://x.com/carlvellotti" target="_blank" rel="noopener noreferrer">Carl Vellotti</a>
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
          background: ${colors.bg};
          animation: gate-slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
          border-top: 3px solid ${colors.teal};
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
          border: 1px solid ${colors.border};
          border-radius: 4px;
          font-size: 20px;
          line-height: 1;
          color: ${colors.textLight};
          cursor: pointer;
          transition: all 0.2s;
          z-index: 10;
        }
        .gate-close:hover {
          background: ${colors.bgLight};
          color: ${colors.ink};
          border-color: ${colors.textLight};
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
          color: ${colors.textBody};
          font-size: 14px;
          margin: 0;
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
          background: ${colors.bg};
          border: 1px solid ${colors.border};
          border-radius: 8px;
          outline: none;
          transition: all 0.2s;
          color: ${colors.ink};
        }
        .gate-form input::placeholder {
          color: ${colors.textLight};
        }
        .gate-form input:focus {
          border-color: ${colors.teal};
          box-shadow: 0 0 0 2px rgba(29, 211, 176, 0.2);
        }
        .gate-form input:disabled {
          opacity: 0.5;
        }

        .gate-form button {
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          color: ${colors.bg};
          background: ${colors.teal};
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
          background: ${colors.tealDark};
        }
        .gate-form button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .gate-error {
          margin: 12px 0 0;
          font-size: 13px;
          color: ${colors.coral};
          text-align: center;
        }

        .gate-success {
          text-align: center;
          padding: 20px 0;
        }
        .gate-success-icon {
          font-size: 48px;
          color: ${colors.teal};
          display: block;
          margin-bottom: 16px;
        }
        .gate-success h3 {
          font-size: 24px;
          font-weight: 700;
          color: ${colors.ink};
          margin: 0;
        }

        .gate-disclaimer {
          margin: 12px 0 0;
          font-size: 12px;
          color: ${colors.textMuted};
          text-align: center;
        }

        .gate-footer {
          padding: 12px 24px;
          background: ${colors.bgLight};
          border-top: 1px solid ${colors.border};
          font-size: 13px;
          color: ${colors.textMuted};
          text-align: center;
        }
        .gate-footer a {
          color: ${colors.teal};
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
