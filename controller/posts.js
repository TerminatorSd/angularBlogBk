/**
 * @author shaoDong
 * @email scut_sd@163.com
 * @create date 2018-08-19 11:11:55
 * @modify date 2018-08-19 11:11:55
 * @desc controller of posts including get update delete
*/

import { Post as PostModel } from '../models/posts';

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
    console.log(id);
    const result = {
      code: 0,
      msg: 'ok',
      data: 'haha'
    }
    try {
      result.data = await PostModel.findById(id);
    } catch(err) {
      console.log('获取post detail失败');
      result.code = -1;
      result.msg = 'get detail error';
    } finally {
      res.send(JSON.stringify(result));
    }
  }

  async updatePost(req, res, next) {
    console.log(req);
    const result = {
      code: 0,
      msg: 'ok',
      data: 'fine'
    }
    const thisData = req.body;
    // 获取当前时间
    thisData.updated_at = Date.parse(new Date()) / 1000;
    const insertData = new PostModel(thisData);
    console.log(thisData);
    // try {
    //   insertData.save(function(error, doc) {
    //     if(error){
    //       console.log("error :" + error);
    //     }else{
    //       console.log(doc);
    //     }
    //   });
    // } catch(err) {
    //   console.log('更新manage detail失败');
    //   result.code = -1;
    //   result.msg = 'update detail error';
    // } finally {
    //   res.send(JSON.stringify(result));
    // }
  }

}

export default new Post();
