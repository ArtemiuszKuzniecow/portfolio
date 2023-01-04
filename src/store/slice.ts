import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "english",
  isNavbarCollapsed: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleCollapse: (state) => ({
      ...state,
      isNavbarCollapsed: !state.isNavbarCollapsed,
    }),
  },
});

export const { reducer: mainReducer } = mainSlice;
