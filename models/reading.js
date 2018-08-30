/**
 * @Author:   shaoDong
 * @Version:  1.0
 * @DateTime: 2018-08-30 10:08:24
 * @Description: Schema 与表结构相对应，Model 为nodeJs 中与表结构相对应的类
 **/
'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const readingSchema = new Schema({
  id: String,
  title: String,
  evaluation: String,
  reading_at: Number,
  updated_at: Number,
  status: String,
  img: String,
  // id: {type: String},
  // title: {type: String, default: ''},
  // markdown: {type: String, default: ''},
  // html: {type: String, default: ''},
  // feature_image: {type: String, default: ''},
  // // 0 未发布， 1 已发布
  // status: {type: String, default: ''},
  // created_at: {type: Number, default: 0},
  // updated_at: {type: Number, default: 0},
  // label: {type: String, default: ''},
  // abbr: {type: String, default: ''},
})

readingSchema.index({id: 1});

const Reading = mongoose.model('Reading', readingSchema);

export { Reading };