module.exports = class MetaSocialRule {
  constructor(enabled = true, properties = []) {
    this.enabled = enabled
    this.properties = properties
  }

  check(dom) {
    if (!this.enabled) return
    if (!this.properties && !this.properties.length) return
    const report = []
    // eslint-disable-next-line
    this.properties.forEach(property => {
      const element = dom.window.document.querySelector(`head > meta[property="${property}"]`)
      if (element && !element.content.length) {
        // eslint-disable-next-line
        return report.push(`The content attribute for the <meta property="${property}" content=""> tag is empty`)
      }
      if (!element || (element && !element.content)) {
        // eslint-disable-next-line
        return report.push(`This HTML without <meta property="${property}"> tag`)
      }
    })
    // eslint-disable-next-line
    return report.join('\n')
  }
}
