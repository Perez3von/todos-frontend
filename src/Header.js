import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class Header extends Component {
    state = {  }
    render() { 
        return (
            <header>
            <h2> the header</h2>
                <div className='links'>

                    <NavLink exact to='/'>
                        Home 
                    </NavLink>
                    <NavLink exact to='/signin'>
                        Login
                    </NavLink>
                    <NavLink exact to='/signup'>
                        Sign-up
                    </NavLink>
                </div>


        </header>
          );
    }
}
 
export default Header;