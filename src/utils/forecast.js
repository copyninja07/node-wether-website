const request = require("request");

// const url =
//   "http://api.weatherstack.com/current?access_key=4b36128711e7a490417c759916c38cfa&query=New%20York&units=f";

// request({ url: url, json: true }, (error, response) => {
//   // console.log(response.body.current.weather_descriptions[0]);
//   console.log(
//     `${response.body.current.weather_descriptions[0]} Its currtly ${response.body.current.temperature} degress out.It feels like ${response.body.current.feelslike} degress out there`
//   );
// });

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=4b36128711e7a490417c759916c38cfa&query=${latitude},${longitude}`;
  //

  http: request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Low lval error", undefined);
    } else if (body.error) {
      callback(`high leval error ${latitude} ,${longitude}`, undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]} Its currtly ${body.current.temperature} degress out.It feels like ${body.current.feelslike} degress out there`
      );
    }
  });
};

module.exports = forecast;
