const xmlFiltersPlugin = require("eleventy-xml-plugin");

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);

  // No passthrough required as this file is created with postcss
  eleventyConfig.addWatchTarget("./public/bundle/bundle.css");

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "www",
    },
  };
};
