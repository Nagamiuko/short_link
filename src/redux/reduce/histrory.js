import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const getHistory = createReducer(initialState, {

    getHistoryAllRequest: (state) => {
      state.isLoading = true;
    },
    getHistoryAllSuccess: (state, action) => {
      state.isLoading = false;
      state.history = action.payload;
    },
    getHistoryAllFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },


})