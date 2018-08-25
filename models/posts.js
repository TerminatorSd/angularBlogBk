/**
 * @Author:   shaoDong
 * @Version:  1.0
 * @DateTime: 2018-08-19 17:55:21
 * @Description: Schema 与表结构相对应，Model 为nodeJs 中与表结构相对应的类
 **/
'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {type: String, default: ''},
  markdown: {type: String, default: ''},
  html: {type: String, default: ''},
  feature_image: {type: String, default: ''},
  // 0 未发布， 1 已发布
  status: {type: String, default: ''},
  created_at: {type: Number, default: 0},
  updated_at: {type: Number, default: 0},
  label: {type: String, default: ''},
  abbr: {type: String, default: ''},
})

postSchema.index({id: 1});

const Post = mongoose.model('Post', postSchema);

export { Post };