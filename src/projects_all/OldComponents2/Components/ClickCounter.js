import React, { Component } from 'react';

const IncrementCounter = (WrappedComponent) => {
    
    class ClickCounter extends Component {
        constructor(props){
            super(props)
            this.state = {
                count : 1
            }
        }
        increment = () =>{
            this.setState(prevState => {
                return {count : prevState.count + 1}
            })
        }
        render() {
            const {count } = this.state
            return (
            <div>
                <WrappedComponent increment={this.increment} count={count}></WrappedComponent>
            </div>
            );
        }
    }
    return ClickCounter
}
export default IncrementCounter;