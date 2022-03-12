import React, { Component } from 'react';

export default class Counter extends Component {
    state = {
        number: 0,
    }

    increment = (event, number) => {
        event.preventDefault();
        this.setState((prevState)=>({
            number: prevState.number + number,
        }));
    }
    
    render() {
        const {number} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <a href="go.somewhere" onClick={(event)=>this.increment(event, 10)}>Increment</a>
            </div>
        )
    }
}
