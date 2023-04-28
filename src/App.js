import React from "react";
import Login from './components/Login'
import Register from './components/Register'


import {useState, useEffect } from 'react'

import {getCookie} from "./common"
import { authCheck } from "./utils";

const App = () => {

  const [user, setUser] = useState()

  useEffect(()=>{
    let jwt = getCookie("jwt_token")
    console.log("!!!!!!!!!!")
    console.log(jwt);

    if (jwt !== false){
      loginWithToken(jwt);
    }
  }, []);

  const loginWithToken = async (jwt) => {
    const user = await authCheck(jwt)
    setUser(user);
  }

  return (
    <div>
      <Register />
      <br></br>
      <br></br>
      <Login newUser={setUser} />
      {user 
        ?
        <h2>Hello welcome {user} you have logged in</h2>
        :
        <h2>Please log in</h2>
      }
    </div>
  );
};

export default App;