/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://antigravityforpms.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Don't need index for <50k URLs
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
