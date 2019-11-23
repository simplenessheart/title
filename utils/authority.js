import { ajax } from './request.js'
import localUrl from './common.js'
//获取用户详情
export function userDetail(data){
  console.log(`${localUrl}/api/v1/user`)
  return ajax({
    url: `${localUrl}/api/v1/user`,
    method:'get',
    data:data
  })
}