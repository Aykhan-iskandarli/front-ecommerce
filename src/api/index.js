 import axios from "axios"

// const apiEndPoint = "https://blognodee.herokuapp.com/api"

// export const addToCart = async (productId) => await axios.get(apiEndPoint,productId)
// export const listProducts = async () => await axios.get(apiEndPoint)
// export const detailsProduct = async (productId) => await axios.get(apiEndPoint,productId)
// export const createOrder = async (order) => await axios.post(apiEndPoint,order)
// export const detailsOrder = async (orderId) => await axios.get(apiEndPoint,orderId)
// export const register = async (name, email, password) => await axios.post(apiEndPoint,{name, email, password})
// export const signin = async (email, password) => await axios.post(apiEndPoint,{email, password})

export const axiosInstance = axios.create({
    baseURL: "https://blognodee.herokuapp.com/api"
})