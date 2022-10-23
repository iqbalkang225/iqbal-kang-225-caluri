import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storedMeals: [],
  caloriesEaten: {
    totalCalories: 0,
  }
}

const storedMealsSlice = createSlice({
  name: 'stored-meals',
  initialState,
  reducers: {
    addMeal(state,action) {
      state.storedMeals.push(action.payload)
    },

    addMealTypeCalories(state,action) {
      console.log(action.payload)
      state.caloriesEaten = {...state.caloriesEaten, ...action.payload}
    },

    deleteMeal(state,action) {
      state.storedMeals = state.storedMeals.filter(meal => meal.id !== action.payload)
    },

    updateCaloriesEaten(state) {
      state.caloriesEaten.totalCalories =  state.storedMeals.reduce((total, meal) => total + (meal.nutrition.calories * meal.numOfServings) ,0)
    },

    mealToEdit(state,action) {
      state.selectedMeal = state.storedMeals.find(meal => meal.id === action.payload)
    },

    editMeal(state,action) {
      const mealIndex = state.storedMeals.findIndex(meal => meal.id === action.payload.id )
      state.storedMeals[mealIndex] = action.payload
    }
  }
})


export const { addMeal, addMealTypeCalories, deleteMeal, updateCaloriesEaten, mealToEdit, editMeal } = storedMealsSlice.actions

export default storedMealsSlice.reducer