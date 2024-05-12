const request = require('request')

const geocode = (address, callback) => {

    if (address === '') {
        callback('Unable to connect to location service!', undefined)
    } else if (address === 'N') {
        callback('Unable to find the location. Try another search!', undefined)
    } else {
        callback(undefined, {
            latitude: 16.0567372398638,
            longtitude: 108.20274073123097,
            location: address
        })
    }
}

module.exports = geocode