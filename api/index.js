
const axios = require('axios');


async function get_candlesticks(){
   let data={}
    axios({
        method: 'get',
        url: 'https://django-back-three.vercel.app/api/candlestick-data',
        responseType: 'json',
      })
        .then(function (response) {
            data=response
        })
        console.log(data)
    

    return data

}


async function get_linecharts(){

}

async function get_piecharts(){

}

async function get_barcharts(){

}


export default {
    get_barcharts,
    get_candlesticks,
    get_linecharts,
    get_piecharts
}