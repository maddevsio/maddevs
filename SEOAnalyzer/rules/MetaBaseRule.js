module.exports = class MetaBaseRule {
  constructor(enabled = true, names = []) {
    this.enabled = enabled
    this.ogList = names
  }

  check(dom) {
    if (!this.enabled) return
    if (!this.ogList && !this.ogList.length) return
    const report = []
    // eslint-disable-next-line
    this.ogList.forEach(name => {
      const element = dom.window.document.querySelector(`head > meta[name="${name}"]`)
      if (element && !element.content.length) {
        // eslint-disable-next-line
        return report.push(`The content attribute for the <meta name="${name}" content=""> tag is empty`)
      }
      if (!element || (element && !element.content)) {
        // eslint-disable-next-line
        return report.push(`This HTML without <meta name="${name}"> tag`)
      }
    })
    // eslint-disable-next-line
    return report.join('\n')
  }
}
