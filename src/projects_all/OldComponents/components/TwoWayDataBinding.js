import React, { Component } from 'react';
import ChildrenDataBind from './childrenDataBind'

class TwoWayDataBinding extends Component {
    constructor(props){
        super(props)
        this.state={
            email :"",
            name:"",
            justCheck : ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.justCall = this.justCall.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value,
        })
    }

    justCall(){
        this.setState({
            justCheck : "called"
        })
    }
    render() {
        return (
            <div>
                {this.state.justCheck}
                <input type="text" name="email" onChange={this.handleChange}/>
                <input type="text" name="name" onChange={this.handleChange}/>
                <ChildrenDataBind name={this.state.name} email = {this.state.email} justCall={this.justCall}/>
            </div>
        );
    }
}

export default TwoWayDataBinding;