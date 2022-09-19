
// import { Fragment } from "react"
import PropTypes from 'prop-types'
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

export const FirstApp = ({title, subTitle, nombre}) => {

  return (
    // <Fragment>
    <>
     <h1 data-testid="test-title">{title}</h1>
     <p>{ subTitle }</p>
     <p>{ subTitle }</p>

    {/* <h1>First App</h1>
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
    <p>{title}</p> */}

    </>
    // </Fragment>
  )
}

FirstApp.propTypes = {
  title:PropTypes.string.isRequired,   
  subtitulo:PropTypes.string.isRequired,
  nombre:PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  title:'Nuevo titulo',
  subtitulo:'Nuevo sub-titulo',
  nombre:'sin nombre'

}
