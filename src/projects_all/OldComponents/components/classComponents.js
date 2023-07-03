// whenevr u r creting a class component we need to include 2 imports


import React , { Component } from 'react'

class MyClass extends Component{
    render(){
        return <h1>class component {this.props.name} and age is {this.props.age } </h1>
    }
}

export default MyClass

