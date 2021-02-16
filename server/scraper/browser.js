const puppeteer = require('puppeteer');

async function startBrowser() {
  let browser;
  try {
    console.log('Opening the browser......');
    browser = await puppeteer.launch({
      headless: true,
      args: ['--disable-setuid-sandbox', '--no-sandbox', '--disable-extensions'],
      ignoreHTTPSErrors: true
    });
  } catch (err) {
    console.log('Could not create a browser instance => : ', err);
  }
  return browser;
}

module.exports = {
  startBrowser
};
