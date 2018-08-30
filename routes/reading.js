/**
 * @Author:   shaoDong
 * @Version:  1.0
 * @DateTime: 2018-08-30 10:06:41
 * @Description: routes reading
 **/
import express  from 'express'; 
import Reading from '../controller/reading.js'; 
var router = express.Router();

router.get('/list', Reading.getList)
router.post('/add', Reading.addReading);

export default router;