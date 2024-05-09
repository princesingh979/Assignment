'use client'
import React from 'react'
import { useFormik } from 'formik';

import {Input, Button} from "@nextui-org/react";

const register = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
    <form onSubmit={formik.handleSubmit}>
    
    <div className="min-h-screen  bg-gray-500 py-12 px-4 sm:px-6 lg:px-8 text box-border bg-gray-500 ">
    <div className="border border-purple-300 w-96 h-95 bg-gray-500 ">
     <div className='text-center text-5xl p-4 font-serif bg-blue-800 '>
     <h1>sign up</h1></div>
     <h2>it's fee and always be</h2>
    <div className="  p-2 m-2">
   <Input
    isRequired
 name='First Name'
 type="First Name"
 label= "First Name"
 defaultValue=""
 className="max-w-xs"
      onChange={formik.handleChange}
      value={formik.values.FirstName}
   /></div>
   <div className="  p-2 m-2 ">
   <Input
   name='Middle Name'
   type="Middle Name"
   label= "Middle Name"
   defaultValue=""
   className="max-w-xs"
        onChange={formik.handleChange}
        value={formik.values.MiddleName}
      /></div>
     
    
   <div className="  p-2 m-2 ">
   <Input
    isRequired
 name='Last Name'
 type="Last Name"
 label= "Last Name"
 defaultValue=""
 className="max-w-xs"
      onChange={formik.handleChange}
      value={formik.values.LastName}
   /></div>
   <div className='p-2 m-2'>
   <Input
      isRequired
   name='email'
   type="email"
   label="email"
   defaultValue="junior@nextui.org"
   className="max-w-xs"
        onChange={formik.handleChange}
        value={formik.values.email}
    />
   </div>
   <div className='text-center  decoration-auto'>
    <Button color='primary'>
   <button color="submit">Submit</button>
   </Button>
   </div>

 </div>
 </div>
</form>
  );
};


export default register
