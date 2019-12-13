import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './commentItem.css'
class CommentItem extends Component {
    state = {  }
    handleDelete = ()=>{
      const {comment,deleteComment,index} = this.props
      //提示是否要删除
      if(window.confirm(`确定删除${comment.username}的评论吗？`)){
        deleteComment(index)
      }
    }
    static propTypes = {
        comment : PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }
    render() { 
        const {comment} = this.props
        return ( 
                <li className="list-group-item">
                <div className="handle">
                  <a onClick={this.handleDelete}>删除</a>
                </div>
                <p className="user"><span >{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}!</p>
              </li>
         );
    }
}
 
export default CommentItem;