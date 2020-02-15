const { DateTime } = require("luxon");

const pluginSass = require("eleventy-plugin-sass");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass);
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: "md"
  });
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addLayoutAlias("page", "layouts/page.html");
  eleventyConfig.addLayoutAlias("post", "layouts/post.html");

  // Copy the `assets` directory to the compiled site folder
  eleventyConfig.addPassthroughCopy({ "assets/images": "images" });

  // blogpost collection
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob("./posts/*.md");
  });

  // projects collection
  // eleventyConfig.addCollection("projects", function(collection) {
  //   return collection.getFilteredByGlob("./src/projects/*.md");
  // });

  eleventyConfig.addShortcode("asset", function(name, width, alt) {
    return name;
  });

  // limit filter
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  return {
    dir: {
      input: ".",
      output: "dist"
    },
    passthroughFileCopy: true
  };
};
