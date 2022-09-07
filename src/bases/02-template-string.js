const nombre = 'Harold';
const apellido = 'Torres';


// let nombreCompleto = nombre+ ' '+apellido; 
// let nombreCompleto = `${ nombre } ${apellido}`
let nombreCompleto = `
${ nombre } 
${apellido}
${1+1}`
// console.log(nombreCompleto)


function getSaludo(nombre){
    return 'Hola ' + nombre ;
}

console.log(`Esto es un texto: ${getSaludo(nombre)}`)