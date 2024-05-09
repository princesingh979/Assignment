import {Input,Button} from "@nextui-org/react";
import React from 'react'
import Link from "next/link";
const login = () => {
  return (
    
    <div className="min-h-screen flex items-center flex justify-right bg-gray-500 py-12 px-4 sm:px-6 lg:px-8 text box-border">
    <div className="border border-purple-300 w-96 h-95 ">
     <div className='text-center text-5xl p-4 font-serif '>
     <h1>Facebook</h1></div>
    <div className="  p-2 m-2">
   <Input type="email" placeholder="Enter your user or email" /></div>
   <div className="  p-2 m-2 ">
   <Input type="password"  placeholder="Enter your password" /></div>
   <div className='text-center  decoration-auto'>
   <Button color="primary">Login </Button></div>
   <div className='text-center  decoration-auto p-2'>
   <Button color="primary"> <Link href="register">Register</Link> </Button></div>

 </div>
 </div>
  )
}

export default login
