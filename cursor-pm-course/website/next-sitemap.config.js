/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cursorforpms.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Don't need index for <50k URLs
  exclude: ['/company-context/*'], // Exclude reference pages from sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/_next/*'],
      },
    ],
  },
}
