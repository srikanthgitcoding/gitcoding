import React from 'react'

const Greetings = ({name,...props}) => {
    console.log("---",props)
  return (
    <div {...props}>
      Hello {name}
    </div>
  )
}

const GreetWithName = (ThisisComponent) => (props) =>{
    console.log("props check", props)
    return <ThisisComponent name="srikanth" {...props} className="test"/>
}

export const Enhanced = GreetWithName(Greetings)

