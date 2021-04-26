/**
 * Function for getting percentage between two entities
 * @param {number} first
 * @param {number} second
 * @param {Boolean} useDiff
 * @returns {number}
 */
const getPercentage = (first, second, useDiff = true) => {
  if (!first || !second) return 0
  const diff = useDiff ? 100 : 0
  return Number((((first * 100) / second) - diff).toFixed(2))
}

module.exports = getPercentage
