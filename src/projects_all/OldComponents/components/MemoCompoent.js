import React from 'react'


function MemoComp(props){
    console.log("memo compo")
    return(
        <div>
            memo {props.lastName}
        </div>
    )
}

export default React.memo(MemoComp)