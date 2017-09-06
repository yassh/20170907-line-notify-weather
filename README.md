# LINE Notify APIを使って天気を通知するツール

## このツールを使うのに必要なもの

* [Node.js](https://nodejs.org/)
* [LINE Notify](https://notify-bot.line.me/)のアクセストークン
* [OpenWeatherMap](https://openweathermap.org/)の[APIキー](https://openweathermap.org/appid)

## インストール

このREADME.mdのあるディレクトリで次のコマンドを実行せよ。

```
npm install
```

## 設定

1. **settings.sample.js** を複製して **settings.js** というファイルを作る。
1. **settings.js** の `LINE_NOTIFY_ACCESS_TOKEN` にLINE Notifyのアクセストークンをセットする。
1. **settings.js** の `OPEN_WEATHER_MAP_API_KEY` にOpenWeatherMapのAPIキーをセットする。

## 使い方

このREADME.mdのあるディレクトリで、次のようにコマンドを実行せよ。

```
node line-notify-weather.js ローマ字の市名
```

そうすると、その市の天気がLINE Notifyのアクセストークンの送信先に通知される。

### 例

* `node line-notify-weather.js tokyo` … 東京の天気を通知する。
* `node line-notify-weather.js yokohama-shi` … 横浜市の天気を通知する。（`yokohama-shi`ではなく`yokohama`にすると、青森県横浜町の天気が通知されるようだ。）
