const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/virginiatr6/?hl=es');
  await page.screenshot({ path: 'example.png' });

  const seguidores = await page.evaluate(() => document.querySelectorAll('.lOXF2')[1]).innerText;

  await browser.close();
})();