/**
 * @author shaoDong
 * @email scut_sd@163.com
 * @create date 2018-08-19 11:11:55
 * @modify date 2018-08-19 11:11:55
 * @desc controller of posts including get update delete
*/

import { Post as PostModel } from '../models/posts';
import formidable from 'formidable';
import fs from 'fs';

class Post {
  constructor() { }

  async getList(req, res, next) {
    const result = {
      code: 0,
      msg: 'ok',
      data: 'haha'
    }
    try {
      result.data = await PostModel.find();
    } catch(err) {
      console.log('获取post list失败');
      result.code = -1;
      result.msg = 'get list error';
    } finally {
      res.send(JSON.stringify(result));
    }
  }

  async getDetail(req, res, next) {
    const id = req.query.id;
    const result = {
      code: 0,
      msg: 'ok',
      data: 'haha'
    }
    try {
      result.data = await PostModel.findById(id);
    } catch(err) {
      result.code = -1;
      result.msg = 'get detail error';
    } finally {
      res.send(JSON.stringify(result));
    }
  }

  async updatePost(req, res, next) {
    const result = {
      code: 0,
      msg: 'ok',
      data: 'fine'
    }
    const thisData = req.body;
    const conditions = { _id : thisData._id };
    console.log(thisData);
    // 获取当前时间
    thisData.updated_at = Date.parse(new Date()) / 1000;

    try {
      PostModel.update(conditions, thisData, function(err, raw) {
        if(err) {
          console.log(err);
        }
      });
    } catch(err) {
      result.code = -1;
      result.msg = 'update detail error';
    } finally {
      res.send(JSON.stringify(result));
    }
  }

  async addPost(req, res, next) {
    const result = {
      code: 0,
      msg: 'ok',
      data: 'fine'
    }
    const thisData = req.body;
    // 获取当前时间
    thisData.created_at = Date.parse(new Date()) / 1000
    thisData.updated_at = thisData.created_at;
    const insertData = new PostModel(thisData);

    try {
      insertData.save();
    } catch(err) {
      result.code = -1;
      result.msg = 'update detail error';
    } finally {
      res.send(JSON.stringify(result));
    }
  }

  async deletePost(req, res, next) {
    const result = {
      code: 0,
      msg: 'ok',
      data: 'fine'
    }
    const conditions = { _id : req.body.id };
    console.log(conditions);

    try {
      PostModel.remove(conditions, function(err) {
        if(err) {
          console.log('err')
        } else {
          console.log('success')
        }
      });
    } catch(err) {
      result.code = -1;
      result.msg = 'delete post error';
    } finally {
      res.send(JSON.stringify(result));
    }
  }

  async uploadImg(req, res, next) {
    // 获得图片url
    const imgData = req.body.url;
    const base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    const dataBuffer = new Buffer(base64Data, 'base64');
    // 设置图像名
    const imgName = req.body.name.split('.')[0] + '_' + Date.parse(new Date()) 
        + '.' + req.body.name.split('.')[1];
    console.log(imgName);

    let result = {
      code: 0,
      msg: 'ok',
      data: {}
    }

    // 保存图片
    fs.writeFile('upload_img/' + imgName, dataBuffer, function(err) {
      if(err){
        result.code = -1;
        result.msg = 'error';
      }else{
        result.code = 0;
        // 返回图片位置
        result.data.url = 'http://localhost/angularBlogBk/upload_img/' + imgName;
      }
      res.send(JSON.stringify(result));
    });
  }
}

export default new Post();
