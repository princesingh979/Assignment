'use client'
import React from 'react'
import { useFormik } from 'formik';
import {Input, Button} from "@nextui-org/react";

import * as Yup from 'yup';
 
 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
     lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });

const register = () => {
const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName:'',
      lastName: '',
      email: '',
    
    },
validationSchema : SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  }); 
  
  return (
    
    <form onSubmit={formik.handleSubmit}>
    <div className="min-h-screen  bg-gray-500 py-12 px-4 sm:px-6 lg:px-8 text box-border bg-gray-500 ">
    <div className="border border-purple-300 w-96 h-95 bg-indigo-300  ">
    <div className='bg-white'>
     <div className=' text-4xl p-0 font-serif text-black  '>sign up</div>
     <div className="text-1xl p-0  font-serif">It's quick and easy.</div></div>
    <div className="  p-2 m-2">
   <Input
    isRequired
 name='firstName'
 type="text"
 label= "First Name"
 defaultValue=""
 className="max-w-xs"
      onChange={formik.handleChange}
      value={formik.values.firstName}
   />
   {formik.errors.firstName ? <div className='text-red-700'>{formik.errors.firstName}</div>:null}
   </div>
   <div className="  p-2 m-2 ">
   <Input
   name='middleName'
   type="text"
   label= "Middle Name"
   defaultValue=""
   className="max-w-xs"
        onChange={formik.handleChange}
        value={formik.values.middleName}
      /> 
       {formik.errors.middleName? <div className='text-red-700'>{formik.errors.middleName}</div>:null}
      </div>
     
    
   <div className="  p-2 m-2 ">
   <Input
    isRequired
 name='lastName'
 type="text"
 label= "Last Name"
 defaultValue=""
 className="max-w-xs"
      onChange={formik.handleChange}
      value={formik.values.lastName}
   />
    {formik.errors.lastName ? <div className='text-red-700'>{formik.errors.lastName}</div>:null}
   </div>

   <div className='p-2 m-2'>
   <Input
      isRequired
   name='email'
   type="email"
   label="email"
   defaultValue="jun
       ior@nextui.org"
   className="max-w-xs"
        onChange={formik.handleChange}
        value={formik.values.email }
    />
     {formik.errors.email ? <div className='text-red-700'>{formik.errors.email}</div>:null}
   </div>
  
   <div className='text-center  decoration-auto p-2 m-2'>
    <Button color='success' type='submit'>Submit </Button>
   </div>
 </div>
 </div>
</form>
  );
};


export default register
