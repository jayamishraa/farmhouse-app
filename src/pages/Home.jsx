import React from 'react'
import Header from '../components/Header'
import Activities from '../components/Activities'
import Nature from '../components/Nature'
import Gallery from '../components/Gallery'
import { Outlet } from 'react-router'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
      <img className='main-img' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' />
      <Activities />
      <Nature />
      <Gallery />
      <Contact />
    </>
  )
}

export default Home
