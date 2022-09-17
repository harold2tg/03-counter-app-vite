// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log('2 segundos despues')
//     }, 2000);
// });


// otro ejercicio

// import {getHeroe} from './bases/imp-export';

// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         // resolve()
//         const miheroe = getHeroe(2)
//         // resolve(miheroe)
//         reject('No se pudo encontrar el Heroe')
//     }, 2000);
// });

// promesa.then((miheroe)=>{
//     console.log('desde el then ', miheroe)
// }).catch(err => console.warn(err));

// otro ejercio
// import {getHeroe} from './bases/imp-export';
// import heroes from './data/heroes';

// const getHeroeByIdAsync = (id)=>{

//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             // resolve()
//             const miheroe = getHeroe(id)
//             resolve(miheroe)
//             // reject('No se pudo encontrar el Heroe')
//         }, 2000);
// });
// }

// getHeroeByIdAsync(2)
//     .then(miheroe => console.log('heroe', miheroe) )



// otro ejercicio

import {getHeroe} from '../base-pruebas/08-imp-export';
import heroes from '../data/heroes';

export const getHeroeByIdAsync = (id)=>{

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const miheroe = getHeroe(id);
            if(miheroe){
                resolve(miheroe)
            }else{
                reject('No se pudo encontrar el héroe');
            }

        }, 1000);
});
}

// getHeroeByIdAsync(1)
//     // .then(miheroe => console.log('heroe', miheroe))
//     // .catch(err => console.warn(err))
//     .then(console.log)
//     .catch(console.warn)

    