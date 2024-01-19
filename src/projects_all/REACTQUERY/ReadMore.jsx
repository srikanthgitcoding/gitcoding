import React, { useState } from 'react'

const ReadMore = () => {
let text = "In literary theory, a text is any object that can be , whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message."

const [readMore,setReadMore]= useState(false)

const readMoremethod=()=>{
    setReadMore(!readMore)
}  

return (
    <div>
      {readMore ? text : text.substring(0,50)}
      
      <button onClick={readMoremethod}>{readMore ?  "read Less":"Read More"  }</button>
    </div>
  )
}

export default ReadMore
