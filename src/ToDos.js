import React, { Component } from 'react';
class ToDos extends Component {
    state = {  }
    render() { 
        return ( 

            
            <div className='list-container'>
                <label>ToDo LIST</label>
            <ul>
            <input type="checkbox" id="todo" name="todo"
         checked /> do something
            </ul>


            </div>
            
         );
    }
}
 
export default ToDos;