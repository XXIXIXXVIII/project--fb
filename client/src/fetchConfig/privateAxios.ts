import axios from "axios";

const baseURL = 'http://localhost:6969'
const jwtTokent = localStorage.getItem('jwtToken')
let jwt
if(jwtTokent){
  jwt = JSON.parse(jwtTokent)
}

const privateAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwt}`
  }
  
})

export default privateAxios