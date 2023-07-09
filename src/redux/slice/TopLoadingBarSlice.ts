import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateProps {
  progress: number;
}

const initialState: InitialStateProps = {
  progress: 0,
};

const topLoadingBarSlice = createSlice({
  name: "topLoadingBar",
  initialState,
  reducers: {
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
  },
});

export const { setProgress } = topLoadingBarSlice.actions;

export default topLoadingBarSlice.reducer;
