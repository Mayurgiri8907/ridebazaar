import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    info: null
  },
  reducers: {

    showmovie: (state, action) => {
      state.info = action.payload;
    },

    removemovie: (state) => {
      state.info = null;
    }

  },
})

export const { showmovie, removemovie } = movieSlice.actions
export default movieSlice.reducer