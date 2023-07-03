import React from 'react'



class SetStateExample extends React.Component {
    constructor(Props){
        super(Props)
        this.state = {
            count : 0
        }
    }

    incrementCounter(){
        // this.state.count = this.state.count + 1 //first mistake
        // this.setState({
        //     count : this.state.count + 1
        // },()=>{console.log("callback value",this.state.count)})

        this.setState(Prevprops => ({
            count: Prevprops.count + 1
        }),() => console.log("callback value",this.state.count))
        console.log("---", this.state.count ) // second mistake
    }

    IncrementAtOnce(){
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        // react may group multiple set state calls into a single update for better performance 
    }

    render(){
        const {count}= this.state
        return(
            <div>
                <h1>{count}</h1>
                <button onClick={() => this.IncrementAtOnce()}>click</button>
            </div>
        )
    }
}

export default SetStateExample