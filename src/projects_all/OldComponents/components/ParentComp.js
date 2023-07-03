import React, { Component } from 'react';
import PureComp from './PureComponents'
import RegComp from './RegComp'
import MemoComp from './MemoCompoent'

class ParentComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            lastName : "sri"
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                lastName : "sri"
            })
        },3000)
    }

    render() {
        console.log("parent component")
        return (
            <div>
                Parent Component
                {/* <PureComp lastName={this.state.lastName}/>
                <RegComp lastName={this.state.lastName}/> */}
                <MemoComp lastName={this.state.lastName}></MemoComp>
            </div>
        );
    }
}

export default ParentComp;