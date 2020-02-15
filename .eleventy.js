const moment = require("moment");

const pluginSass = require("eleventy-plugin-sass");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass);
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: "md"
  });

  eleventyConfig.addLayoutAlias("default", "layouts/default.html");
  eleventyConfig.addLayoutAlias("post", "layouts/post.html");

  // Copy the `assets` directory to the compiled site folder
  eleventyConfig.addPassthroughCopy("assets/images");

  // blogpost collection
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob("./posts/*.md");
  });

  // projects collection
  // eleventyConfig.addCollection("projects", function(collection) {
  //   return collection.getFilteredByGlob("./src/projects/*.md");
  // });

  // limit filter
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  // date filter
  eleventyConfig.addFilter("readableDate", function(date) {
    return moment(date).format("YYYY-MM-DD");
  });

  return {
    dir: {
      input: ".",
      output: "dist"
    },
    passthroughFileCopy: true
  };
};
