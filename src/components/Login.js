import React from "react"
import {useState} from "react"

const Login = ({newUser}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (e) => {
        
    }
    return (
        <>
        <h1>Login Below</h1>

        <form onSubmit={submitHandler}>
            <label>Username:
                <input onChange={(e)=> setUsername(e.target.value)}></input>
            </label>

            <br></br>

            <label>Email:
                <input onChange={(e)=> setEmail(e.target.value)}></input>
            </label>

            <br></br>

            <label>Password:
                <input onChange={(e)=> setPassword(e.target.value)}></input>
            </label>

            <br></br>
            <button type="Submit">Click here to login</button>
        </form>
        </>
    );
};

export default Login;