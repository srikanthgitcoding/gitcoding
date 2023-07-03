import React, { Component } from 'react';
import B from './B'

class A extends Component {
    render() {
        return (
            <div>
                A
                <B/>

            </div>
        );
    }
}

export default A;