import React, { Component } from 'react';


const WithCounter = (WrappedComponent,incrementCount) => {
    class HigherOrder extends Component {
        constructor(props){
            super(props)
            this.state = {
                count : 0
            }
            this.increment = this.increment.bind(this)    
        }
        increment= () => {
            this.setState( prevState => {
                return {count : prevState.count + incrementCount}
            })
        }
        render() {
            return (
                    <WrappedComponent count={this.state.count} increment={this.increment} {...this.props}/>
            );
        }
    }
    return HigherOrder
}

export default WithCounter;

// to share common functionality between Components we use HOC