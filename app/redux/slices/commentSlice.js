import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getReviews,addReview} from '../../networking/api/endpoints/reviewsWS'

const initialState = {
    review: [],
    pageCount: 0,
    error: null,
    isLoading: false,
};

export const getAllReviews = createAsyncThunk(
    'reviews',
    async () => {
      return await getReviews();
    }
  )
  
  export const commentSlice = createSlice({
    name: 'reviews',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(getAllReviews.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.review= action.payload;
        console.log(action.type);
        console.log("Comentario in state", state.review?.length);
      }) 
      .addCase(getAllReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Hubo un error en la carga de comentarios';
        console.log(action.type);
      })
    }
  })
  
  export default reviewSlice.reducer