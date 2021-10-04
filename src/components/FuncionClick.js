import React from 'react'

function FuncionClick() {

    function clickHandler() {
        console.log('Button function clicked')
    }

    return (
        <div>
            <button onClick={clickHandler}>Function Click</button>
        </div>
    )
}

export default FuncionClick

