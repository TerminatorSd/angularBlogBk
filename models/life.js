/**
 * @Author:   shaoDong
 * @Version:  1.0
 * @DateTime: 2018-08-19 17:55:21
 * @Description: Schema 与表结构相对应，Model 为nodeJs 中与表结构相对应的类
 **/
'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const lifeSchema = new Schema({
  title: {type: String, default: ''},
  location: {type: String, default: ''},
  content: {type: String, default: ''},
  // 0 未发布， 1 已发布
  created_at: {type: Number, default: 0},
  updated_at: {type: Number, default: 0},
  status: {type: String, default: ''},
  img: {type: String, default: ''},
})

lifeSchema.index({id: 1});

const Life = mongoose.model('Life', lifeSchema);

export { Life };