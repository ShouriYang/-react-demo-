//包含n个reducer函数(根据旧的state和action返回一个新的action和state)
import {combineReducers} from 'redux'
import {ADD_COMMENTS,DELERE_COMMENTS,RECEIVE_COMMENTS} from './action-types'
const initComments = []
function comments(state=initComments,action){
  switch(action.type) {
    case ADD_COMMENTS:
      return [action.data, ...state]
    case DELERE_COMMENTS:
      return state.filter((comment,index) => index!==action.data) //返回下标不为index的数组元素
    case RECEIVE_COMMENTS:
      return action.data
    default:
      return state
  }
}
function counter(state = 0, action) {
  console.log('counter()',state,action)
  switch (action.type) {
    case ADD_COMMENTS:
      return state + action.data
    case DELERE_COMMENTS:
      return state - action.data
    default:
      return state
  }
}
export default combineReducers({
  comments,
  counter
}
)

//redux向外暴露的state结构？
//{counter:2,comments:[]}