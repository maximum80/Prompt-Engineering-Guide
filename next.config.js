const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''
module.exports = withNextra({
  images: {unoptimized: true},
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true
})