import { useEffect, useState, useRef } from 'react'

// CC4E colors
const colors = {
  bg: '#1C1C1C',
  bgLight: '#252525',
  teal: '#1DD3B0',
  coral: '#FF5856',
  coralDark: '#e54d4b',
  white: '#ffffff',
  gray300: '#d1d5db',
  gray500: '#6b7280',
}

const Spinner = () => (
  <svg style={{ width: 16, height: 16, animation: 'spin 1s linear infinite' }} viewBox="0 0 24 24">
    <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
    <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
)

// Analytics helper
const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

export default function EmailPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('cc4e-popup-seen')
    if (hasSeenPopup) return

    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
      trackEvent('popup_shown', { popup_type: 'email_signup', source: 'cc4e' })
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('cc4e-popup-seen', 'true')
    trackEvent('popup_closed', { popup_type: 'email_signup', source: 'cc4e' })
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
          source: 'cc4e-popup',
          publication: 'cc4e',
          utm_source: 'ccforeveryone',
          utm_medium: 'popup',
          utm_campaign: 'course-popup',
          landing_page: window.location.pathname,
          referrer: document.referrer || 'direct',
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        localStorage.setItem('cc4e-popup-seen', 'true')
        trackEvent('popup_submitted', { popup_type: 'email_signup', source: 'cc4e' })
        setTimeout(() => {
          setIsVisible(false)
        }, 3000)
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
      {/* Overlay */}
      <div className="popup-overlay" onClick={handleClose} />

      {/* Popup */}
      <div className="popup-container">
        {/* Close button */}
        <button className="popup-close" onClick={handleClose} aria-label="Close popup">
          &times;
        </button>

        {status === 'success' ? (
          <div className="popup-content">
            <div className="popup-success">
              <span className="popup-success-icon">&#10003;</span>
              <h3>Thank you!</h3>
              <p>Be on the lookout for the next launch.</p>
            </div>
          </div>
        ) : (
          <div className="popup-content">
            {/* Header */}
            <div className="popup-header">
              <h2>Join Claude Code for Everyone</h2>
              <p className="popup-subhead">The <strong>complete guide</strong> to Claude Code for <span className="underline">non-technical</span> people</p>
            </div>

            {/* Two column value props */}
            <div className="popup-columns">
              <div className="popup-column">
                <h4>Coming Soon</h4>
                <ul>
                  <li><span className="bullet">&#8226;</span> <strong>Jan 15:</strong> Vibe Coding 101</li>
                  <li><span className="bullet">&#8226;</span> Connect AI to Everything</li>
                  <li><span className="bullet">&#8226;</span> Advanced Skill Use</li>
                </ul>
              </div>
              <div className="popup-column">
                <h4>THE Claude Code Community</h4>
                <ul>
                  <li><span className="bullet">&#8226;</span> Definitive resources</li>
                  <li><span className="bullet">&#8226;</span> Creative use cases</li>
                  <li><span className="bullet">&#8226;</span> Proven prompts</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="popup-form">
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
                  <><Spinner /> Joining...</>
                ) : (
                  'Join'
                )}
              </button>
            </form>
            {status === 'error' && (
              <p className="popup-error">{errorMessage}</p>
            )}
            <p className="popup-disclaimer">No spam. Unsubscribe anytime.</p>
          </div>
        )}

        <div className="popup-footer">
          Made with 🧡 and 🥞 by <a href="https://www.linkedin.com/in/carlvellotti/" target="_blank" rel="noopener noreferrer">Carl Vellotti</a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9998;
          animation: fadeIn 0.3s ease;
        }

        .popup-container {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
          background: ${colors.bg};
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
          border-top: 3px solid ${colors.coral};
        }

        .popup-close {
          position: absolute;
          top: 12px;
          right: 16px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid #444;
          border-radius: 4px;
          font-size: 20px;
          line-height: 1;
          color: ${colors.gray500};
          cursor: pointer;
          transition: all 0.2s;
          z-index: 10;
        }
        .popup-close:hover {
          background: ${colors.bgLight};
          color: ${colors.white};
          border-color: #666;
        }

        .popup-content {
          padding: 32px 24px;
          max-width: 700px;
          margin: 0 auto;
        }

        .popup-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .popup-header h2 {
          color: ${colors.white};
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 8px 0;
        }

        .popup-subhead {
          color: ${colors.gray300};
          font-size: 16px;
          margin: 0;
        }

        .popup-subhead .underline,
        .underline {
          text-decoration: underline;
        }

        .popup-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 24px;
        }

        .popup-column h4 {
          color: ${colors.coral};
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 12px 0;
        }

        .popup-column ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .popup-column li {
          color: ${colors.gray300};
          font-size: 14px;
          margin-bottom: 8px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .bullet {
          color: ${colors.teal};
        }

        .popup-tagline {
          text-align: center;
          color: ${colors.white};
          font-size: 18px;
          margin: 0 0 24px 0;
        }

        .popup-tagline .underline {
          text-decoration: underline;
        }

        .popup-form {
          display: flex;
          gap: 12px;
          max-width: 400px;
          margin: 0 auto;
        }

        .popup-form input {
          flex: 1;
          padding: 12px 16px;
          font-size: 14px;
          font-family: inherit;
          background: ${colors.bg};
          border: 1px solid #444;
          border-radius: 8px;
          outline: none;
          transition: all 0.2s;
          color: ${colors.white};
        }
        .popup-form input::placeholder {
          color: ${colors.gray500};
        }
        .popup-form input:focus {
          border-color: ${colors.teal};
          box-shadow: 0 0 0 2px rgba(29, 211, 176, 0.2);
        }
        .popup-form input:disabled {
          opacity: 0.5;
        }

        .popup-form button {
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          color: ${colors.white};
          background: ${colors.coral};
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
        .popup-form button:hover {
          background: ${colors.coralDark};
        }
        .popup-form button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .popup-error {
          margin: 12px 0 0;
          font-size: 13px;
          color: ${colors.coral};
          text-align: center;
        }

        .popup-disclaimer {
          margin: 12px 0 0;
          font-size: 12px;
          color: ${colors.gray500};
          text-align: center;
        }

        .popup-footer {
          padding: 12px 24px;
          background: ${colors.bgLight};
          border-top: 1px solid #333;
          font-size: 13px;
          color: ${colors.gray500};
          text-align: center;
        }
        .popup-footer a {
          color: ${colors.coral};
          text-decoration: none;
        }
        .popup-footer a:hover {
          text-decoration: underline;
        }

        .popup-success {
          text-align: center;
          padding: 20px 0;
        }
        .popup-success-icon {
          font-size: 48px;
          color: ${colors.teal};
          display: block;
          margin-bottom: 16px;
        }
        .popup-success h3 {
          font-size: 24px;
          font-weight: 700;
          color: ${colors.white};
          margin: 0 0 8px;
        }
        .popup-success p {
          color: ${colors.gray300};
          margin: 0;
        }

        @media (max-width: 600px) {
          .popup-columns {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .popup-form {
            flex-direction: column;
          }
          .popup-tagline {
            font-size: 16px;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  )
}
