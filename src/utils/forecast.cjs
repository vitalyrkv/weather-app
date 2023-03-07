const request = require('request')

const forecast = (latiude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7c3c8e18dde005b083278d129071e255&query='+latiude+','+longitude

    request({
        url,
        json: true   
    }, (error, {body}) => {
        if(error)
            callback('Unable to connect to location services!', undefined)
        else if(body.error)
            callback('Try another search', undefined)
        else 
            callback(undefined, body)
    })
}

module.exports = forecast