module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeTitle: false,
          removeViewBox: false,
        },
      },
    },
    {
      name: 'removeAttributesBySelector',
      params: {
        selectors: [
          {
            selector: '[preserveAspectRatio="none"]',
            attributes: 'preserveAspectRatio',
          },
          {
            selector: 'svg',
            attributes: 'style',
          },
        ],
      },
    },
  ],
};
