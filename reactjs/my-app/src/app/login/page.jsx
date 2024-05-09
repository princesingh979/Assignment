'use client'
import {Input,Button} from "@nextui-org/react";
import React from 'react'
import { useFormik } from 'formik';
import Link from "next/link";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    Email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  Email: Yup.string().email('Invalid Email').required('Required'),
});

const Login = () => {
const formik = useFormik({
  initialValues: {
    password: '',
    Email: '',
  },
  validationSchema : SignupSchema,
  onSubmit: values => {
    alert(JSON.stringify(values, null,2));
  },
}); 
  return (
    <form onSubmit={formik.handleSubmit}>
      <center>
    <div className="object-center min-h-screen flex items-center flex justify-right bg-blue-200 py-12 px-4 sm:px-6 lg:px-8 text box-border">
    <div className="border border-blue-300 w-96 h-95 bg-indigo-300  ">
     <div className='text-center text-5xl p-4 font-serif '>
    <div className="text-blue-900"> <h1>Facebook</h1> </div></div>
    <div className="  p-2 m-2">
    <Input
    isRequired
 name='Email'
 type=" Email"
 label="Enter your email"
 defaultValue=""
 className="max-w-xs"
      onChange={formik.handleChange}
      value={formik.values.Email}
      />
         {formik.errors.Email ? <div className='text-red-700'>{formik.errors.Email}</div>:null}
      </div>
   <div className="  p-2 m-2 ">
   <Input
    isRequired
 name='password'
 type="password"
 label="Enter your password"
 defaultValue=""
 className="max-w-xs"
      onChange={formik.handleChange}
      value={formik.values.password}
      />
       {formik.errors.password ? <div className='text-red-700'>{formik.errors.password}</div>:null}
      </div>
   <div className='text-center  decoration-auto'>
   <Button color="primary"type='sumbit'>Login </Button></div>
   <div className="text-center  decoration-auto m-2 text-blue-700" >
   <button> <Link href="changepassword">Forget password?</Link></button>
   </div>
   <div className='text-center  decoration-auto p-2'>
   <Button color="success"> <Link href="register">Create a new account</Link> </Button></div>

 </div>
 </div>
 </center>
 </form>
  )
}

export default Login
