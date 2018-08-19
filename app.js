/**
 * @author shaoDong
 * @email scut_sd@163.com
 * @create date 2018-08-19 10:46:25
 * @modify date 2018-08-19 10:46:25
 * @desc angular blog backend entry
*/

"use strict"

import db from './mongodb/db.js';
import express from 'express';
import config from './config';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import bodyParse from 'body-parser';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import chalk from 'chalk';
// 上传图片
import multer from 'multer';
// import path from 'path';
// var history = require('connect-history-api-fallback');
const app = express();

// 图片存储
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    // var fileFormat =(file.originalname).split(".");
    // cb(null, file.fieldname + '-' + md5(file) + "." + fileFormat[fileFormat.length - 1]);
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({ storage: storage });
const imgBaseUrl = '../'
// var imgBaseUrl = '/Users/shaodong/myGit/danceParty/';

// 加了接收不到请求？
// app.use(history());
app.use(cookieParser());
app.use(bodyParse.urlencoded({extended:false}));
app.use(express.static('public'));
// var MongoStore = connectMongo(session);
// app.use(session({
//   name: config.session.name,
//   secret: config.session.secret,
//   resave: true,
//   saveUninitialized: false,
//   cookie: config.session.cookie,
//   store: new MongoStore({
//     url: config.url
//   })})
// )

// cors
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  // res.header("Access-Control-Allow-Origin", req.headers.Origin || req.headers.origin || 'blog.shaodongweb.top');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // res.header("Access-Control-Allow-Credentials", true); //可以带cookies

  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
    next();
  }
});

// 路由分发
router(app);

app.listen(config.port, '0.0.0.0', function () {
  console.log(
    chalk.green(`端口监听中：127.0.0.1:${config.port}...`)
  );
}) ;