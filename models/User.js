const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50,
    },
    email : {
        type : String,
        trim : true,
        unique : 1
    },
    password : {
        type : String,
        minlength : 5
    },
    lastname : {
        type : String,
        maxlength : 50
    },
    role : {
        type : Number,
        default : 0,
    },
    image : String,
    token : {
        type : String,
    },
    tokenExp : {
        type : Number
    }
})

const User = mongoose.model('User', userSchema) // model 은 schema를 감싼다.

module.exports = { User }  // 해당 파일을 다른 모듈에서 쓸 수 있도록 처리