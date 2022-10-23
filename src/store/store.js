import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./userInfoSlice";
import fetchedMealsSlice from "./fetchedMealsSlice";
import storedMealsSlice from "./storedMealsSlice";

const store = configureStore({
  reducer: {
    userInfoSlice,
    fetchedMealsSlice,
    storedMealsSlice
  }
})

export default store