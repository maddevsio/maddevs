module.exports = class MetaBaseRule {
  constructor(enabled = true, names = []) {
    this.enabled = enabled
    this.ogList = names
  }

  check(dom) {
    if (!this.enabled) return
    if (!this.ogList && !this.ogList.length) return
    let report = []
    this.ogList.forEach((name) => {
      let element = dom.window.document.querySelector(`head > meta[name="${name}"]`)
      if (element && !element.content.length) {
        return report.push(`The content attribute for the <meta name="${name}" content=""> tag is empty`)
      }
      if (!element || (element && !element.content)) {
        return report.push(`This HTML without <meta name="${name}"> tag`)
      }
    })
    return report.join('\n')
  }
}
