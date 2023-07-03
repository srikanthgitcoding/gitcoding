import React, { Component } from 'react';
import {UserConsumer} from './User'

class C extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {company => {
                        return <div> Hi {company} </div>
                    }}        
                </UserConsumer>    
            </div>
        );
    }
}

export default C;