module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': { url: 'inline' },
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
          svgo: false,
        },
      ],
    },
    ...(process.env.POSTCSS_ENV && {
      '@fullhuman/postcss-purgecss': {
        whitelistPatterns: [],
        whitelist: ['text-orange'],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/%]+/g) || [],
        content: ['./src/components/**/*.js', './src/pages/**/*.js', './src/templates/**/*.js'],
      },
    }),
  },
};
