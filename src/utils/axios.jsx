import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTMyODNiNmZiYzY3MjA3ZjUyYTg0MGY0NDFmMTllZCIsIm5iZiI6MTc2NjY1MTgwNy45NTYsInN1YiI6IjY5NGNmNzlmMWJjYWE4Zjg4OTA3MjYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-zgQM1J-FzANpMLRwtUHgXaE8rbjj8psmIzfFWgYGIo'
  }
})

export default instance;