import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'
class Main extends Component {
    static propTypes = {
        searchName: PropTypes.string.isRequired
    }
    state = { 
        initView : true, //请输入关键字搜索
        loading: false,
        users: null,
        errorMsg: null //请求出错赋值
     }
     //当组件接收到新的属性时回调
    componentWillReceiveProps(newProps) {//指定了新的searchName然后发请求
        const {searchName} = newProps
        //更新为状态请求中loading状态
        this.setState({
            initView:false,
            loading: true
        })
        //发送ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
        .then(res=>{
            //得到响应数据之后更新为成功状态
            const result = res.data
            const users = result.items.map(item=>{
                return{
                    name: item.login,
                    url: item.html_url,
                    avatarUrl: item.avatar_url
                }
            })
            console.log(users)
            this.setState({
                loading:false,
                users
            })
        })
        .catch(err=>{
            //更新为失败状态
            this.setState({
                loading:false,
                errorMsg:err.message
            })
        })
    }
    render() { 
        //根据state的四个状态显示返回的内容
        const { initView,loading,users,errorMsg} = this.state
        const {searchName} = this.props
        if(initView){
        return <h2>请输入关键字进行搜索{searchName}</h2>
        }else if(loading) { 
            return <h2>正在请求中</h2>
        }else if(errorMsg){
            return <h2>{errorMsg}</h2>
        }else 
        return ( 
            <div className="row">
                {
                    users.map((user,index)=>( //箭头有两个作用：函数和自动return
                        <div className="card" key={index}>
                        <a href={user.url} target="_blank">
                            <img src={user.avatarUrl} style={{width: 100 }}/>
                        </a>
                        <p className="card-text">{user.name}</p>
                        </div>
                    ))
                }

            </div>
         );
    }
}
 
export default Main;