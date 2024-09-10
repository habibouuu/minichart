
const axios = require('axios');


async function get_candlesticks(){
   let data=null
    await axios({
        method: 'get',
        url: 'https://django-back-three.vercel.app/api/candlestick-data',
      })
        .then(function (response) {

            data=response.data.candlestick
        })
    

    return data

}


async function get_linecharts(){
    let data=[]
    await axios({
        method: 'get',
        url: 'https://django-back-three.vercel.app/api/line-chart-data/',
      })
        .then(function (response) {
            data=response.data.linechart
           
        })
        
    

    return data
}

async function get_piecharts(){
    let data=[]
    await axios({
        method: 'get',
        url: 'https://django-back-three.vercel.app/api/pie-chart-data',
      })
        .then(function (response) {
            data=response.data.piechart
           
        })
        
    

    return data
}

async function get_barcharts(){
    let data=[]
    await axios({
        method: 'get',
        url: 'https://django-back-three.vercel.app/api/bar-chart-data',
      })
        .then(function (response) {
            data=response.data.barchart
           
        })
        
    

    return data
}


export default {
    get_barcharts,
    get_candlesticks,
    get_linecharts,
    get_piecharts
}