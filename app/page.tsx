'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function Page() {


const router = useRouter()
useEffect(() => {
 const token = localStorage.getItem("token")
 if(!token) {
  router.push("/login")
 }
},[])



  return (

    <div
     className="w-full h-screen flex flex-col justify-center items-center  bg-[url('/logo.jpg')] bg-cover bg-center">
    </div>

  )
}

export default Page
