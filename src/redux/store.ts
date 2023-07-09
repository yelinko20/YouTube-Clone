import { configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "./slice/SidebarSlice";
import categoryReducer from "./slice/CategorySlice";
import topLoadingBarReducer from "./slice/TopLoadingBarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    category: categoryReducer,
    topLoadingBar: topLoadingBarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
