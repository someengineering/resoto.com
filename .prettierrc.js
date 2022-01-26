module.exports = {
  printWidth: 80,
  singleQuote: true,
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      options: {
        embeddedLanguageFormatting: 'off',
        printWidth: 120,
        proseWrap: 'never',
      },
    },
  ],
};
