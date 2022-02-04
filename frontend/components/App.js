import React from 'react'
import Fly from './Fly'

export default function App(props) {
  const { className } = props
  return (
    <div id="wrapper" className={className}>
      <Fly />
    </div>
  )
}
