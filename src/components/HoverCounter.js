import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    hoverCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h2 onMouseOver={this.hoverCount}>Hovered {count}</h2>
            </div>
        )
    }
}

export default HoverCounter
