import React, { useState } from 'react'
import './ReadMore.css'

function ReadMore() {
const data = "I think Johns comments need reviewing. I went with the intended answer and that was neat and 'felt' more react like. However I was unable to set initial states and anything useful on an unmounted component. I am looking at using css to hide things instead. Listeners on unmounted components will silently fail this has caused me big time loss today."
const [readMore, setReadMore] = useState(false)
  return (
    <div>
        <div className='selelctebtn'>{readMore ? data: `${data.substring(0,10)}....`}</div>
        <button  onClick={() =>setReadMore(!readMore)}>{ readMore ? 'Show less' : 'Read more'}</button>     
    </div>


  )
}

export default ReadMore

// use substring(from hwre to, where)