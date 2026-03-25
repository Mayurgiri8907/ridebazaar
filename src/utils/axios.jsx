import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://ridebazaar.onrender.com',
  }
)

export default instance;