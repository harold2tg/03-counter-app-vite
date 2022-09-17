import {getHeroe, getHeroesByOwner} from '../../src/base-pruebas/08-imp-export'
import {heroes} from '../../src/data/heroes'



describe('Pruebas en el archivo 08-imp-export', () => { 
    test('getHeroe debe retornar un heroe po Id', () => { 
        const id = 1
        const heroe = getHeroe(id);
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
     })
     test('getHeroe debe retornar un undefined', () => { 
        const id = 100
        const heroe = getHeroe(id);
        expect(heroe).toEqual(undefined)
     })
     test('getHeroesByOwner debe retornar solo los heroes de DC', async () => { 
        const owner = 'DC'
        const misHeroes = getHeroesByOwner(owner);
        expect (misHeroes.length).toBe(3);
        expect(misHeroes).toEqual(misHeroes.filter ((heroe) => heroe.owner === owner))   
     })
     test('getHeroesByOwner debe retornar solo los heroes de Marvel', async () => { 
        const owner = 'Marvel'
        const misHeroes = getHeroesByOwner(owner);
        expect (misHeroes.length).toBe(2);
        expect(misHeroes).toEqual(misHeroes.filter ((heroe) => heroe.owner === owner))   
     })

 })