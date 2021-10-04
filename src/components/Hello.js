import React from 'react'

const Hello = () => {
// JSX version
    // return (
    //     <div className= 'dummyClass'>
    //         <h1>Hello Simon</h1>
    //     </div>
    // )
//  without JSX
    return (React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, "Hello Simon")))
}

export default Hello;

// Here you can see why we need to import React (React.createElement)

