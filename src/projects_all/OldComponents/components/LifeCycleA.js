import React, { Component } from 'react';
import {LifeCycleB} from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props){
        super(props)
        this.state = {
            nameChanged : true
        }
        console.log("LifeCycle A constructor")
        this.ClickMe = this.ClickMe.bind(this)
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycle A getDerivedStateFromProps")
        return null
    }


    componentDidMount() {
        console.log("LifeCycle A componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifeCycle A shouldComponentUpdate")
        return null
    }
    getSnapshotBeforeUpdate(){
        console.log("LifeCycle A getSnapshotBeforeUpdate")

    }
    componentDidUpdate(){
        console.log("LifeCycle A componentDidUpdate")
    }
    
    
    ClickMe(){
        console.log("clicked")
        this.setState({
            nameChanged : false
        });
    }
    
    render() {
        console.log("LifeCycle A render")
        return (
            <div>
              LifeCycle A
              {this.state.nameChanged && <h1>hide and showe</h1>}
              <button onClick={this.ClickMe}>clickMe</button>
              <LifeCycleB/>
            </div>
        );
    }
}

export default LifeCycleA
