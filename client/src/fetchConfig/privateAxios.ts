import axios from "axios";

const baseURL = 'http://localhost:6969'

const privateAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': JSON.parse(localStorage.getItem('jwt'))
  }
  
})

export default privateAxios