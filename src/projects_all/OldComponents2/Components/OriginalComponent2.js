import React, { Component } from 'react';
import IncrementCounter from  './ClickCounter'


class OriginalComponent2 extends Component {
    render() {
        return (
            <div>
                {this.props.count}
                <button onMouseOver={this.props.increment}>Button Hover</button>
            </div>
        );
    }
}

export default IncrementCounter(OriginalComponent2);