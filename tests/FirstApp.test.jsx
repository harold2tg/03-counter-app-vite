import {render} from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Probando componente FirstApp', () => { 
    test('Debe hacer match con snatshot', () => { 

        const titulo = 'Hola soy Harold'
        const subtitulo = 'Soy ingeniero de sistemas'
        const nombre = 'Hola soy Hacreado por isaias'

        const {container } = render(<FirstApp title={titulo}/>)
        expect (container).toMatchSnapshot();

     })
     test('debe mostrar el titulo en h1', () => { 
        const titulo = 'Hola soy Harold'
        const {container, getByText } = render(<FirstApp title={titulo}/>)
        expect (getByText(titulo)).toBeTruthy();
        const h1 = container.querySelector('h1')
        console.log(h1.innerHTML)
        expect(h1.innerHTML).toContain(titulo)

      })
 })