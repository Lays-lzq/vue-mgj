import {request} from "./request"


export function GetCategoryData() {
  return request({
    url: '/category'
  }) 
}