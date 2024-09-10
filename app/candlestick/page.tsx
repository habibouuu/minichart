"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@mui/material";
import dData from '../../api/index'

import Link from "next/link";

export default function Page() {
  const [ddata, setDataa]=useState([]);

  useEffect(()=>{
    (async()=>{
        const a:any = await dData.get_candlesticks()
        console.log(a)
        setDataa(a)
    })()
    console.log(ddata)

},[ddata])
 
 

  return (
    <div className='p-10 w-screen h-screen flex flex-col justify-center  gap-20'>
        <div className='flex justify-between items-center'>
            <Link href='/'><Button sx={{px:4, py:2, backgroundColor:'red', color:'white', borderRadius:'17px'}}>Back</Button></Link>
            
            <h1 className='text-[20px]'>Candle Stick</h1>

            <span className='w-28'></span>
         </div>
         <div className='bg-[yellow] h-full w-full'>
         </div>
    </div>
  )
}
