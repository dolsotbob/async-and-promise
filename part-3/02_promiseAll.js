const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  return Promise.all([fetch(newsURL), fetch(weatherURL)])
    .then(([newsResponse, weatherResponse]) => {
      return Promise.all([newsResponse.json(), weatherResponse.json()]);
    })
    .then(([json1, json2]) => {
      return {
        news: json1.data,
        weather: json2,
      };
    });
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll,
  };
}
