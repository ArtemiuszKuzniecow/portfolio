import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "english",
  isNavbarCollapsed: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    handleCollapse: (state, action) => ({
      ...state,
      isNavbarCollapsed: action.payload,
    }),
    toggleCollapse: (state) => ({
      ...state,
      isNavbarCollapsed: !state.isNavbarCollapsed,
    }),
    toggleLanguage: (state, action) => ({
      ...state,
      language: action.payload,
    }),
  },
});

export const { reducer: mainReducer } = mainSlice;
