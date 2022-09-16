
const persona = {
    nombre :'Harold',
    apellido : 'Torres',
    edad : 36,
    direccion : {
        ciudad : 'Colombia',
        codigo_area : 57,
    }

}

// console.log(persona.nombre)
// console.log({ persona })
// console.table(persona)
// esto solo asiga el espacio en memora osea que si modificas persona
// tambien mdoficaras a persona 2
const persona2 = persona
persona2.nombre = 'Isaias'


//  con esta asignacion se crea un objeto nuevo con espacio en 
// memoria nuevo
const persona3 = {...persona}
console.log(persona)
console.log(persona2)
console.log(persona3)


