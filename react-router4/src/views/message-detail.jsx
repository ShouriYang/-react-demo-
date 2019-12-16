import React, { Component } from 'react';
class MessageDetail extends Component {
    state = { 
        allMessage : [
            {id:1, title:'message01',content:'我爱你'},
            {id:3, title:'message03',content:'我爱你'},
            {id:5, title:'message05',content:'我爱你'}
        ]
     }
    render() { 
        const {id} = this.props.match.params
        const message = this.state.allMessage.find((m)=>
            m.id===id*1
        )//返回第一个结果为true的元素
        return ( 
            <div>
                <ul>
            <li>ID:{message.id}</li>
            <li>TITLE:{message.title}</li>
            <li>CONTENT:{message.content}</li>
                </ul>
            </div>
         );
    }
}
 
export default MessageDetail;