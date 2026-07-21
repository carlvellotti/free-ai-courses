// Lightweight, dependency-free chart components for guide pages.
// All render statically (no client JS needed) and adapt to light/dark themes
// by using currentColor for text and translucent grays for tracks.

const ACCENT = 'hsl(169, 65%, 42%)'
const ACCENT_SOFT = 'hsla(169, 65%, 42%, 0.18)'
const TRACK = 'rgba(128, 128, 128, 0.14)'
const BORDER = 'rgba(128, 128, 128, 0.25)'
const MUTED = 'rgba(128, 128, 128, 0.95)'

const wrapStyle = {
  border: `1px solid ${BORDER}`,
  borderRadius: 12,
  padding: '20px 22px',
  margin: '28px 0'
}

const titleStyle = {
  fontWeight: 600,
  fontSize: '0.95rem',
  marginBottom: 16
}

const sourceStyle = {
  fontSize: '0.75rem',
  color: MUTED,
  marginTop: 14
}

export function BarChart({ title, data, unit = '', source }) {
  const max = Math.max(...data.map((d) => d.value))
  return (
    <figure style={wrapStyle}>
      {title && <figcaption style={titleStyle}>{title}</figcaption>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {data.map((d) => (
          <div key={d.label}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.82rem',
                marginBottom: 4
              }}
            >
              <span>{d.label}</span>
              <span style={{ fontVariantNumeric: 'tabular-nums', color: MUTED }}>
                {d.display ?? `${d.value}${unit}`}
              </span>
            </div>
            <div style={{ background: TRACK, borderRadius: 99, height: 10 }}>
              <div
                style={{
                  width: `${Math.max((d.value / max) * 100, 2)}%`,
                  background: d.muted ? ACCENT_SOFT : ACCENT,
                  borderRadius: 99,
                  height: '100%'
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {source && <div style={sourceStyle}>{source}</div>}
    </figure>
  )
}

export function StatGrid({ stats, source }) {
  return (
    <figure style={wrapStyle}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 18
        }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div style={{ fontSize: '1.7rem', fontWeight: 700, color: ACCENT }}>
              {s.value}
            </div>
            <div style={{ fontSize: '0.82rem', marginTop: 2 }}>{s.label}</div>
            {s.sub && (
              <div style={{ fontSize: '0.72rem', color: MUTED, marginTop: 2 }}>
                {s.sub}
              </div>
            )}
          </div>
        ))}
      </div>
      {source && <div style={sourceStyle}>{source}</div>}
    </figure>
  )
}

export function StepFlow({ title, steps }) {
  return (
    <figure style={wrapStyle}>
      {title && <figcaption style={titleStyle}>{title}</figcaption>}
      <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {steps.map((s, i) => (
          <li
            key={s.title}
            style={{
              display: 'flex',
              gap: 14,
              paddingBottom: i === steps.length - 1 ? 0 : 18,
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: '50%',
                  background: ACCENT_SOFT,
                  color: ACCENT,
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {i + 1}
              </div>
              {i !== steps.length - 1 && (
                <div style={{ width: 2, flexGrow: 1, background: TRACK, marginTop: 4 }} />
              )}
            </div>
            <div style={{ paddingTop: 2 }}>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{s.title}</div>
              {s.desc && (
                <div style={{ fontSize: '0.84rem', color: MUTED, marginTop: 3 }}>
                  {s.desc}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </figure>
  )
}

export function VersusTable({ title, left, right, rows, source }) {
  const cell = {
    padding: '10px 12px',
    fontSize: '0.84rem',
    borderTop: `1px solid ${BORDER}`,
    verticalAlign: 'top'
  }
  return (
    <figure style={wrapStyle}>
      {title && <figcaption style={titleStyle}>{title}</figcaption>}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ ...cell, borderTop: 'none' }} />
            <th style={{ ...cell, borderTop: 'none', color: ACCENT, textAlign: 'left' }}>
              {left}
            </th>
            <th style={{ ...cell, borderTop: 'none', textAlign: 'left' }}>{right}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <td style={{ ...cell, fontWeight: 600 }}>{r.label}</td>
              <td style={cell}>{r.left}</td>
              <td style={cell}>{r.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {source && <div style={sourceStyle}>{source}</div>}
    </figure>
  )
}
