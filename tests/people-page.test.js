const puppeteer = require('puppeteer');

let browser, page;

beforeEach(async () => {
    browser = await puppeteer.launch({
        headless: false
    });
    page = await browser.newPage();
    await page.goto('localhost:3000/people');
});

afterEach(async () => {
    await browser.close();
});

test('We access the People title', async () => {        
    const text = await page.$eval('h1.page-title', el => el.innerHTML);
    expect(text).toEqual('People');
});