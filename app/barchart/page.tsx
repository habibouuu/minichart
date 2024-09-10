import React from 'react'
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <div className='p-10'>
        <div className='flex justify-between items-center'>
            <Link href='/'><Button sx={{px:4, py:2, backgroundColor:'red', color:'white', borderRadius:'17px'}}>Back</Button></Link>
            
            <h1 className='text-[20px]'>Bar Chart</h1>

            <span></span>
         </div>
    </div>
  )
}
