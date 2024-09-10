"use client"
import React from 'react'
import { Button } from "@mui/material";
import ApexChart from './ApexChart'
import Link from "next/link";

export default function Page() {
  return (
    <div className='p-10 w-screen h-screen flex flex-col justify-center  gap-20'>
        <div className='flex justify-between items-center'>
            <Link href='/'><Button sx={{px:4, py:2, backgroundColor:'red', color:'white', borderRadius:'17px'}}>Back</Button></Link>
            
            <h1 className='text-[20px]'>Candle Stick</h1>

            <span className='w-28'></span>
         </div>
         <div className='bg-[beige]  w-full flex flex-col justify-center  py-10'>
          {<ApexChart/>}
         </div>
    </div>
  )
}
