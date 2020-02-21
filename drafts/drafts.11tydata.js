const enableDrafts = process.env.DRAFTS ? Boolean(process.env.DRAFTS) : false;

module.exports = {
  permalink: enableDrafts ? "/posts/{{ title | slug }}/index.html" : false,
  layout: "post",
  tags: "post"
};
