import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { options, searchByName, searchById } from '../utilities/urls'

const initialState = {
  fetchedMeals: [],
  fetchedMeal: {},
  isLoading: false,
}

export const fetchMeals = createAsyncThunk('fetch-meals', async (mealName, thunkAPI) => {
  try {
    const res = await fetch(searchByName(mealName), options)
    const data = await res.json()
    return data.products
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong')
  }
})

export const fetchMeal = createAsyncThunk('fetch-meal', async (mealID, thunkAPI) => {
  try {
    const res = await fetch(searchById(mealID), options)
    const data = await res.json()
    const { nutrition, servings, title } = data
    return { nutrition, servings, title }
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong')
  }
})

const fetchedMealsSlice = createSlice({
  name: 'fetched-meals',
  initialState,
  extraReducers: {
    [fetchMeals.pending]: state => {
      state.isLoading = true
    },
    [fetchMeals.fulfilled]: (state, action) => {
      state.isLoading = false
      state.fetchedMeals = action.payload
    },
    [fetchMeals.rejected]: (state, action) => {
      state.isLoading = false
      console.log(action.payload)
    },
    [fetchMeal.pending]: state => {
      state.isLoading = true
    },
    [fetchMeal.fulfilled]: (state, action) => {
      state.isLoading = false
      state.fetchedMeal = action.payload
    },
    [fetchMeal.rejected]: (state, action) => {
      state.isLoading = false
      console.log(action.payload)
    },
  },
})

export const { updateState } = fetchedMealsSlice.actions

export default fetchedMealsSlice.reducer
