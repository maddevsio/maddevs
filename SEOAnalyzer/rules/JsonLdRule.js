module.exports = class JsonLdRule {
  constructor(enabled = true, keys = []) {
    this.enabled = enabled
    this.keys = keys
  }

  check(dom) {
    if (!this.enabled) return
    let report = []
    const schema = dom.window.document.querySelector('head > script[type="application/ld+json"]')
    if (!schema) {
      // eslint-disable-next-line
      return report = 'This HTML without <script type="application/ld+json">'
    }
    if (schema.textContent.trim() === '') {
      // eslint-disable-next-line
      return report = 'The meta <script type="application/ld+json"></script> is empty'
    }
    try {
      const obj = JSON.parse(schema.textContent.replace(/(\r\n|\n|\r)/gm, ''))
      this.keys.forEach(key => {
        if (!obj[key] || !obj[key].length) {
          report.push(`This ${key} key is missing or invalid.`)
        }
      })
    } catch (error) {
      // eslint-disable-next-line
      return report = 'The <script type="application/ld+json"> on this page invalid.'
    }
    // eslint-disable-next-line
    return report.join('\n')
  }
}
