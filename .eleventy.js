const fs = require("fs");
const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const Terser = require("terser");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginSass = require("eleventy-plugin-sass");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const readingTime = require("./_filters/readingTime");
const getTagList = require("./_filters/getTagList");
const stringify = require("javascript-stringify").stringify;

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass);
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: "md"
  });
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  // Copy the `assets` directory to the compiled site folder
  eleventyConfig.addPassthroughCopy({ "assets/images": "images" });
  eleventyConfig.addPassthroughCopy("manifest.json");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy({ "_includes/css": "css" });

  const enableDrafts =
    process.env.ELEVENTY_ENV === "development" ? true : false;

  // blogpost collection
  eleventyConfig.addCollection("posts", function(collection) {
    const allPages = collection.getFilteredByGlob("./posts/*.md");
    if (enableDrafts) {
      const draftPages = collection.getFilteredByGlob("./drafts/*.md");
      return allPages.concat(draftPages);
    }

    return allPages;
  });

  eleventyConfig.addCollection("drafts", collection => {
    return collection.getFilteredByGlob("./src/drafts/*.md");
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
      "dd LLLL, yyyy"
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

  eleventyConfig.addCollection("tagList", getTagList);

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = Terser.minify(code);
    if (minified.error) {
      console.log("Terser error: ", minified.error);
      return code;
    }

    return minified.code;
  });

  eleventyConfig.addFilter("dump", function(str) {
    const output = stringify(str, null, "\t", { maxDepth: 3 });
    console.log(output);
    return "";
  });

  eleventyConfig.addFilter("readingTime", readingTime);

  const htmlmin = require("html-minifier");
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (
      outputPath &&
      "string" === typeof outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: false, // we need comments to identify the expcerpt split marker.
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync("./404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    },
    ui: false,
    ghostMode: false
  });

  return {
    dir: {
      input: ".",
      output: "dist"
    },
    passthroughFileCopy: true
  };
};
