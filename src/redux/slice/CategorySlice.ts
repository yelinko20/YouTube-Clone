import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  selectedCategory: string;
};

const initialState: InitialState = {
  selectedCategory: "Programming",
};

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = CategorySlice.actions;

export default CategorySlice.reducer;
