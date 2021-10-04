import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log('Clicked')
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>RicRac</button>
            </div>
        )
    }
}

export default ClassClick
