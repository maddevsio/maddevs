const scraperObject = {
  url: 'https://denisoed.amocrm.ru/',
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);

    await page.goto(this.url);

    // Auth page
    await page.waitForSelector('#authentication');
    await page.$eval('#session_end_login', el => el.value = 'denisoed@gmail.com');
    await page.$eval('#password', el => el.value = 'gorod312');
    await page.$eval('#auth_submit', btn => btn.click());
    
    // Main page
    await page.waitForSelector('#left_menu');
    
    await page.goto('https://denisoed.amocrm.ru/settings/widgets/');
    
    // Settings page
    await page.waitForSelector('.integration-card-block');
    await page.$eval('.integration-card-block', btn => btn.click());
    await page.waitForSelector('.view-integration-modal__tab-key');
    await page.$eval('.view-integration-modal__tab-key', btn => btn.click());
    
    // Modal with tokens
    await page.waitForSelector('.view-integration-modal__keys');
    return await page.$$eval('.view-integration-modal__params-block', elements => {
      console.log(elements[elements.length - 1]);
      return elements[elements.length - 1].innerText;
    });
  }
};

module.exports = scraperObject;
