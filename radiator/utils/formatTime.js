/**
 * Function for format time to *m *s
 * @param {number} seconds
 * @returns {string}
 */
const formatTime = seconds => {
  if (seconds < 60) return `${seconds}s`
  return `${Math.floor(seconds / 60)}m ${Math.floor(seconds % 60)}s`
}

module.exports = formatTime
