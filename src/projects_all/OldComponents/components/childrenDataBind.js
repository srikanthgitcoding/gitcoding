import React, { Component } from 'react';

class ChildrenDataBind extends Component {
    render() {
        return (
            <div>
                checking
                <h1>{this.props.name}</h1>
                <h1>{this.props.email}</h1>
                <button onClick={() => this.props.justCall()}>clickMe</button>
            </div> 
        );
    }
}

export default ChildrenDataBind;