// see https://github.com/philhawksworth/hawksworx.com/blob/e359bc4fd5/src/site/_filters/getTagList.js
module.exports = function(collection) {
  let tagSet = new Set();
  collection.getAllSorted().forEach(function(item) {
    if ("tags" in item.data) {
      let tags = item.data.tags;
      if (typeof tags === "string") {
        tags = [tags];
      }

      tags = tags.filter(function(item) {
        switch (item) {
          // this list should match the `filter` list in tags.njk
          case "all":
          case "nav":
          case "post":
          case "posts":
            return false;
        }

        return true;
      });

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  return [...tagSet].sort();
};