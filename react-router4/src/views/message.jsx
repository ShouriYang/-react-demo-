import React, { Component } from 'react';
import {Route,NavLink } from 'react-router-dom'
import MessageDeatil from './message-detail'
class Message extends Component {
    state = { 
        messages:[
        ]
     }
     componentDidMount() {
         //模拟发送ajax请求，异步获取数据
         setTimeout(()=>{
             const messages = [
                {id:1, title:'message01'},
                {id:3, title:'message03'},
                {id:5, title:'message05'}
                
             ]
         //更新状态
             this.setState({messages})
         },1000)
     }
     showDetails = (id)=>{
         this.props.history.push(`/home/message/messagedetail/${id}`)
     }
     showDetails2 = (id)=>{
        this.props.history.replace(`/home/message/messagedetail/${id}`)
    }
    back= ()=>{
        this.props.history.goBack()
    }
    forward = ()=>{
        this.props.history.goForward()
    }
    render() { 
        return (
        <div>
            <div>
            <ul>
            {
                this.state.messages.map((m,index)=>
                    <li key={index}>
                        <NavLink to={`/home/message/messagedetail/${m.id}`}>{m.title}</NavLink>
                        <button onClick={() =>this.showDetails(m.id)}>push查看</button>
                        <button onClick={() =>this.showDetails2(m.id)}>replace查看</button>
                    </li>
                )
            }
        </ul>
            </div>
            <p>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
            </p>
            <div>
            <Route path='/home/message/messagedetail/:id' component={MessageDeatil}></Route> 
            </div>
        </div>
        );
    }
}
 
export default Message;