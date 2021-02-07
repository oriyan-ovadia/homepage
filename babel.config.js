module.exports = (api) => {
  /**
   * Permacache the computed config and never call the function again
   * https://babeljs.io/docs/en/config-files#apicache
   */
  api.cache(true);

  return {
    plugins: ['@emotion/babel-plugin'],
    presets: [
      // https://nextjs.org/docs/advanced-features/customizing-babel-config
      'next/babel',
      /**
       * A babel preset to automatically enable emotion's css prop
       * https://github.com/emotion-js/emotion/tree/master/packages/babel-preset-css-prop
       */
      '@emotion/babel-preset-css-prop',
    ],
  };
};
