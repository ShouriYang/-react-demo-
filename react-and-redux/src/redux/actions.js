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
//异步函数，只有在store中引入了中间件API和thunk才能实现异步操作
export const incrementAsync = (number) => {
  return dispatch => {
    //异步的操作
    setTimeout(() => {
      //1s之后才去分发一个增加的action
      dispatch(increment(number))
    }, 1000)
  }
}
//同步的action都是返回一个对象，而异步action返回的是一个函数