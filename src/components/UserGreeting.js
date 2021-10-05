import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

            // ternary operator

        return this.state.isLoggedIn ? <div>Welcome Simon</div> : <div>Welcome Guest</div>

            // if / else method

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Simon</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
    }
}

export default UserGreeting
