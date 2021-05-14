module.exports = class CanonicalLinkRule {
  constructor(enabled = true) {
    this.enabled = enabled
  }

  check(dom) {
    if (!this.enabled) return
    let report = ''
    const element = dom.window.document.querySelector('head > link[rel="canonical"]')
    if (!element) {
      // eslint-disable-next-line
      return report = ('This HTML without <link rel="canonical" href="..."> link')
    }
    if (element && !element.href) {
      // eslint-disable-next-line
      return report = ('The canonical link without href attribute')
    }
    if (element && !element.href.length) {
      // eslint-disable-next-line
      return report = ('The canonical link for the <link rel="canonical" href=""> tag is empty')
    }
    if (element && element.href.substr(-1) !== '/') {
      // eslint-disable-next-line
      return report = ('The href attribute does not have a slash at the end of the link.')
    }
    // eslint-disable-next-line
    return report
  }
}
