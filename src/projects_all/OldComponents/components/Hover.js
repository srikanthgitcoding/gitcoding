import React, { Component } from 'react';
import WithCounter from './HigherOrderComponent'

class Hover extends Component {
    render() {
        console.log("render")
        const {count,increment} = this.props
        return (
            <div>
                {this.props.name}
                <button onMouseOver={increment}>count {count} times</button>
            </div>
        );
    }
}

export default WithCounter(Hover,10);