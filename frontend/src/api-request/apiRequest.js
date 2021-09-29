import axios from 'axios'

axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token")


export const createOrder = async(orderObject)=>{
    return await axios.post('https://baanthai.herokuapp.com/api/post/order',orderObject)
    // return await axios.post('http://localhost:5000/api/post/order',orderObject)
}

export const bookDecoration = async(bookObj)=>{
    return await axios.post('https://baanthai.herokuapp.com/api/post/bookDecoration',bookObj)
}


export const bookPhotography = async(bookObj)=>{
    return await axios.post('https://baanthai.herokuapp.com/api/post/bookPhotography',bookObj)
}

export const bookQuotation = async(bookObj)=>{
    return await axios.post('https://baanthai.herokuapp.com/api/admin/post/quotation',bookObj)
}

export const Contact = async(bookObj)=>{
    return await axios.post('https://baanthai.herokuapp.com/api/admin/post/contact',bookObj)
}


export const Feedback = async(bookObj)=>{
    return await axios.post('https://baanthai.herokuapp.com/api/post/feedback',bookObj)
}

export const FeedbackG = async(bookObj)=>{
    return await axios.get('https://baanthai.herokuapp.com/api/post/feedback')

}






// return await axios.post('http://localhost:5000/api/post/order',orderObject)




