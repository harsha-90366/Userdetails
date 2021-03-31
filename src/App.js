import React,{Component, useState} from 'react';
import Nav from './Nav';
import './App.css';
//import history from './history';
import Newusers from './Newusers';


function App(){

  return(
    
    <div className='maincontent'>
      <h3>IVISLABS</h3>
     <br></br>
    <Nav />
    <li className='bts'>
      <input type='text' placeholder='Search mobile'></input>
      <button className='bt1'>Search</button>
      <button className='bt2'>Blocked Users</button>
      <button className='bt3'>Create New User</button>
    </li>
    <Newusers />
    </div>
    
  )
}
const StyleS={
  container:{
    backgroundColor:'teal',
    
    
  }
}

export default App;