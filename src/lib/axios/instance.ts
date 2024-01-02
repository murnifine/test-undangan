import axios from "axios"


export const instance = axios.create({
    baseURL: process.env.AUTH_URL,
    headers: {
        "Content-Type": 'aplication/json',
        "Chace-Control": 'no-chache',
        Expires: 0
    },
    timeout: 60 * 1000
})

instance.interceptors.response.use(
    (config) => config,
    (error) => Promise.reject(error)
)

instance.interceptors.request.use(
    (response) => response,
    (error) => Promise.reject(error)
)