const fs = require('fs')
const path = require('path')
const {isEmpty} = require ("lodash")

module.exports = {
    click: async function(page, selector){
        try{
            await page.waitForSelector(selector);
            await page.click(selector);
        }catch(error){
            throw new Error('Could not click on the')
            
        }
    },
    getText: async function(page, selector){
        try{
            await page.waitForSelector(selector);
            return await page.$eval(selector, element => element.textContent)
        }catch(error){
            throw new Error('Could not get text from selector' +{selector});
        }
    },
    getCount: async function(page, selector){
        try{
            await page.waitForSelector(selector);
            return page.$$eval(selector, element => element.length);
        }catch(error){
            throw new Error('Could not found the element '+{selector});
        }
    },
    typeText: async function(page, selector, text){
        try{
            await page.waitForSelector(selector);
        await page.type(selector,text);
        }catch(error){
            throw new Error('Could not found the element typeText');
        }
    },
    waitForText: async function(page, selector, text){
        try {
            await page.waitForSelector(selector);
            await page.waitForFunction(selector, text => {
                document.querySelector(selector).innerText.includes(text),
                {},
                selector,
                text;
                });
        } catch (error) {
            throw new Error('Could not found the element waitForText')
        }
       
    },
    shouldNotExist: async function(page,selector){
        try {
            await page.waitForSelector(selector, {hiddern:true})
        } catch (error) {
            throw new Error('Could not found the element shouldNotExist')
        }
    },
    takeScreenshot: async function (pageToHandle){
        let pageName = pageToHandle._target._targetInfo.url
        pageName = pageName.replace(/\//g, "_").replace('https:__',"")
        
        const folder = await new Promise((resolve,reject) => fs.readdir(
                path.dirname(require.main.filename )+"/screenshots",
                (err, files)=>{
                    const fileList = files.filter(files=>files.includes(pageName))
                    const nextImgNumber = fileList
                        .map(files=>parseInt(files.replace(pageName, "")))
                        .sort((a,b)=>b-a)
                
            return !!err? reject(err): isEmpty(nextImgNumber)? resolve(0): resolve(nextImgNumber[0]+1)
        }))

         return pageToHandle.screenshot({ path: 'screenshots/' + pageName + folder.toString()+ '.png' });
    }
}
