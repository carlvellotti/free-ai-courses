import React from 'react'
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

export default {
  logo: <span style={{ fontWeight: 600 }}>Antigravity for Product Managers</span>,
  project: {
    link: 'https://github.com/carlvellotti/antigravity-pm-course'
  },
  docsRepositoryBase: 'https://github.com/carlvellotti/antigravity-pm-course/blob/main/website',
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
    return { titleTemplate: '%s – Antigravity for Product Managers' }
  },
  theme: 'dark',
  head: function Head() {
    const { frontMatter, title } = useConfig()
    const { asPath } = useRouter()

    const siteUrl = 'https://antigravityforpms.com'
    const isHome = asPath === '/'
    const pageTitle = isHome
      ? 'Learn Antigravity IN Antigravity! – Antigravity for Product Managers'
      : (title ? `${title} – Antigravity for Product Managers` : 'Antigravity for Product Managers')
    const description = frontMatter?.description || 'Learn Antigravity IN Antigravity!'
    const ogImage = frontMatter?.ogImage || `${siteUrl}/images/antigravityforpmsthumbnail.png`
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
        {/* TODO: Add Google site verification when ready */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* TODO: Add Google Analytics when ready */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_ID');
            `
          }}
        />
        */}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Antigravity IN Antigravity!" />
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
  // Google Blue #1a73e8 = hue 217, saturation 89%
  primaryHue: 217,
  primarySaturation: 89,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    backToTop: true
  }
}
