import React from 'react'
import Title from './Title'
import Card from'./Card'
function Nature() {
  return (
    <div className='section'>
      <Title title='The Activities which Connect You with Nature' />
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

export default Nature
