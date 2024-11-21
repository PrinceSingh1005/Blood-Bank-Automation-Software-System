import React from 'react'
import LoginPage from '../Login/LoginPage'

const FirstPage = () => {
  return (
    <div className='flex h-screen gap-16 '>
        <div className="left  w-7/10 bg-green-200">
            <img className='h-full' src="blood.jpg" alt="photo" />
        </div>
        <div className="left flex justify-center items-center">
            
            <LoginPage />
        </div>
    </div>
  )
}

export default FirstPage