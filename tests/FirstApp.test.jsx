import {render} from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Probando componente FirstApp', () => { 
    test('Debe hacer match con snatshot', () => { 

        const titulo = 'Hola soy Harold'
        const subtitulo = 'Soy ingeniero de sistemas'
        const nombre = 'Hola soy Hacreado por isaias'

        render(<FirstApp title={titulo}/>)
     })
 })