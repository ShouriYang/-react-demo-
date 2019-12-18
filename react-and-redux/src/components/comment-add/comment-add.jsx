import React, { Component } from 'react';
import PropTypes from 'prop-types'

class CommentAdd extends Component {
  state = {
    username: '',
    content: ''
  }
  addComment = ()=> {
    // 根据输入的数据创建评论对象
    let { username, content } = this.state
    let comment = { username, content }
    // 添加到comments中, 更新state
    this.props.add(comment)
    // 清除输入的数据
    this.setState({
      username: '',
      content: ''
    })
  }

  changeUsername = (event)=> {
    this.setState({
      username: event.target.value
    })
  }

  changeContent = (event) =>{
    this.setState({
      content: event.target.value
    })
  }

  render () {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名"
                   value={this.state.username} onChange={this.changeUsername}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容"
                      value={this.state.content} onChange={this.changeContent}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
CommentAdd.propTypes = {
  add: PropTypes.func.isRequired
}

export default CommentAdd