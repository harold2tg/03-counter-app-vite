
const personajes = ['goku', 'vegueta','Gohan']


const [,p2,p3] = personajes;

console.log(p3)
console.log(p2)


// Other exammple

const retornardArreglo = () =>{
    return[
        'ABC',
        '123'
    ]
}

const arr = retornardArreglo();
console.log(arr)

const [letras, numeros] = retornardArreglo();
console.log(letras)
console.log(numeros)




const otherThing = (nombre) =>{
    return [ nombre, ()=>{console.log('Hola mundo') } ];
}

const [nombre, setnombre]  = otherThing('Goku');
console.log(nombre)
setnombre()



