module.exports = api => {
  /**
   * Permacache the computed config and never call the function again
   * https://babeljs.io/docs/en/config-files#apicache
   */
  api.cache(true);

  return {
    presets: [
      // https://nextjs.org/docs/advanced-features/customizing-babel-config
      'next/babel',
    ],
  };
};
