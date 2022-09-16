import {getSaludo} from '../../src/base-pruebas/02-template-string'

describe('Prueba en 02 tamplate-string', () => {  
    test('Getsaludo debe retornar "Hola Harold"', () => { 
        const name = 'Harold'
        const message = getSaludo(name)
        expect ( message).toBe(`Hola ${ name }`)
    });
});