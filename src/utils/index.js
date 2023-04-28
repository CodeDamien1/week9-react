// Login user
import {writeCookie} from "../common"

export const loginUser = async (username, email, password, newUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}user/login`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        console.log(data)
        newUser(data.user.username)
        writeCookie("jwt_token", data.user.token, 7)
    } catch (error) {
        console.log(error)
    }
}

export const registerUser = async (username, email, password, newUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}user/register`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                "username" : username,
                "email" : email,
                "password": password
            })
        })
        const data = await response.json()
        console.log("registeruser",data)
        newUser(data.user.username)
        writeCookie("jwt_token", data.user.token, 7)
    } catch (error) {
        console.log(error)
    }
}

export const authCheck = async (jwtToken) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}user/authcheck`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${jwtToken}`
            }
        })
        const data = await response.json()
        console.log("authCheck", data)
        return data.user.username
    } catch (error) {
        console.log(error)
    }
}
// TODO: add register fetch function here