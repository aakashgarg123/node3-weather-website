const request = require('request')

const forecast = (lat,long,callback) => {
    const url = 'https://api.darksky.net/forecast/f06c4328ca5a8d101e985a97c626ea6f/' + lat + ',' + long

    request({ url, json:true}, (error,{ body }) => {
        if(error) {
            callback('Unable to connect to weather service',undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out there with " + body.currently.precipProbability + "% chance of rain."
             + 'The temperature high is: ' + body.daily.data[0].temperatureHigh + ' and the temperature low is: ' + body.daily.data[0].temperatureLow + ' with wind speed of ' + body.daily.data[0].windSpeed)
        }
    })
}

module.exports = forecast