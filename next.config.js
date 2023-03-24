const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

<<<<<<< Updated upstream
module.exports = withNextra()
=======
const isProd = process.env.NODE_ENV === 'production';

module.exports = withNextra({
  images: {unoptimized: true},
  basePath: isProd ? '/your-repo-name' : '',
  assetPrefix: isProd ? '/your-repo-name/' : '',
  trailingSlash: true
})
>>>>>>> Stashed changes
