import React from 'react'
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

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
  head: function Head() {
    const { frontMatter, title } = useConfig()
    const { asPath } = useRouter()
    
    const siteUrl = 'https://cursorforpms.com'
    const isHome = asPath === '/'
    const pageTitle = isHome
      ? 'Learn Cursor IN Cursor! – Cursor for Product Managers'
      : (title ? `${title} – Cursor for Product Managers` : 'Cursor for Product Managers')
    const description = frontMatter?.description || 'Learn Cursor IN Cursor! An interactive course teaching AI-powered productivity, file operations, and product management workflows.'
    const ogImage = frontMatter?.ogImage || `${siteUrl}/images/cursorforpmsthumbnail.png`
    const canonicalUrl = `${siteUrl}${asPath}`

    // Generate breadcrumb structured data
    const pathSegments = asPath.split('/').filter(segment => segment && !segment.includes('#'))

    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteUrl
        },
        ...pathSegments.map((segment, index) => {
          const url = `${siteUrl}/${pathSegments.slice(0, index + 1).join('/')}`
          const name = segment.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')
          return {
            "@type": "ListItem",
            "position": index + 2,
            "name": name,
            "item": url
          }
        })
      ]
    }

    return (
      <>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="google-site-verification" content="Oenxq7BatQp09RlIUs43VkDpdoOQUWlUhqwxYxw49xQ" />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0RV8H9JG6V"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0RV8H9JG6V');
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

        {/* Breadcrumb Structured Data */}
        {pathSegments.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbList)
            }}
          />
        )}
      </>
    )
  },
  primaryHue: 145,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    backToTop: true
  }
}
