module.exports = function readingTime(htmlContent) {
  const speed = 300;
  if (!htmlContent) {
    return `0 ${printSeconds ? "seconds" : "minutes"}`;
  }

  const content = htmlContent.replace(/(<([^>]+)>)/gi, "");
  const matches = content.match(/[\u0400-\u04FF]+|\S+\s*/g);
  const count = matches !== null ? matches.length : 0;

  let est = "";

  const min = Math.ceil(count / speed);

  if (raw === false) {
    est = min + " min";
  } else {
    est = min;
  }

  return est;
};
