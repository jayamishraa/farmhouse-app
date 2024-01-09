import React from 'react'

function ImageCard({src}) {
  return (
    <div className='img-card'>
      <img src={src} width='430px'/>
    </div>
  )
}

export default ImageCard
