/**
 * @author shaoDong
 * @email scut_sd@163.com
 * @create date 2018-08-19 11:11:55
 * @modify date 2018-08-19 11:11:55
 * @desc controller of Reading including get update delete
*/

import { Reading as ReadingModel } from '../models/reading';
import formidable from 'formidable'

class Reading {
  constructor() { }

  async getList(req, res, next) {
    const result = {
      code: 0,
      msg: 'ok',
      data: 'haha'
    }
    try {
      result.data = await ReadingModel.find();
    } catch(err) {
      console.log('获取Reading list失败');
      result.code = -1;
      result.msg = 'get list error';
    } finally {
      res.send(JSON.stringify(result));
    }
  }

  async addReading(req, res, next) {
    const result = {
      code: 0,
      msg: 'ok',
      data: 'fine'
    }
    const thisData = req.body;
    // 获取当前时间
    thisData.reading_at = Date.parse(new Date(thisData.reading_at)) / 1000;
    thisData.updated_at = Date.parse(new Date()) / 1000;
    console.log(thisData);
    const insertData = new ReadingModel(thisData);

    try {
      insertData.save();
    } catch(err) {
      result.code = -1;
      result.msg = 'add reading error';
    } finally {
      res.send(JSON.stringify(result));
    }
  }
  
}

export default new Reading();
