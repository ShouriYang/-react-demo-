import React, { Component } from 'react';
import MyNavLink from '../components/MyNavLink'
import {Redirect,Switch,Route} from 'react-router-dom'
import News from './news'
import Message from './message'
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>home route Component</h2>
                <div>
                    <ul className='nav nav-tabs'>
                        <li>
                            <MyNavLink to='/home/news'>news</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/message'>message</MyNavLink>
                        </li>
                    </ul>
                    <div>
                    <Switch>
                                <Route path='/home/news' component={News}></Route>
                                <Route path='/home/message' component={Message}></Route>
                                <Redirect to='/home/news'></Redirect>
                    </Switch>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;