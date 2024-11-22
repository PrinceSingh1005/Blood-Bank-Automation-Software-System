import React, {useState} from 'react'
import LoginPage from '../Login/LoginPage'

const FirstPage = () => {

    return (
        <div className='flex h-screen gap-16 '>
            <div className="left  w-7/10 bg-green-200">
                <img className='h-full' src="blood.jpg" alt="photo" />
            </div>
            <div className="left flex flex-col justify-center items-center">
                
                <div className='w-96'>
                    <LoginPage />
                </div>
            </div>
        </div>
    )
}

export default FirstPage