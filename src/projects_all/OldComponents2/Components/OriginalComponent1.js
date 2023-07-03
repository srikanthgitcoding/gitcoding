import React, { Component } from 'react';
import IncrementCounter from  './ClickCounter'

class OriginalComponent1 extends Component {
    render() {
        return (
            <div>                    
                {this.props.count}
                <button onClick={this.props.increment}>Button Click</button>
            </div>
        );
    }
}

export default IncrementCounter(OriginalComponent1);