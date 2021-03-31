function process() {
  return 'module.exports = {};'
}

function getCacheKey() {
  // The output is always the same.
  return 'svgTransform'
}

module.exports = {
  process,
  getCacheKey,
}
