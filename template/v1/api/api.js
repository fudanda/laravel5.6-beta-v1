import {
    httpGet
} from './axios'
import {
    ROAST_CONFIG
} from '../config.js.js';
export default {
    // top250 25
    getGoodNew: httpGet('http://api.douban.com/v2/movie/top250?start=25&count=25', 'get'),
    // 正在热映
    getHot: httpGet('http://api.douban.com/v2/movie/in_theaters', 'get'),
    // 即将上映
    getshown: httpGet('http://api.douban.com/v2/movie/coming_soon', 'get'),
    getfuli: httpGet('https://gank.io/api/data/%E7%A6%8F%E5%88%A9/50/1', 'get')

}
