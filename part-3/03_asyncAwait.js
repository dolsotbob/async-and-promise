const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  let json1 = await fetch(newsURL).then((resp) => resp.json());
  let json2 = await fetch(weatherURL).then((resp) => resp.json());

  return {
    news: json1.data,
    weather: json2,
  };
}
if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync,
  };
}
