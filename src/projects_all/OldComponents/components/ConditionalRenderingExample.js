import React, { Component } from 'react';

import {Child} from './childComponent'

class ConditioanRendering extends Component {
    constructor(props){
        super(props)
        this.state ={
            isToggle : false
        }
    }
    
    render() {
        const fruits = ["apple", "banana", "kiwi","mango"]
        const persons = [{
            "name": "srikanth",
            "age": 27
        },
        {
            "name": "mothkuri",
            "age": 20
        }]
        const allFruits = fruits.map(fruitName => <h1>{fruitName}</h1>)
        return (
            <div>
                {this.state.isToggle ? <div>true</div> : <div>false</div>}
                <h1>Fruits</h1>
                {allFruits}
                { persons.map(person => <Child person={person}/>) }
            </div>
        );
    }
}

export default ConditioanRendering;

