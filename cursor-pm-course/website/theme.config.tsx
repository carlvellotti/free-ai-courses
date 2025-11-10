import React from 'react'

export default {
  logo: <span style={{ fontWeight: 600 }}>Cursor for Product Managers</span>,
  project: {
    link: 'https://github.com/carlvellotti/cursor-pm-course'
  },
  docsRepositoryBase: 'https://github.com/carlvellotti/cursor-pm-course/blob/main/website',
  feedback: {
    content: 'Give Carl feedback →',
    labels: 'feedback'
  },
  editLink: {
    component: null
  },
  footer: {
    content: (
      <span>
        © {new Date().getFullYear()} Carl Vellotti. Licensed under{' '}
        <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">
          CC BY-NC-ND 4.0
        </a>
        .
      </span>
    )
  },
  useNextSeoProps() {
    return { titleTemplate: '%s – Cursor for Product Managers' }
  },
  theme: 'dark',
  head: function Head({ title, frontMatter }: { title?: string; frontMatter?: any }) {
    const siteUrl = 'https://cursorforpms.vercel.app'
    const pageTitle = title ? `${title} – Cursor for Product Managers` : 'Learn Cursor IN Cursor!'
    const description = frontMatter?.description || 'Learn Cursor IN Cursor! An interactive course teaching AI-powered productivity, file operations, and product management workflows.'
    const ogImage = frontMatter?.ogImage || `${siteUrl}/images/cursorforpmsvs.png`

    return (
      <>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="google-site-verification" content="Oenxq7BatQp09RlIUs43VkDpdoOQUWlUhqwxYxw49xQ" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XBF1JD68VY"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XBF1JD68VY');
            `
          }}
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Cursor IN Cursor!" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Additional SEO */}
        {frontMatter?.keywords && (
          <meta name="keywords" content={frontMatter.keywords} />
        )}

        {/* Structured Data */}
        {frontMatter?.schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(frontMatter.schema)
            }}
          />
        )}
      </>
    )
  },
  primaryHue: 169,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    backToTop: true
  }
}

