const puppeteer = require('puppeteer');
const tss  = require('./helpers/puppeteer').takeScreenshot;
const util = require('util');
(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://sorare.com/');
    await page.waitForSelector('.jss93')
    const buttons = await page.$$('.jss93')
    await buttons[1].click(),
    
    await page.waitForTimeout(3000)
    await tss(page);
    const frameHandle = await page.$("#wallet");
    const frame = await frameHandle.contentFrame();
    // filling form in iframe

    await frame.type('#Email', "archer.alexis@hotmail.fr"),
    await frame.type('input[type="password"]', 'bijour11'),
    await frame.click('button[type="submit"]')
    await page.waitForNavigation()
    page.on('response', async (response) => {
        try{
            const result = await response.json()    
            !!result && !! result.data  && result.data.card && console.log("************************************************************************************************",util.inspect(await response.json(), true, null, true)); 
        }
        catch(err){}
        
    }); 

    let AllCardsUrl = []
    let hasFoundPageWithCards = true;
    let i = 1
    const getCardsUrl = async(runningPage)=>{
        try{
            const AllLinks = await runningPage.$$eval('a', as => as.map(a => a.href));
            const cardLinks = AllLinks.filter(x=>x.includes('https://sorare.com/cards/'));
            if (cardLinks.length === 0) {
                hasFoundPageWithCards= false
            }
            else{
                cardLinks.map(x=>AllCardsUrl.push(x))

            }
        }
        catch(err){
            console.log(err)
            hasFoundPageWithCards = false
        }
    }
    while (hasFoundPageWithCards && i <2) {
        await page.goto(`https://sorare.com/market/new_signings?refinementList%5Bsale.bundled%5D%5B0%5D=false&page=${i}&configure%5BhitsPerPage%5D=20&configure%5Bfilters%5D=sale.primary%3Atrue%20AND%20visible%3D1%20AND%20%28rarity%3Arare%20OR%20rarity%3Asuper_rare%20OR%20rarity%3Aunique%29&configure%5Bdistinct%5D=true&configure%5BattributesToRetrieve%5D%5B0%5D=sale`);
        i++;
        await page.waitForTimeout(1000);
        await getCardsUrl(page)
    }
 
    
    

console.log('AllCardsUrl |||  ' ,typeof(AllCardsUrl),'  |||  ', AllCardsUrl)
await page.goto(AllCardsUrl[0]) 
//   console.log(response);
    // await browser.close();
})();