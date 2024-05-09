'use client'
import React from 'react';
import { useFormik } from 'formik';
import {Button, Input} from "@nextui-org/react";
const SignupForm = () => {
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
      <label htmlFor="firstName">First Name</label>
      <Input
      isRequired
      name='firstName'
      type="firstName"
      label="firstName"
      defaultValue="junior@nextui.org"
      className="max-w-xs"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <Input
         isRequired
      name='lastName'
      type="lastName"
      label="lastName"
      defaultValue="junior@nextui.org"
      className="max-w-xs"
      onChange={formik.handleChange}
      value={formik.values.lastName}
      />
      <div className='p-2'>
      <label htmlFor="Email">Email</label>
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
      
      <button color="submit">Submit</button>
    
    </form>
  );
};

export default SignupForm