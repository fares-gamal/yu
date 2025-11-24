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

    <div>
      <Link href={"/login"} > login</Link>
    </div>

  )
}

export default Page