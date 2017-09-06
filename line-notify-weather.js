const axios = require('axios')
const dateFns = require('date-fns')
const jaLocale = require('date-fns/locale/ja')
const emoji = require('node-emoji')
const qs = require('querystring')
const settings = require('./settings.js')

function translateWeather(weather) {
  switch (weather) {
    case 'Thunderstorm':
      return emoji.get('zap')
    case 'Drizzle':
      return '霧雨'
    case 'Rain':
      return emoji.get('umbrella')
    case 'Snow':
      return emoji.get('snowflake')
    case 'Atmosphere':
      return emoji.get('fog')
    case 'Clear':
      return emoji.get('sunny')
    case 'Clouds':
      return emoji.get('cloud')
    default:
      return 'その他'
  }
}

// LINE Notify API Document
// https://notify-bot.line.me/doc/ja/
function lineNotify(message) {
  const req = {
    url: 'https://notify-api.line.me/api/notify',
    method: 'post',
    headers: {
      Authorization: `Bearer ${settings.LINE_NOTIFY_ACCESS_TOKEN}`,
    },

    // application/x-www-form-urlencoded形式で送るため、qs.stringifyを使う
    data: qs.stringify({
      message,
    }),
  }

  return axios(req).then((res) => {
    console.log(res)
  }).catch((res) => {
    console.error(res)
  })
}

// 5 day weather forecast - OpenWeatherMap
// https://openweathermap.org/forecast5
function getWeather(area) {
  const req = {
    url: 'http://api.openweathermap.org/data/2.5/forecast',
    method: 'get',
    params: {
      q: area,
      APPID: settings.OPEN_WEATHER_MAP_API_KEY,
    },
  }

  return axios(req).then((res) => {
    console.log(res)

    let text = `${res.data.city.name}の天気\n`
    text += res.data.list.slice(0, 5).map((item) => {
      const datetime = dateFns.format(item.dt * 1000, 'M月D日 (dd) HH:mm', { locale: jaLocale })
      const weather = translateWeather(item.weather[0].main)

      return `${datetime} ${weather}`
    }).join('\n')

    return text
  }).catch((res) => {
    console.error(res)
  })
}

// process.argv
// https://nodejs.org/docs/latest/api/process.html#process_process_argv
process.argv.slice(2).forEach((arg) => {
  getWeather(arg).then((text) => {
    lineNotify(text)
  })
})
