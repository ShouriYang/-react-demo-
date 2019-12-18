//包含了所有的 action creator
import {DELERE_COMMENTS,ADD_COMMENTS,RECEIVE_COMMENTS} from './action-types'
export const addComments = (comment)=> ({
  type:ADD_COMMENTS,
  data:comment
})
export const deleteComments = (index) =>({
  type:DELERE_COMMENTS,
  data:index
})
const receiveComments = (comments) =>({
  type:RECEIVE_COMMENTS,
  data:comments
})
//模拟从后台异步获取数据
export const getComments = ()=>{
  return dispatch =>{
    //模拟发送ajax请求异步获取数据
    setTimeout(() => {
      const comments = [
        {
          username: 'Tom',
          content: 'ReactJS好难啊!',
          id: Date.now()
        },
        {
          username: 'JACK',
          content: 'ReactJS还不错!',
          id: Date.now() + 1
        }
      ];
      dispatch(receiveComments(comments))
    }, 1000);
  }
}
