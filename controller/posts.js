/**
 * @author shaoDong
 * @email scut_sd@163.com
 * @create date 2018-08-19 11:11:55
 * @modify date 2018-08-19 11:11:55
 * @desc controller of posts including get update delete
*/

import { Post as PostModel } from '../models/posts';
import formidable from 'formidable'

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
      PostModel.update(conditions, thisData);
      // throw new Error('error');
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
    var imgData = req.body;
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    fs.writeFile("image.png", dataBuffer, function(err) {
        if(err){
          res.send(err);
        }else{
          res.send("保存成功！");
        }
    });
    // const form = new formidable.IncomingForm();
    // form.parse(req, async (err, fields, files) => {
    //   console.log(fields);
    //   console.log(files);
    // })
    const result = {
      code: 0,
      msg: 'ok',
      data: 'fine'
    }
    // var files = req.body;
    // const conditions = { _id : req.body.id };
    // console.log(conditions);

    // try {
    //   PostModel.remove(conditions, function(err) {
    //     if(err) {
    //       console.log('err')
    //     } else {
    //       console.log('success')
    //     }
    //   });
    // } catch(err) {
    //   result.code = -1;
    //   result.msg = 'delete post error';
    // } finally {
    //   res.send(JSON.stringify(result));
    // }
  }

}

export default new Post();
