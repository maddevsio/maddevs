module.exports = class MetaOpenGraphRule {
  constructor(enabled = true, ogList = []) {
    this.enabled = enabled
    this.ogList = ogList
  }

  check(dom) {
    if (!this.enabled) return
    if (!this.ogList && !this.ogList.length) return
    let report = []
    this.ogList.forEach((og) => {
      let element = dom.window.document.querySelector(`head > meta[property="${og}"]`)
      if (element && !element.content.length) {
        return report.push(`The content attribute for the <meta property="${og}" content=""> tag is empty`)
      }
      if (!element || (element && !element.content)) {
        return report.push(`This HTML without <meta property="${og}"> tag`)
      }
    })
    return report.join('\n')
  }
}
