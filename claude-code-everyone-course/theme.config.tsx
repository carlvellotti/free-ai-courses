import React from 'react'
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

export default {
  logo: <span style={{ fontWeight: 600 }}>Claude Code for Everyone</span>,
  project: {
    link: 'https://github.com/carlvellotti/claude-code-everyone-course'
  },
  docsRepositoryBase: 'https://github.com/carlvellotti/claude-code-everyone-course/blob/main/website',
  feedback: {
    content: 'Give Carl feedback →',
    useLink: () => 'mailto:carl@fullstackpm.com?subject=CC4E%20Feedback'
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
    return { titleTemplate: '%s – Claude Code for Everyone' }
  },
  theme: 'dark',
  head: function Head() {
    const { frontMatter, title } = useConfig()
    const { asPath } = useRouter()
    const siteUrl = 'https://ccforeveryone.com'
    const isHome = asPath === '/'
    const pageTitle = isHome
      ? 'Free Claude Code Course | Learn AI for Non-Technical People'
      : (title ? `${title} – Claude Code for Everyone` : 'Claude Code for Everyone')
    const description = frontMatter?.description || 'Learn Claude Code IN Claude Code! Free Claude Code course for beginners - no coding experience required. No videos, just doing.'
    const ogImage = frontMatter?.ogImage || `${siteUrl}/images/better-graphic.jpg`
    const url = `${siteUrl}${asPath}`

    return (
      <>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="google-site-verification" content="Oenxq7BatQp09RlIUs43VkDpdoOQUWlUhqwxYxw49xQ" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2T3EBZQ0ZC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2T3EBZQ0ZC');
            `
          }}
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Claude Code for Everyone" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

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
