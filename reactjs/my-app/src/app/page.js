
import React from 'react'
import {Button} from "@nextui-org/react";
import Link from 'next/link';
const page = () => {
  return (
    <div>
    <h1>Homepage</h1>
   <div>
  <Button color='primary'><Link href='login'>Login</Link></Button>
   </div>
    </div>
    
  )
}

export default page
 
  

