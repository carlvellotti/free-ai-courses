import { useEffect, useState } from 'react'

export const COURSE_PROMPT =
  'Install the FSPM CLI from fullstackpm.com/cli and get claude-code-for-pms, then tell me how to begin.'

// Renders the one-prompt start block. The copy button carries a data attribute
// that DownloadGate intercepts (email gate before the prompt is copied).
export default function CopyPrompt({ prompt = COURSE_PROMPT }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleCopied = (e) => {
      if (e.detail?.prompt !== prompt) return
      setCopied(true)
      const timer = setTimeout(() => setCopied(false), 2500)
      return () => clearTimeout(timer)
    }
    window.addEventListener('fspm:prompt-copied', handleCopied)
    return () => window.removeEventListener('fspm:prompt-copied', handleCopied)
  }, [prompt])

  return (
    <div
      style={{
        border: '1px solid #3a3a3a',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px 0',
        backgroundColor: 'rgba(29, 211, 176, 0.06)',
      }}
    >
      <code
        style={{
          display: 'block',
          fontSize: '15px',
          lineHeight: 1.5,
          marginBottom: '12px',
          whiteSpace: 'pre-wrap',
        }}
      >
        {prompt}
      </code>
      <button
        type="button"
        data-fspm-prompt={prompt}
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#1DD3B0',
          color: '#1C1C1C',
          fontWeight: 'bold',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        {copied ? 'Copied!' : 'Copy the prompt'}
      </button>
    </div>
  )
}
