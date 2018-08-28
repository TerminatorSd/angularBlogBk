/**
 * @Author:   shaoDong
 * @Version:  1.0
 * @DateTime: 2018-08-27 14:42:44
 * @Description: routes of life
 **/
import express  from 'express'; 
import Life from '../controller/life.js'; 
var router = express.Router();

router.post('/add', Life.addLife);

export default router;