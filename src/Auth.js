import React, { Component } from 'react';
import { getToken } from './far-fetch-utils.js';
const router = require('browser-router');

class Auth extends Component {
    state = { 
    password:'',
    email:''
     }
getType = () => {
    return this.props.type === 'signin' ? 'Sign In' : 'Sign Up'
}

handleSubmit = async (e) =>{

    e.preventDefault();
    const token = await getToken(

        {
            email:this.state.email,
            password: this.state.password,
        },
        this.props.type );
        this.props.setToken(token);
        this.props.history.push('/todos');
}

     
    render() { 
        return ( 

        <div className='form-container'>
            <h3>{this.getType()}</h3>
            <form onSubmit={this.handleSubmit}>

                <label >
                Email:
                </label>
                <input type='email'
                onChange={(e)=>(this.setState({email:e.target.value}))}
                
                ></input>

                <label > Password: </label>
                <input type='password' 
                onChange={(e)=>(this.setState({password:e.target.value}))}
                ></input>
                
                <button type='submit'>{this.getType()}</button>

            </form>
        
        </div> );
    }
}
 
export default Auth;