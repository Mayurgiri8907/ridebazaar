import { configureStore } from '@reduxjs/toolkit'
import moviereducer from './reducers/movies'
export default configureStore({
  reducer: {
    moviereducer : moviereducer,
  },
})