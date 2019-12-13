import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
class Search extends Component {
    state={
        searchName: ''
    }
    search= ()=>{
        //得到输入的关键字
        const searchName = this.state.searchName
        if(searchName){
            //搜索
            //发布消息（search）
            PubSub.publish('search',searchName)
        }
    }
    searchChange = (event)=>{
        const searchName = event.target.value
        this.setState({searchName})
    }
    render() { 
        const {searchName} = this.state
        return (  
            <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input type="text" placeholder="enter the name you search"
              value={searchName} onChange={this.searchChange}/>
              <button onClick={this.search}>Search</button>
            </div>
          </section>
        );
    }
}
 
export default Search;