
const tss  = require('./helpers/puppeteer').takeScreenshot;


const sorare={
    performLogin: async function(page, goToOnceLogged=""){
        console.log('try to log')
        if (!page.url().includes('https://sorare.com')){
            await page.goto('http://sorare.com');
            await page.waitForSelector('.jss93')
        }
        const buttons = await page.$$('.jss93')
        await buttons[1].click()
        await page.waitForTimeout(5000)
        const frameHandle = await page.$("#wallet");
        const frame = await frameHandle.contentFrame();
        // filling form in iframe
    
        await frame.type('#Email', "archer.alexis@hotmail.fr"),
        await frame.type('input[type="password"]', 'bijour11'),
        await frame.click('button[type="submit"]')
        await page.waitForTimeout(2000)

        if (!page.url().includes('https://sorare.com'+goToOnceLogged)){
            await page.goto('https://sorare.com'+goToOnceLogged);
            await page.waitForTimeout(2000)
        }
       
        console.log('%cIslogged')

    },
    getMarketCardsUrl: async function (page) {
        let marketBasicUrl = "https://sorare.com/market/new_signings?page=1&configure%5BhitsPerPage%5D=20&configure%5Bfilters%5D=sale.primary%3Atrue%20AND%20visible%3D1%20AND%20%28rarity%3Arare%20OR%20rarity%3Asuper_rare%20OR%20rarity%3Aunique%29&configure%5Bdistinct%5D=true&configure%5BattributesToRetrieve%5D%5B0%5D=sale"

        if (!page.url().includes('https://sorare.com/market')){
            await page.goto(marketBasicUrl);
            await page.waitForNavigation()
        }

        AllCardsUrl = []
        let hasFoundPageWithCards = true;
        let i = 1
        const getCardsUrl = async(runningPage)=>{
            try{
                const AllLinks = await runningPage.$$eval('a', as => as.map(a => a.href));
                const cardLinks = AllLinks.filter(x=>x.includes('https://sorare.com/cards/'));
                if (cardLinks.length === 0) {
                    hasFoundPageWithCards = false;
                    console.log('no cards found')
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
        while (hasFoundPageWithCards) {
            await page.goto(marketBasicUrl.replace('page=1', 'page='+i));
            i++;
            await page.waitForTimeout(1000);
            await getCardsUrl(page)
        }
        return AllCardsUrl
    }
}

module.exports = sorare
