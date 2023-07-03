import React from 'react'
import usePrevious from './usePrevious'

function Previous() {
  const [value,fn]  = usePrevious(0)
  return (
    <div>{value}
    <button type="button" onClick={fn}>Increment</button>
    </div>
  )
}

export default Previous