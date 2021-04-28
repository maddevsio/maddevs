const fs = require('fs')
const path = require('path')
const SeoInspector = require('seo-inspector')
const cliProgress = require('cli-progress')
const params = require('./params')

// Rules
const MetaSocialRule = require('./rules/MetaSocialRule')
const MetaBaseRule = require('./rules/MetaBaseRule')
const JsonLdRule = require('./rules/JsonLdRule')
const CanonicalLinkRule = require('./rules/CanonicalLinkRule')

async function asyncSome(arr, predicate) {
  for (const e of arr) {
    /* eslint-disable no-await-in-loop */
    if (await predicate(e)) return true
  }
  return false
}

async function log(report) {
  const successMessage = 'No any SEO defect found.'
  const green = '\x1b[32m'
  const red = '\x1b[31m'
  const yellow = '\x1b[33m%s\x1b[0m'
  const withErrors = await asyncSome(report, async i => i.errors.trim() !== successMessage)

  if (!withErrors) return console.log(`\n %s${successMessage}`, green)

  for (const item of report) {
    if (item.errors.trim() !== successMessage) {
      console.log(yellow, `File: ${item.file.trim()}`)
      console.log(`%s${item.errors}`, red)
    }
  }

  return process.exit(1) // Stop process in terminal
}

function analyzeFile(pathFile) {
  return new Promise(resolve => new SeoInspector({
    done: (err, data) => {
      if (err) throw err
      resolve(data)
    },
  })
    .read(fs.createReadStream(pathFile))
    .addRule('CanonicalLinkRule', { object: new CanonicalLinkRule() })
    .addRule('JsonLdRule', { object: new JsonLdRule(params.JsonLdRule.enabled, params.JsonLdRule.keys) })
    .addRule('MetaSocialRule', { object: new MetaSocialRule(params.MetaSocialRule.enabled, params.MetaSocialRule.properties) })
    .addRule('MetaBaseRule', { object: new MetaBaseRule(params.MetaBaseRule.enabled, params.MetaBaseRule.names) })
    .addRule('ImgTagWithAltAttritube')
    .addRule('NoMoreThanOneH1Tag')
    .write(fs.createWriteStream('report.txt')))
}

function getFilesFromFolder(base, ext, listFiles, result) {
  const files = listFiles || fs.readdirSync(base)
  let res = result || []
  files.forEach(file => {
    const filePath = path.join(base, file)
    if (fs.statSync(filePath).isDirectory()) {
      res = getFilesFromFolder(filePath, ext, fs.readdirSync(filePath), res)
      return res
    }
    if (file.substr(-1 * (ext.length + 1)) === `.${ext}`) {
      if (params.ignoreFiles.some(path => path === filePath)) return
      return res.push(filePath)
    }
    return res
  })
  return res
}

async function analyzeFiles(array) {
  const report = []
  const consoleProgressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
  consoleProgressBar.start(array.length, 0)

  for (const file of array) {
    consoleProgressBar.increment()
    const errors = await analyzeFile(file)
    /* eslint-disable no-await-in-loop */
    report.push({ file, errors })
  }

  consoleProgressBar.stop()
  log(report)
}

const listFiles = getFilesFromFolder('dist', 'html')
analyzeFiles(listFiles)
