import React, { Component } from 'react';
import C from './C';

class B extends Component {
    render() {
        return (
            <div>
                B
                <C/>
                
            </div>
        );
    }
}

export default B;