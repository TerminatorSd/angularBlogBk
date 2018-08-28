/**
 * @Author:   shaoDong
 * @Version:  1.0
 * @DateTime: 2018-08-19 18:21:22
 * @Description: routes of posts
 **/
import express  from 'express'; 
import Post from '../controller/posts.js'; 
var router = express.Router();

router.get('/list', Post.getList);
router.get('/detail', Post.getDetail);
router.post('/update', Post.updatePost);
router.post('/add', Post.addPost);

export default router;