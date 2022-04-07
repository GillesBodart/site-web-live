import axios from 'axios'

const HOST_URL = process.env.BE_URL || "http://localhost:5000"


const createUser = async (username, password, email) => {
    return await axios.post(`${HOST_URL}/api/auth/register`,
        {
            username: username,
            email: email,
            password: password
        })
        .then((res) => {
            if (res.status === 200) return res.data
            else return {}
        })
        .catch((err) => {
            console.log(err)
            throw err
        })
}
const login = async (email, password) => {
    return await axios.post(`${HOST_URL}/api/auth/login`,
        {
            email: email,
            password: password
        })
        .then((res) => {
            if (res.status === 200) return res.data
            else return {}
        })
        .catch((err) => {
            console.log(err)
            throw err
        })
}
const fetchUserDetails = async (token) => {
    return await axios.get(`${HOST_URL}/api/users/me`, {
        headers: {
            'Authorization': token
        }
    })
        .then((res) => {
            if (res.status === 200) return res.data
            else return {}
        })
        .catch((err) => {
            console.log(err)
            throw err
        })
}

export {fetchUserDetails, login, createUser}

