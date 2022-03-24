import axios from 'axios'

const HOST_URL = process.env.BE_URL || "http://localhost:5000"


const login = async (username, password) => {
    return await axios.post(`${HOST_URL}/login`,
        {
            username: username,
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
const fetchUserDetails = async () => {
    return await axios.get(`${HOST_URL}/users/me`)
        .then((res) => {
            if (res.status === 200) return res.data
            else return {}
        })
        .catch((err) => {
            console.log(err)
            throw err
        })
}

export {fetchUserDetails, login}

