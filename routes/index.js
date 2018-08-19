/**
 * @author shaoDong
 * @email scut_sd@163.com
 * @create date 2018-08-19 11:07:25
 * @modify date 2018-08-19 11:07:25
 * @desc routes
*/

import posts from './posts.js';

export default app => {
	app.use('/posts', posts);
}