// Desestructuración de objetos o asignacion desestructurante


const persona = {
    nombre : 'Juan',
    edad : '87',
    clave : 'Iroman',
    latlng : {
        lat:14.33333,
        lng:-12.3333,
    }
};

// const {nombre, edad, clave} = persona;


// console.log(nombre)
// console.log(edad)
// console.log(clave)

 
// desestructuracion en el argumento

// const retornaPersona = (person) =>{
//     console.log(nombre,edad,clave)
// }

// retornaPersona(persona)


//  mas ejemplos

const retornaPersonax = ({nombre,edad,rango='capitan'}) =>{
    console.log(nombre,edad,rango)
}

retornaPersonax(persona)


//  mas ejemplos
const retornaPersonay = ({nombre,edad,clave,rango='capitan'}) =>{
    return{
        nombreclave: clave,
        anios:edad,
    }

}
const avenger = retornaPersonay(persona)

console.log(avenger)

//  mas ejemplos

const userContext = ({nombre,edad,clave,rango='capitan'}) =>{
    return{
        nombreclave: clave,
        anios:edad,
    }

}
const avenger2 = userContext(persona)

console.log(avenger2)

//  mas ejemplos


const userContext1 = ({edad,clave, latlng:{lat,lng}}) =>{
    return{
        nombreclave: clave,
        anios:edad,
        latx:lat,
        lngx: lng,
    }

}
const {nombreclave,anios, latx,lngx} = userContext1(persona)

console.log(nombreclave,anios)
console.log(lngx,latx)


//  mas ejemplos


const userContext4 = ({edad,clave, latlng}) =>{
    return{
        nombreclavex: clave,
        aniosx:edad,
        latlng : {
            lat:14.33333,
            lng:-12.3333,
        }
    }

}

console.log('---------------------------------------------')
const {nombreclavex,aniosx, latlng} = userContext4(persona)
const {lat,lng} = latlng

console.log(nombreclavex,aniosx)
console.log(lat,lng)


