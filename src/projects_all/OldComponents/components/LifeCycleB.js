import React, { Component } from 'react';

export class LifeCycleB extends Component {
    constructor(props){
        super(props)
        this.state = {
            isToggle : false
        }
        console.log("LifeCycle B constructor")
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycle B getDerivedStateFromProps")
        return null
    }
    shouldComponentUpdate(){
        console.log("LifeCycle B shouldComponentUpdate")
        return null

    }
    getSnapshotBeforeUpdate(){
        console.log("LifeCycle B getSnapshotBeforeUpdate")

    }
    componentDidUpdate(){
        console.log("LifeCycle B componentDidUpdate")
    }

    componentDidMount() {
        console.log("LifeCycle B componentDidMount")
    }
    
    render() {
        console.log("LifeCycle B render")
        return (
            <div>
              LifeCycle B
            </div>
        );
    }
}


