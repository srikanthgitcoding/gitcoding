import React, { Component } from 'react';
import { buildQueries } from '@testing-library/react';

class BindingEventHandlers extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : "Hello"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message : "just change" 
    //     })
    //     console.log(this)
    // }

    clickHandler = () =>{
        this.setState({
            message : "just change" 
        })
        console.log(this)
    }


    render() {
        const {message } = this.state
        return (
            <div>
                {message}
                {/* <button onClick={this.clickHandler.bind(this)}>ChangeContent</button> */}
                {/* <button onClick={() =>this.clickHandler()}>ChangeContent</button> */}
                <button onClick={this.clickHandler}>ChangeContent</button>

             
             
             </div>
        );
    }
}

export default BindingEventHandlers;