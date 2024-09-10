"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@mui/material";
import candledata from '../../api/index'
import Image from "next/image";
import Link from "next/link";
export default function page() {

    const [data,setData]=useState(null)
    useEffect(()=>{
        (async()=>{
            const a:any = await candledata.get_candlesticks()
            setData(a)
        })()
        console.log(data)

    },[])


  return (
    <div className='p-10'>
        <div className='flex justify-between items-center'>
            <Link href='/'><Button sx={{px:4, py:2, backgroundColor:'red', color:'white', borderRadius:'17px'}}>Back</Button></Link>
            
            <h1 className='text-[20px]'>Candle stick</h1>
<span></span>
</div>
</div>
  )
}
