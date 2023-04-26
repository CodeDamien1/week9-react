// Login user

export const loginUser = async (username, email, password, newUser) => {
    try {
        const response = await fetch("http://localhost:5001/users/login", {
            method: "POST",
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
    } catch (error) {
        console.log(error)
    }
}

export const registerUser = async (username, email, password) => {
    try {
        const response = await fetch("http://localhost:5001/users/register", {
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
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// TODO: add register fetch function here