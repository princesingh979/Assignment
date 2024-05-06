import React from 'react'
import {Input,Button} from "@nextui-org/react";

const register = () => {
  return (
   

    
    <div className="min-h-screen  bg-gray-500 py-12 px-4 sm:px-6 lg:px-8 text box-border bg-gray-500 ">
    <div className="border border-purple-300 w-96 h-95 bg-gray-500 ">
     <div className='text-center text-5xl p-4 font-serif bg-blue-800 '>
     <h1>sign up</h1></div>
     <h2>it's fee and always be</h2>
    <div className="  p-2 m-2">
   <Input type="First Name" placeholder="First Name" /></div>
   <div className="  p-2 m-2 ">
   <Input type="Middle Name"  placeholder=" middle Name" /></div>
   <div className="  p-2 m-2 ">
   <Input type="Last Name"  placeholder=" Last Name" /></div>
   <div className='text-center  decoration-auto'>
   <Button color="primary">summit </Button></div>

 </div>
 </div>

  )
}

export default register
