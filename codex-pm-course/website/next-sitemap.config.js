/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://codexforpms.com',
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
  transform: async (config, path) => ({
    loc: path,
    changefreq: 'weekly',
    priority: path === '/' ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
  }),
}
