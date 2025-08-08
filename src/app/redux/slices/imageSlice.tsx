// store/slices/imageSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedImage: null, // ✅ this must be defined
}

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImage: (state, action) => {
     
      state.selectedImage = action.payload
      console.log(action.payload);
      
    }
  }
})

export const { addImage } = imageSlice.actions
export default imageSlice.reducer
