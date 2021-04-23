const fs = require('fs')
const path = require('path')
const SeoInspector = require('seo-inspector')
const cliProgress = require('cli-progress')

function analyzeFile(pathFile) {
  return new Promise(resolve => new SeoInspector({
    done: (err, data) => {
      if (err) throw err
      resolve(data)
    },
  })
    .read(fs.createReadStream(pathFile))
    .write(fs.createWriteStream('report.txt')))
}

function getFilesFromDist(base, ext, listFiles, result) {
  const files = listFiles || fs.readdirSync(base)
  let res = result || []
  files.forEach(file => {
    const filePath = path.join(base, file)
    if (fs.statSync(filePath).isDirectory()) {
      res = getFilesFromDist(filePath, ext, fs.readdirSync(filePath), res)
      return res
    }
    if (file.substr(-1 * (ext.length + 1)) === `.${ext}`) {
      return res.push(filePath)
    }
    return res
  })
  return res
}

async function analyzeAllFiles(array) {
  const report = []
  const consoleProgressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
  consoleProgressBar.start(array.length, 0)

  for (const file of array) {
    consoleProgressBar.increment()
    /* eslint-disable no-await-in-loop */
    report.push({ data: await analyzeFile(file), file })
  }

  consoleProgressBar.stop()
}

const listFiles = getFilesFromDist('dist', 'html')
analyzeAllFiles(listFiles)
