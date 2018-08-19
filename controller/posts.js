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

}
// const getList = function(req, res, next) {

//   PostModel.find().then(res => {
//     console.log(res);
//   })
//   const result = {
//     code: 0,
//     msg: 'ok',
//     data: 'haha'
//   }
// 	res.send(JSON.stringify(result));
// }

export default new Post();
