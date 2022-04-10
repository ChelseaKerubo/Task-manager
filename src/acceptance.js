const { remote } = require('webdriverio');
const assert =require('assert');


let browser ;

;(async () => {

    browser =await remote ({
        capabilities : {browserName :'chrome'}
    })

    await browser.navigateTo('http://localhost:3000')
    

    const SearchInput = await browser.$('#searchid')
    await SearchInput.setValue('Eating lunch')

    
    // const searchBtn = await browser.$('#submitbutton')
    // await searchBtn.click()

     const pageTitle = await browser.getTitle();

    // assert(pageTitle === 'BMI');

    //await browser.deleteSession();
})().catch((err) => {
    console.error(err);
    return browser.deleteSession();
})