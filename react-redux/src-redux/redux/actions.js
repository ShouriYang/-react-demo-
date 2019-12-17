// 包含所有的action creator(函数)
import {
  INCREMENT,
  DECREMENT
} from './action-types'
//增加函数
export const increment = (number) => ({
  type: INCREMENT,
  data: number
})
//减少函数
export const decrement = (number) => ({
  type: DECREMENT,
  data: number
})