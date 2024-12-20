/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.serenesafaris.co.zw', // Replace with your site's URL
  generateRobotsTxt: true, // Generate robots.txt file
  exclude: ['/api/*', '/slice-simulator'], // Exclude certain paths if needed
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api', '/slice-simulator'] },
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/gallery'),
    await config.transform(config, '/blogandactivities'),
    await config.transform(config, '/services'),
  ],
};