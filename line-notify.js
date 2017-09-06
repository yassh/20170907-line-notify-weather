const axios = require('axios')
const qs = require('querystring')
const settings = require('./settings.js')

// LINE Notify API Document
// https://notify-bot.line.me/doc/ja/
function lineNotify(message) {
  if (!message) {
    console.error('メッセージが指定されていません。')
    return
  }

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

  axios(req).then((res) => {
    console.log(res)
  }).catch((res) => {
    console.error(res)
  })
}

// process.argv
// https://nodejs.org/docs/latest/api/process.html#process_process_argv
process.argv.slice(2).forEach((arg) => {
  lineNotify(arg)
})
