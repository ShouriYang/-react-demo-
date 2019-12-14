import React, { Component } from 'react';
class News extends Component {
    state = { 
        newsArr : [
            'news01',
            'news02',
            'news03'
        ]
     }
    render() { 
        return ( 
        <ul>
            {
                this.state.newsArr.map((news,index)=>
                    (<li key={index}>{news}</li>)
                )
            }
        </ul>    );
    }
}
export default News;