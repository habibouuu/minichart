"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@mui/material";
import dData from '../../api/index'
import Image from "next/image";
import Link from "next/link";
import ReactApexChart from 'react-apexcharts';
export default function page() {
  const [ddata, setDataa]=useState([]);

  useEffect(()=>{
    (async()=>{
        const a:any = await dData.get_candlesticks()
        console.log(a)
        setDataa(a)
    })()
    console.log(ddata)

},[])
 const [chartState,setChart]=useState({
          
  series: [{
    data: ddata
  }],
  options: {
    chart: {
      type: "candlestick",
      height: 350
    },
    title: {
      text: "CandleStick Chart",
      align: "left"
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  },


})
 

  return (
    <div className='p-10 w-screen h-screen flex flex-col justify-center  gap-20'>
        <div className='flex justify-between items-center'>
            <Link href='/'><Button sx={{px:4, py:2, backgroundColor:'red', color:'white', borderRadius:'17px'}}>Back</Button></Link>
            
            <h1 className='text-[20px]'>Candle Stick</h1>

            <span className='w-28'></span>
         </div>
         <div className='bg-[yellow] h-full w-full'>
         {/* <div id="chart"> */}
                {/* <ReactApexChart options={chartState.options} series={chartState.series} type="candlestick" height={350} />
              </div>
              <div id="html-dist"></div> */}
         </div>
    </div>
  )
}
