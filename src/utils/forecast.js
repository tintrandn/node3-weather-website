const request = require("request")

const base_url = 'https://api.weatherapi.com/v1/current.json?key=9fda9eb804dd4b9fa84154341241504&q='

const forecast = (location, callback) => {
    const url = base_url + location
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const data = response.body
            callback(undefined, data)
        }
    })
}

module.exports = forecast