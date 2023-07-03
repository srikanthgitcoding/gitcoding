import React, { Component } from 'react';
import {Child} from './childComponent'

class ParentComponent extends Component {

    constructor(props){
        super()
        this.state = {
            parentName : "aamitab bachan"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){
        console.log(`parent name is ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <Child greetParent={this.greetParent}></Child>
            </div>
        );
    }
}

export default ParentComponent;