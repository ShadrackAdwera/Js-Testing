const { generateText, checkValidation } = require('./util')

//Unit tests
describe('Util.js', ()=>{
    it('should output both name and age', ()=>{
        const nameAge = generateText('Adwera',25)
        expect(nameAge).toBe('Adwera (25 years old)')
    })
    it('should return a data-less text', ()=>{
        const nameAge = generateText(' ',null)
        expect(nameAge).toBe('  (null years old)')
    })
})

//Integration test
describe('Util.js', ()=>{
    it('should generate a valid text output', ()=>{
        const text = checkValidation('Adwera', 25)
        expect(text).toBe('Adwera (25 years old)')
    })
})