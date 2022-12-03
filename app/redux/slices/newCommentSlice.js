import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { addReview, getReviews } from '../../networking/api/endpoints/reviewsWS'

const initialState = {
    reviews: null,
    error: null,
    status: 'idle',
    isLoading: false,
  }
  
  export const addReview = createAsyncThunk('addReview',
  async ({ formValue, restoId }, thunkAPI) => {
    const result = await addReview(formValue, restoId);
    //thunkAPI.dispatch(getReviews);
    return result
    }
  );

  export const newCommentSlice = createSlice({
    name: 'addReview',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(addReview.pending, (state, action) => {
          state.status = 'loading';
          state.error = null;
          state.isLoading = true;
        })
        .addCase(addReview.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.reviews = action.payload;
          state.isLoading = false;
          console.log(action.type);
        })
        .addCase(addReview.rejected, (state, action) => {
          state.status = 'failed';
          state.error = 'Hubo un error en la creación de la review';
          state.isLoading = false;
          console.log(action);
        })
    }
  })
  
  export default newCommentSlice.reducer