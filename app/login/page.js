"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import  { useEffect, useState } from "react";
import SplashScreen from "../Component/SplashScreen/SplashScreen";

function Login() {
  const [showSplash, setShowSplash] = useState(true)
  const router = useRouter()
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [message, setmessage] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const use = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        name: name,
        password: password,
      });

      if (use.status == 201) {
        setmessage("Logged in")
        localStorage.setItem("token", "test-token-123")
        router.push("/")
      }
    } catch (error) {
      setmessage(error.response?.data?.message || "Login Failed");
      console.log(error);
    }
    setName("")
    setPassword("")
    
  }
useEffect(() => {
  setTimeout(() => setShowSplash(false),3000)
}, [])

if(showSplash) return <SplashScreen />

 

  return (
    <div className="w-full h-full">
      <div className="w-full h-screen flex flex-col justify-center items-center  bg-[url('/logo.jpg')] bg-cover bg-center">
      <form
        onSubmit={handleLogin}
        className="w-[400px] h-[530px] p-6 bg-[#00000] rounded-2xl flex flex-col justify-center items-center gap-5">
        <Image src={"/logo2.jpg"} width={200} height={200} alt="logo"/>

        <input
          type="text"
          placeholder="USERNAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
          
 
          className=" w-[95%]  h-[55px] border-2 p-3 rounded-[7px] text-[22px] text-[#FFFFFF] outline-none "/> 
        


        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-[55px] w-[95%] text-[22px]  border-2 p-3 rounded-[7px] text-[#FFFFFF] outline-none"/>

        <button
          type="submit"
          className="w-[95%]  mt-8 h-[55px] rounded-[7px]  text-blue-700 text-[30px] font-old hover:bg-[#1d1d1d64] bg-[#FFFFFF] text-center">
          LOGIN
        </button>

        {message && <p className="text-[#FFFFFF] text-[30px]">{message}</p>}
      </form>
    </div>
    </div>
  );
}

export default Login;
