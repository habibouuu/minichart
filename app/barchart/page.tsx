"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@mui/material";
import dData from '../../api/index'
import Link from "next/link";
import { BarChart, Tooltip, CartesianGrid, XAxis, YAxis, Legend, Bar } from 'recharts';
export default function Page() {

    const [data,setData]=useState([])
    useEffect(()=>{
        (async()=>{
            const a:any= await dData.get_barcharts();
            console.log(a)
            setData(a)
        })()
        console.log(data)

    },[data])

  return (
    <div className='p-10 w-screen h-screen flex flex-col justify-start  gap-20'>
        <div className='flex justify-between items-center'>
            <Link href='/'><Button sx={{px:4, py:2, backgroundColor:'red', color:'white', borderRadius:'17px'}}>Back</Button></Link>
            
            <h1 className='text-[20px]'>Bar Chart</h1>

            <span className='w-28'></span>
         </div>
         <div className='bg-[beige]  w-full flex justify-center py-10'>
         <BarChart className='chart' width={760} height={600} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
         </div>
    </div>
  )
}
