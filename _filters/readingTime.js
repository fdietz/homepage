module.exports = function readingTime(htmlContent) {
  const speed = 300;
  if (!htmlContent) {
    return "seconds";
  }

  const content = htmlContent.replace(/(<([^>]+)>)/gi, "");
  const matches = content.match(/[\u0400-\u04FF]+|\S+\s*/g);
  const count = matches !== null ? matches.length : 0;

  const min = Math.ceil(count / speed);
  return min + " min";
};
