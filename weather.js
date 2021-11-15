
let request = require('request');
//variable para hacer la ciudad dinamica.Previa instalacion de yargs
const argv = require('yargs').argv;
// variable con mi apiKey personalizada a traves de la api
let apiKey = '0b3cd5494d54dc46d622ccfc9f8045a6';

let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`



request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});