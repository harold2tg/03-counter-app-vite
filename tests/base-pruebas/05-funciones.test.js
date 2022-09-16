import {getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones'

describe('Pruebas 05-funciones',()=>{
    test('getUser debe retornar un objeto', () => { 
        const testUser = {
            uid:'avvbcd',
            username : 'Harold'
        }

        const user = getUser()
        // console.log(user)
        expect(testUser).toEqual(user)

    });

    test('getUserActivo debe retornar un objeto', ()=>{
        const name = 'Abigail'
        const user = getUsuarioActivo(name)

        expect(user).toStrictEqual({
            uid:'ABC454',
            username : name

        });


    })
})