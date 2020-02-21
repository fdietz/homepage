const enableDrafts = process.env.ELEVENTY_ENV === "development" ? true : false;

module.exports = {
  permalink: enableDrafts ? "/posts/{{ title | slug }}/index.html" : false,
  layout: "post",
  tags: "post"
};
