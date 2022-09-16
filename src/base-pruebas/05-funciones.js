// /* funcioness en javascrpt*/

// // forma incorrecta de declarar una funcion
// // function saludar(nombre){
// //     return `Hola ${nombre}`;
// // }


// // // saludar = 30
// // console.log(saludar('Harold'))


// // forma correcta de hacerlo

// // const saludar = function(nombre){
// //     return `Hola ${nombre}`;
// // }


// // // saludar = 30
// // // console.log(saludar)

// // console.log(saludar('Harold'))

// // funciones de flecha

// const saludar = (nombre) => `Hola ${nombre}`;

// // saludar = 30
// // console.log(saludar)

// console.log(saludar('vegeta'))
// // tarea

export const getUser = ()=> ({
    uid:'avvbcd',
    username : 'Harold'
})

console.log(getUser)


export function getUsuarioActivo(nombre){
    return {
        uid:'ABC454',
        username : nombre
    }
};

// const usuarioActivo = getUsuarioActivo('Isaias')

// console.log(usuarioActivo)


const getUserActive =  (nombre) =>({
        uid:'ABC454',
        username : nombre
    });

// const user = getUserActive('abigail')
// console.log(user)