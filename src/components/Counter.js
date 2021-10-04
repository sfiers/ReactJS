import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0     
        }
    }
    
    // increment(){
    //     // always use setState method to modify the state, NEVER modify the state direcly like his.state.count += 1

    //     // this.state.count += 1
    //     // console.log(this.state.count)


    //     // setState is async

    //     // this.setState({
    //     //     count: this.state.count + 1})
    //     // console.log(this.state.count) // this executes before setState)


    //     // pass function as callback

    //     // this.setState({
    //     //     count: this.state.count + 1}, () => console.log(this.state.count)
    //     // ) 
        
    // }

    // Increment based on a previous state
    // if we don't do this incrementFive will only increment One
    // using prevState.count instead of this.state.count will prevent this error
    // reminder parameters of setState(prevState, props)

    
    increment(){ 
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => console.log(this.state.count))

    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    

    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
