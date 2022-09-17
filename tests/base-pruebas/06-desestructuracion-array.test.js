import {retornardArreglo} from '../../src/base-pruebas/06-desestructuracion-array'

describe('Prueba 06-desestructuracion de array ', () => { 
    test('retornardArreglo debe retornar un un letras y un numero', () => { 

        const [letras, numeros] = retornardArreglo()
        
        // el toBe evalua tambien evalua el tipo de dato
        expect(letras).toBe('ABC')
        expect(numeros).toBe(123)
       
        // si solo queremos evaluar el tipo de dato seria asi
        expect(typeof letras).toBe('string')
        expect( typeof numeros).toBe('number')

        // otra forma
        expect( letras ).toEqual( expect.any( String ))
        // o 
        expect( letras ).toStrictEqual( expect.any( String ))





     })
 })