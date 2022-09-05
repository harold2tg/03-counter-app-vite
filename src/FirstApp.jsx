
// import { Fragment } from "react"

const nombre = "Harold"

const persona={
    nombre:'Harold',
    profesion:'Ingeniero'
}

const animal={
    nombre:'pato',
    profesion:'joder'
}

const devolveralgo = ()=> {
    return animal
}

export const FirstApp = ({title='Hola soy Harold'}) => {

  return (
    // <Fragment>
    <>
    <h1>First App</h1>
    <p>Hola soy {nombre}</p>
    <h5>{1 + 1 }</h5>

    <h4>Como mostrar un objeto:</h4>
    <p>{JSON.stringify(persona)}</p>

    <h4>Nombre: {persona.nombre}</h4>
    <h4>Profesión: {persona.profesion}</h4>

    <h1>Mostrar animales</h1>
    <p>{animal.nombre}</p>
    <p>{animal.profesion}</p>


    <h2> 1props</h2>
    <p>soy {title}</p>

    </>
    // </Fragment>
  )
}
