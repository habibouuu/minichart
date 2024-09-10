"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@mui/material";
import dData from '../../api/index'
import Link from "next/link";
import { LineChart, Tooltip, CartesianGrid, XAxis, YAxis, Legend, Line } from 'recharts';
export default function Page() {

    const [data,setData]=useState([])
    useEffect(()=>{
        (async()=>{
            const a:any = await dData.get_linecharts()
            setData(a)
        })()

    },[])

  return (
    <div className='p-10 w-screen h-screen flex flex-col justify-start  gap-20'>
        <div className='flex justify-between items-center'>
            <Link href='/'><Button sx={{px:4, py:2, backgroundColor:'red', color:'white', borderRadius:'17px'}}>Back</Button></Link>
            
            <h1 className='text-[32px]'>Line Chart</h1>

            <span className='w-28'></span>
         </div>
         <div className='bg-[beige]  w-full flex justify-center py-10'>
        
         <LineChart className='chart' width={1200} height={600} 
         data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
         </div>
    </div>
  )
}
