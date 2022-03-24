import axios from 'axios'

const HOST_URL = process.env.BE_URL || "http://localhost:5000"


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

export {fetchUserDetails}

