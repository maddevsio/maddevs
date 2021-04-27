module.exports = class MetaSocialRule {
  constructor(enabled = true, properties = []) {
    this.enabled = enabled
    this.properties = properties
  }

  check(dom) {
    if (!this.enabled) return
    if (!this.properties && !this.properties.length) return
    let report = []
    this.properties.forEach(property => {
      let element = dom.window.document.querySelector(`head > meta[property="${property}"]`)
      if (element && !element.content.length) {
        return report.push(`The content attribute for the <meta property="${property}" content=""> tag is empty`)
      }
      if (!element || (element && !element.content)) {
        return report.push(`This HTML without <meta property="${property}"> tag`)
      }
    })
    return report.join('\n')
  }
}
