function findArgument(name, defaultOutput) {
  if (!name) return defaultOutput

  const index = process.argv.findIndex(a => a.match(name))
  if (index < 0) return defaultOutput

  try {
    return process.argv[index + 1]
  } catch (e) {
    return defaultOutput
  }
}

function getColor(coverage, type = 'str') {
  const colors = {
    bad: {
      hash: '#ff0000',
      str: 'red',
    },
    good: {
      hash: '#ffff00',
      str: 'yellow',
    },
    perfect: {
      hash: '#00ff00',
      str: 'brightgreen',
    },
  }

  let color
  if (coverage < 80) color = colors.bad
  else if (coverage < 90) color = colors.good
  else color = colors.perfect

  return color[type]
}

module.exports = {
  findArgument,
  getColor,
}
