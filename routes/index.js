/**
 * @author shaoDong
 * @email scut_sd@163.com
 * @create date 2018-08-19 11:07:25
 * @modify date 2018-08-19 11:07:25
 * @desc routes
*/

import posts from './posts.js';
import life from './life.js';
import reading from './reading.js';

export default app => {
	app.use('/posts', posts);
  app.use('/life', life);
  app.use('/reading', reading);
}