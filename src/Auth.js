import React, { Component } from 'react';
const router = require('browser-router');
class Auth extends Component {
    state = { 
        title:'',
        button_text:''
     }


     
    render() { 
        return ( 

        <div className='form-container'>
{console.log(router.getTitle())}
            <form>

                <label >
                Email
                </label>
                <input type='email'></input>
                <label > Password </label>
                <input type='password' ></input>
                <button type='submit'></button>



            </form>
        
        </div> );
    }
}
 
export default Auth;