import React from 'react'
import NavBar from './comps/Nav'
import Content from './comps/content'

const landingPage = () => {
  return (
    <>
      <div className='h-screen w-screen bg-bgcolor1 bg-[url("./assets/bg-pattern-circles.svg")] flex flex-col items-center'>
        <NavBar />
        <Content />
      </div>
    </>
  )
}

export default landingPage