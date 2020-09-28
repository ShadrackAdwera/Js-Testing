const puppeteer = require('puppeteer');
const { generateText, checkValidation, loadTitle } = require('./util');

jest.mock('./http')

//Unit tests
describe('Util.js', () => {
  it('should output both name and age', () => {
    const nameAge = generateText('Adwera', 25);
    expect(nameAge).toBe('Adwera (25 years old)');
  });
  it('should return a data-less text', () => {
    const nameAge = generateText(' ', null);
    expect(nameAge).toBe('  (null years old)');
  });
});

//Integration test
describe('Util.js', () => {
  it('should generate a valid text output', () => {
    const text = checkValidation('Adwera', 25);
    expect(text).toBe('Adwera (25 years old)');
  });
});

//e2e test
// describe('e2e', ()=> {
//     it('should simulate a user\'s actions', async()=>{
//         const browser = await puppeteer.launch({
//             headless: false,
//             slowMo: 80,
//             args: ['--window-size=1920,1080']
//         })
//         const page = await browser.newPage()
//         await page.goto('file:///home/adwesh/Downloads/Compressed/testing-01-starting-setup/testing-01-starting-setup/index.html')
//         await page.click('input#name')
//         await page.type('input#name','Shaddie')
//         await page.click('input#age')
//         await page.type('input#age', '24')
//         await page.click('#btnAddUser')
//         const text = await page.$eval('.user-list', el=>el.textContent)
//         expect(text).toBe('Shaddie (24 years old)')
//     })
// })

//Test async code
describe('dealing with async code', () => {
  it('will print uppercase letters to the console', async() => {
    const response = await loadTitle()
    expect(response).toBe('DELECTUS AUT AUTEM')
  });
});
