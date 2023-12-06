import React, {memo} from 'react'
import SetStateExample from './setStateExample'

function MemoDemoChildChild() {
    console.log("MemoDemoChildChild")
  return (
    <div>MemoDemoChildChild
    <SetStateExample></SetStateExample>
    </div>

  )
}

export default memo(MemoDemoChildChild)