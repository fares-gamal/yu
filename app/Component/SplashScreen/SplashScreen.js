"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function SplashScreen() {
const [loading, setShowSplash] = useState(true)

useEffect(() => {
   const timeout = setTimeout(() => setShowSplash(false), 3000); 
   return () => clearTimeout(timeout)
} , [])

if(!loading) return null
  return (
    <div 
    className='flex items-center justify-center h-screen bg-blue-500'>

<Image 
    src={"/logo2.jpg"}
    width={250}
    height={250} 
    alt='logo'
    className='animate-bounce ' />

    </div>
  )
}

export default SplashScreen