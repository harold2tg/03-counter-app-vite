import { string } from 'prop-types';
import {getImagen} from '../../src/base-pruebas/11-async-await'

describe('Prueba 11-async-await',() => {
    test('getImagen debe revolver la url de la imagen', async () => { 
        
        const url = await getImagen();
        // console.log(url);
        expect(typeof url).toBe('string')

     }); 

 });