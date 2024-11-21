import React from 'react'

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-red-50 to-red-200 h-screen'>
        <div className="home flex flex-row gap-44 h-fit justify-center items-center p-3">
            <img className='h-32' src="logo.png" alt="logo"  />
            <div className="menu flex gap-8 text-2xl font-medium ">
                <div>Home</div>
                <div>Donor</div>
                <div>Receiver</div>
                <div>About Us</div>
                <div>Contact</div>
                <div>Services</div>
            </div>
        </div>
    </div>
  )
}

export default Home