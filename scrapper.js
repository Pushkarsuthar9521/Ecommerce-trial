const { default: puppeteer } = require("puppeteer");
const { writeFile, readFile } = require("fs/promises");
const {load } = require('cheerio')

const main = async () => {
    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:{
            height:768,
            width:1366
        }
    })
    const page = await browser.newPage()
    await page.goto('https://www.myntra.com/')

    await page.type('.desktop-searchBar', 'puma')
    await page.keyboard.press('Enter')
    await page.waitForTimeout('5000')

    const product = [];
    const $ = load(await page.content())
    // document.querySelectorAll('#desktopSearchResults .product-product')
    

    // $('.product-product').each(function(index, nameElement) {
    //     var brandElement = $('.product-brand').eq(index); // Get the corresponding brand element
    //     var image = $('.product-imageSliderContainer').eq(index); // Get the corresponding brand element
        
    //     product.push({
    //         name: $(nameElement).text(),
    //         brand: $(brandElement).text(),
    //         image: image.attr('src')
    //     });
    // });
    
    $('.product-product').each(function(index, nameElement) {
        var brandElement = $('.product-brand').eq(index);
        var imageElement = $('.product-imageSliderContainer').eq(index).find('img'); // Select the <img> element within .product-imageSliderContainer
        
        product.push({
            name: $(nameElement).text(),
            brand: $(brandElement).text(),
            image: imageElement.attr('src') // Get the src attribute of the <img> element
        });
    });
    




    await writeFile('product.json', JSON.stringify(product) )
    await browser.close()



}

main()