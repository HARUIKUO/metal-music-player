import jsonp from 'common/utils/jsonp'
import {commonParams, options} from './config'

export function getSingerList() {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'

  const data = Object.assign({}, commonParams, {
    -: 'getUCGI14728849744692374',
    g_tk: 1359799276,
    hostUin: 0,
    platform: 'yqq.json',
    needNewCode: 0
    data: {"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}
    })
  }

return jsonp(url, data, options)
