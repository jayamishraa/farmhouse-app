import React from 'react'
import Title from './Title'
import Card from './Card'
function Activities() {
  return (
    <div className='section'>
      <Title title='Fun Activities' />
      <div className='green'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Activities
