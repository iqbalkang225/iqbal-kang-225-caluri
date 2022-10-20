import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./userInfoSlice";
import fetchedMealsSlice from "./fetchedMealsSlice";

const store = configureStore({
  reducer: {
    userInfoSlice,
    fetchedMealsSlice
  }
})

export default store