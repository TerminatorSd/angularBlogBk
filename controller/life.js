/**
 * @Author:   shaoDong
 * @Version:  1.0
 * @DateTime: 2018-08-27 14:42:23
 * @Description: life controller
 **/

import { Life as LifeModel } from '../models/life';

class Life {
  constructor() { }

  async addLife(req, res, next) {
    console.log(req);
    const result = {
      code: 0,
      msg: 'ok',
      data: 'fine'
    }
    // const thisData = req.body;
    // // 获取当前时间
    // thisData.updated_at = Date.parse(new Date()) / 1000;
    // const insertData = new PostModel(thisData);
    // console.log(thisData);
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

export default new Life();
