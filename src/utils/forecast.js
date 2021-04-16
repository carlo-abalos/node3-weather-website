const request = require('request');

const forecast = (lon, lat, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7613b6c2d79d85111e652c10056b3b36&query=' + lat + ', ' + lon + '&units=f';
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            const curr = body.current;
            callback(undefined, curr.weather_descriptions[0] + '. It is currently ' + curr.temperature + ' degrees out. It feels like ' + curr.feelslike + ' degrees out. Humidity is ' + curr.humidity + '%.');
        }
    });
};

module.exports = forecast;