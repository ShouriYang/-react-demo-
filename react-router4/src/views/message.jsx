import React, { Component } from 'react';
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
    render() { 
        return (
        <ul>
            {
                this.state.messages.map((m,index)=>
                    <li key={index}>
                        <a href="?">{m.title}</a>
                    </li>
                )
            }
        </ul>
        );
    }
}
 
export default Message;