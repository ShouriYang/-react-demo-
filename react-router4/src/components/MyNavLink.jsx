import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class MyNavlink extends Component {
    state = {  }
    render() { 
        return (
        //将外部传入的所有属性传递给navlink
       <NavLink {...this.props} activeClassName='activeClass'></NavLink>
        )
        ;
    }
}
 
export default MyNavlink;