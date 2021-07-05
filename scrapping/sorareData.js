const puppeteer = require('puppeteer');
const tss  = require('./helpers/puppeteer').takeScreenshot;
const util = require('util');
const axios = require('axios')


const sorareData={
    performLogin: async function(page, goToOnceLogged=""){
        console.log('try to log')
        if (!page.url().includes('https://www.soraredata.com/login')){
            await page.goto('https://www.soraredata.com/login');
            await page.waitForSelector('input[name="username"]')
        }
    
        await page.type('input[name="username"]', "lesuiss"),
        await page.type('input[type="password"]', 'bijour11'),
        await page.click('button[type="submit"]')
        await page.waitForTimeout(2000)
        console.log('%c Islogged','background: #222; color: #bada55')

    },
    getMarketCardsUrl: async function () {
        let rootUrl = "https://www.soraredata.com/api/stats/newFullRankings/overall/false/all/"
        allPlayersList = []
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
            await axios.get('https://www.soraredata.com/api/stats/newFullRankings/overall/false/all/1')
            await page.goto(marketBasicUrl+i);
            i++;
            await page.waitForTimeout(1000);
            await getCardsUrl(page)
        }
        return AllCardsUrl
    }
}


module.exports = sorareData