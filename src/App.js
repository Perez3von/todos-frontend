import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './Header.js';
import Auth from './Auth.js';
import Home from './Home.js';
import './App.css'


class App extends Component {
  state = {  }
  render() { 
    return ( 
    
    <div>
        <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signin' component={Auth}/>
          <Route path='/signup' component={Auth}/>
          

          
        </Switch>
        
        </BrowserRouter>


    </div> 
    
    
    );
  }
}
 
export default App;