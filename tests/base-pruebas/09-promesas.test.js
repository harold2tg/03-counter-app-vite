import {getHeroeByIdAsync} from '../../src/base-pruebas/09-promesas'


describe('Prueba en 09-promesas', () => { 
    test('getHeroeByIdAsync debe retornar un Heroe', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero =>{

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();

            });
     });
     test('getHeroeByIdAsync debe retornar un error si un heore no existe', (done) => { 
        const id = 100;
        return getHeroeByIdAsync(id)
            .catch(error =>{
                // console.log(error);
                expect(error).toBe('No se pudo encontrar el heroe con id: ${id}');
                done();
            });

     });
});