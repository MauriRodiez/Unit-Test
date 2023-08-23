
//const { test } = require('node:test');
//const { describe } = require('yargs');
const suma = require('../calculadora.js');

describe('Prueba de sumas', () => {

    test('suma de dos numeros', () => {
        expect(suma(1,2)).toBe(3);
    })
    
    test('suma de cero', () => {
        expect(suma(0,0)).toBe(0);
    })

    test('suma de NULL', () => {
        expect(suma(null,null)).toBe(0);
    })

    test('suma de texto', () => {
        expect(suma('a','b')).toBe(0);
    })

})
