const weatherstatus = require('./weather.js')

//weatherstatus.weather(37.8267,-122.4233)

weatherstatus.city('del rio',function(error,data){
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})