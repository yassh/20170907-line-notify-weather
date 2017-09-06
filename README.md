# LINE Notify APIを使ってコマンドラインからLINEの通知を送るツール

## このツールを使うのに必要なもの

* Node.js
* [LINE Notify](https://notify-bot.line.me/ja/)のアクセストークン

## インストール

このREADME.mdのあるディレクトリで次のコマンドを実行せよ。

```
npm install
```

## 設定

0. [LINE Notify](https://notify-bot.line.me/ja/)にログインし、アクセストークンを発行する。
0. settings.sample.js を settings.js という名前で複製し、`LINE_NOTIFY_ACCESS_TOKEN`に発行したアクセストークンを記述する。

## 使い方

LINEの通知を送るには、次のように実行せよ。

```
node line-notify.js メッセージ
```

複数送ることもできる。

```
node line-notify.js メッセージ1 メッセージ2
```
