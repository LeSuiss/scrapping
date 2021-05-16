const puppeteer = require('puppeteer');
const tss  = require('./helpers/puppeteer').takeScreenshot;

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://sorare.com/');
    await page.waitForSelector('.jss93')
    const buttons = await page.$$('.jss93')
    await buttons[1].click(),
    
    await page.waitForTimeout(4000)
    await tss(page);
    const frameHandle = await page.$("#wallet");
    const frame = await frameHandle.contentFrame();
    // filling form in iframe

    await frame.type('#Email', "archer.alexis@hotmail.fr"),
    await frame.type('input[type="password"]', 'bijour11'),
    await frame.click('button[type="submit"]')
    await page.waitForNavigation()
    await page.goto('https://sorare.com/market/new_signings?refinementList[sale.bundled][0]=false');
    console.log("test")
    await page.waitForTimeout(1000)

    const stories = await page.$$eval('a', as => as.map(a => a.href));
    console.log(stories.filter(x=>x.includes('https://sorare.com/cards/')))
    //   console.log(response);
    // await browser.close();
})();