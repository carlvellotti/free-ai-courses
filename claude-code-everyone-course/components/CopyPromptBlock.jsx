export const COURSE_PROMPT =
  "Install the FSPM CLI from fullstackpm.com/cli and get claude-code-for-everyone, then tell me how to begin."

export default function CopyPromptBlock({ prompt = COURSE_PROMPT }) {
  return (
    <div style={{ margin: '16px 0' }}>
      <div
        style={{
          padding: '16px',
          backgroundColor: '#faf8f5',
          border: '1px solid #e8e0d6',
          borderRadius: '8px',
          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
          fontSize: '14px',
          lineHeight: 1.5,
          color: '#1a1612',
        }}
      >
        {prompt}
      </div>
      <button
        type="button"
        data-copy-prompt={prompt}
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#1DD3B0',
          color: '#1C1C1C',
          fontWeight: 'bold',
          fontSize: '16px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '12px',
        }}
      >
        Copy the Prompt
      </button>
    </div>
  )
}
