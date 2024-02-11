// articleSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state, reducers, and async thunk
const initialState = {
  carouselArticles: [],
  // other state properties...
};

export const fetchCarouselArticles = createAsyncThunk(
  'articles/fetchCarouselArticles',
  async () => {
    try {
      const response = await fetch('https://656bc554e1e03bfd572dd28f.mockapi.io/parenting/article');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching carousel articles:', error);
      throw error;
    }
  }
);

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    // Define other reducers if needed...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarouselArticles.fulfilled, (state, action) => {
        state.carouselArticles = action.payload;
      });
    // Add other cases for pending and rejected states if needed...
  },
});

export const selectCarouselArticles = (state) => state.articles.carouselArticles;  // Add this selector

export default articleSlice.reducer;