import PropTypes from 'prop-types'

export const CounterApp = ({value}) =>{
    
    function handleAdd(event,value){
        console.log(value)
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <button onClick={ (event)=> handleAdd(event,value)}>
            +1
            </button>
        </>
    );


}

CounterApp.propTypes = {
    value:PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value:0
}