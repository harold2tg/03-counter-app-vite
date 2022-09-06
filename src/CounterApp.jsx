import { useState } from 'react';
import PropTypes from 'prop-types'

export const CounterApp = ({value}) =>{
    
    const [ counter, setCounter ] = useState(0)

    function handleAdd(){
        setCounter( (counter)=> counter + 1)
    }

    function handleSubstract(){
        setCounter( (counter)=> counter - 1)
    }

    function handleReset(){
    setCounter( (counter)=> counter=0)
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleReset }>Reset</button>
            
        </>
    );


}

CounterApp.propTypes = {
    value:PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value:0
}