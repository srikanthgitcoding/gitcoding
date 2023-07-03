import React, { Component } from 'react';
import WithCounter from './HigherOrderComponent'

class Counter extends Component {
    render() {
        console.log("render")
        const {count,increment} = this.props
        return (
            <div>
                                {this.props.name}

                <button onClick={increment}>count {count} times</button>
            </div>
        );
    }
}

export default WithCounter(Counter,5);