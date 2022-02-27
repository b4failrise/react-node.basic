// index.js는 백엔드 시작점
const express = require('express')  // express 모듈 가져오기
const app = express()               // express 앱 생성
const port = 3000

const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://devgraphy:1234@cluster0.e1cvp.mongodb.net/Cluster0?retryWrites=true&w=majority')
    .then(()=>console.log("MongoDB Connecting..."))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})