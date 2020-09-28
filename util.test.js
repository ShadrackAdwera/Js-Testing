const { generateText } = require('./util')

describe('Util.js', ()=>{
    it('Returns both name and age concatenated', ()=>{
        const nameAge = generateText('Adwera',25)
        expect(nameAge).toBe('Adwera (25 years old)')
    })
    it('Returns a data-less text', ()=>{
        const nameAge = generateText(' ',null)
        expect(nameAge).toBe('  (null years old)')
    })
})