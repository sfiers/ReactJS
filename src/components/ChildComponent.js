import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('Simon')}>Greet Parents</button>
        </div>
    )
}

export default ChildComponent
