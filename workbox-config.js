const { generateSW } = require('workbox-build')

generateSW({
  globDirectory: 'dist/',
  globPatterns: ['**/*.{json,js,css,html,png,ico}'],
  swDest: 'dist/sw.js',
  clientsClaim: true,
  skipWaiting: true,
})
