const app = require ('express')()
const sorare = require ('./sorare')
const puppeteer = require('puppeteer');
const util = require('util');
const sorareData = require('./sorareData');



module.exports = async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    
    page.on('response', async (response) => {
        if (response._url.includes('graphql'))
        try{
            const result = await response.json()    
            !!result && !! result.data  && result.data.card && console.log("************************************************************************************************",util.inspect(await response.json(), true, null, true)); 
        }
        catch(err){}
        
    }); 

//     await sorare.performLogin(page)
//     const cardList = await sorare.getMarketCardsUrl(page)   
    

//     console.log(cardList)
// await page.goto(cardList[0]) 

    await sorareData.performLogin(page)


//   console.log(response);
    // await browser.close();
};