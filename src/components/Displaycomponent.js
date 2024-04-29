import React from 'react'

function Displaycomponent(props) {
  return (
    <div>
      <span>{props.time.h}</span>&nbsp;&nbsp;
      <span>{props.time.m}</span>&nbsp;&nbsp;
      <span>{props.time.s}</span>&nbsp;&nbsp;
      <span>{props.time.ms}</span>&nbsp;&nbsp;
    </div>
  )
}

export default Displaycomponent
