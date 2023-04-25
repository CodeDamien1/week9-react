import React from "react";
import Login from './components/Login'
import './App.css';
import {useState} from 'react'


const App = () => {

  const [user, setUser] = useState()

  return (
    <div>
      <Login newUser={setUser}/>
      {user ?
        <h2> Hello Welcome {user} </h2>
        :
        <h2> Please Log In</h2>
      }
    </div>
  );
}

export default App;
