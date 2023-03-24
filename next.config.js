const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  images: {unoptimized: true},
  basePath: process.env.PUBLIC_BASE_PATH,
  assetPrefix: process.env.PUBLIC_BASE_PATH,
  trailingSlash: true
})