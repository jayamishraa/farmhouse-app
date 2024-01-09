import React from 'react'
import ImageCard from './ImageCard'
import Title from './Title'

function Gallery() {
    const images = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', 
                    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
                    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', 
                    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
                    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', 
                    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg']
  return (
    <div className='section'>
        <Title title='Gallery' />
        <div className='gallery'>
            {images.map(image=>{
                return(
                    <ImageCard src={image} />
                )
            })}
        </div>
    </div>
  )
}

export default Gallery
