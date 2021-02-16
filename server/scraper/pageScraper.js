const _config_ = require('../config');

const scraper = async browser => {
  let page = await browser.newPage();
  let result;

  console.log(`Navigating to ${_config_.AMOCRM_API_URL}...`);

  await page.goto(_config_.AMOCRM_API_URL);

  // Auth page
  await page.waitForSelector('#authentication');
  await page.$eval('#session_end_login', (el, login) => el.value = login, _config_.AMOCRM_LOGIN);
  await page.$eval('#password', (el, password) => el.value = password, _config_.AMOCRM_PASSWORD);
  await page.$eval('#auth_submit', btn => btn.click());
  
  // Main page
  await page.waitForSelector('#left_menu');
  
  await page.goto(`${_config_.AMOCRM_API_URL}/settings/widgets/`);
  
  // Settings page
  await page.waitForSelector('.integration-card-block');
  await page.$eval(`[id="${_config_.AMOCRM_INTEGRATION_ID}"`, btn => btn.click());
  await page.waitForSelector('.view-integration-modal__tab-key');
  await page.$eval('.view-integration-modal__tab-key', btn => btn.click());
  
  // Modal with tokens
  await page.waitForSelector('.view-integration-modal__keys');

  // Get client secret token
  const client_secret = new Promise(async (resolve, reject) => {
    const html = await page.$$eval('.view-integration-modal__params-block', elements => elements[0].innerHTML);
    return html.replace(/data-clipboard-text="(.*?)"/g, (match, token) => {
      resolve(token);
    });
  });

  // Get client id token
  const client_id = new Promise(async (resolve, reject) => {
    const html = await page.$$eval('.view-integration-modal__params-block', elements => elements[1].innerHTML);
    return html.replace(/data-clipboard-text="(.*?)"/g, (match, token) => {
      resolve(token);
    });
  });

  // Get auth token
  const code = new Promise(async (resolve, reject) => {
    const html = await page.$$eval('.view-integration-modal__params-block', elements => elements[2].innerHTML);
    return html.replace(/data-clipboard-text="(.*?)"/g, (match, token) => {
      resolve(token);
    });
  });

  try {
    const [clientIdR, clientSecretR, codeR] = await Promise.all([client_id, client_secret, code]);
    result = { client_id: clientIdR, client_secret: clientSecretR, code: codeR };
  } catch (err) {
    result = err;
  } finally {
    await browser.close();
  }
  return result;
};

module.exports = scraper;
