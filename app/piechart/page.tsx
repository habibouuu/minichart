"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@mui/material";
import dData from '../../api/index'
import Link from "next/link";
import { PieChart, Pie } from 'recharts';
export default function Page() {

    const [data,setData]=useState([])
    useEffect(()=>{
        (async()=>{
            const a:any = await dData.get_piecharts()
            
            setData(a)
        })()
        

    },[])

  return (
    <div className='p-10 w-screen h-screen flex flex-col justify-center  gap-20'>
    <div className='flex justify-between items-center'>
        <Link href='/'><Button sx={{px:4, py:2, backgroundColor:'red', color:'white', borderRadius:'17px'}}>Back</Button></Link>
        
        <h1 className='text-[20px]'>Pie Chart</h1>

        <span className='w-28'></span>
     </div>
     
     <div className='bg-[beige] w-full flex justify-center py-10'>
     <PieChart className='chart' width={1200} height={600} >
  <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" />
  <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={160} outerRadius={180} fill="#82ca9d" label />
</PieChart>
     </div>
</div>
  )
}
