import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isShow: boolean;
};

const initialState: InitialState = {
  isShow: false,
};

const SidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    show: (state) => {
      state.isShow = !state.isShow;
    },
  },
});

export const { show } = SidebarSlice.actions;
export default SidebarSlice.reducer;
