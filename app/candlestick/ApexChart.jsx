"use client"
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import Candlesticks from '../../api/index'
import * as ddayjs from 'dayjs'
function ApexChart(){
   
    const [Ddata,setData]=useState({
        series: [{
          name: 'candle',
          data: []
        }],
        options: {
          chart: {
            height: 350,
            type: 'candlestick',
          },
          title: {
            text: 'CandleStick Chart - Category X-axis',
            align: 'left'
          },
          annotations: {
            xaxis: [
              {
                x: 'Oct 06 14:00',
                borderColor: '#00E396',
                label: {
                  borderColor: '#00E396',
                  style: {
                    fontSize: '12px',
                    color: '#fff',
                    background: '#00E396'
                  },
                  orientation: 'horizontal',
                  offsetY: 7,
                  text: 'Annotation Test'
                }
              }
            ]
          },
          tooltip: {
            enabled: true,
          },
          xaxis: {
            type: 'category',
            labels: {
              formatter: function(val) {
                return ddayjs(val).format('MMM DD HH:mm')
              }
            }
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        },
      
      
      })

    useEffect(()=>{
            (async()=>{
                const aData=await Candlesticks.get_candlesticks()
      
                setData({
      
                    series: [{
                      name: 'candle',
                      data: aData
                    }],
                    options: {
                      chart: {
                        height: 350,
                        type: 'candlestick',
                      },
                      title: {
                        text: 'CandleStick Chart - Category X-axis',
                        align: 'left'
                      },
                      annotations: {
                        xaxis: [
                          {
                            x: 'Oct 06 14:00',
                            borderColor: '#00E396',
                            label: {
                              borderColor: '#00E396',
                              style: {
                                fontSize: '12px',
                                color: '#fff',
                                background: '#00E396'
                              },
                              orientation: 'horizontal',
                              offsetY: 7,
                              text: 'Annotation Test'
                            }
                          }
                        ]
                      },
                      tooltip: {
                        enabled: true,
                      },
                      xaxis: {
                        type: 'category',
                        labels: {
                          formatter: function(val) {
                            return ddayjs(val).format('MMM DD HH:mm')
                          }
                        }
                      },
                      yaxis: {
                        tooltip: {
                          enabled: true
                        }
                      }
                    },
                  
                  
                  })
            })()
        },[])
  
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={Ddata.options} series={Ddata.series} type="candlestick" height={600} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    
}
export default ApexChart