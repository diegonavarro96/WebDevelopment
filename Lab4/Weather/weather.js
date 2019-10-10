const credentials = require('./credentials.js')

const request = require('request')


const weather = function(longitud,latitude){
    const url ='https://api.darksky.net/forecast/'+ credentials.DARK_SKY_SECRET_KEY +
                '/'+ latitude + ',' + longitud
                //console.log(url)

    request({ url, json: true}, function(error, response){
        const data = response.body
        const info = {
            precipProbability : data.currently.precipProbability,
            temperature : data.currently.temperature,
            summary : data.currently.summary
    }
    var celcius = (info.temperature-32)* 5 / 9;
    celcius = celcius.toFixed(2);
        console.log(info.summary +'. Currently '+celcius+'°C '+ 'and ' + info.precipProbability +'% of rain')
    })
}

const city = function(city){
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+city+'.json?access_token='+ credentials.MAPBOX_TOKEN
                //console.log(url)

    request({ url, json: true}, function(error, response){
        const dataCity = response.body
        const infoCity = {
            latitud : dataCity.features[0].center[0],
            longitud : dataCity.features[0].center[1]
    }
    //console.log('lat = '+ infoCity.latitud+' longitud = '+ infoCity.longitud)

    weather(infoCity.latitud,infoCity.longitud)
    })
}



module.exports = {
    weather : weather,
    city : city
}
