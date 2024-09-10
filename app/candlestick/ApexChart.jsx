"use client"
import React, { useEffect, useState } from 'react'
import Candlesticks from '../../api/index'
import * as ddayjs from 'dayjs'
function ApexChart() {
  const [Chart, setChart] = useState();
//Error handling
  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);
  //Initializing Chart data
  const [Ddata, setData] = useState({
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
          formatter: function (val) {
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

  useEffect(() => {
    //fetching Chart data
    (async () => {
      const aData = await Candlesticks.get_candlesticks()

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
              formatter: function (val) {
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
  }, [])

  return (
    <div>
      <div id="chart">
        {Chart && <Chart options={Ddata.options} series={Ddata.series} type="candlestick" height={600} />}
      </div>
      <div id="html-dist"></div>
    </div>
  );

}
export default ApexChart