import { createSlice } from '@reduxjs/toolkit'

const recommendedNutrientsIntake = {
  protein: 0,
  carbohydrates: 0,
  fiber: 38,
  sugar: 50,
  fat: 0,
  saturatedFat: 20,
  transFat: 0,
  cholesterol: 300,
  calcium: 100,
  sodium: 2300,
  magnesium: 400,
  potassium: 3500,
}

const initialState = {
  caloriesRequired: null,
  BMR: 0,
  recommendedNutrientsIntake,
}

const userInfoSlice = createSlice({
  name: 'user-info',
  initialState,
  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },

    calcCalories(state) {
      const { weight, feet, inches, age, activity } = state
      const height = (Number(feet) * 12 + Number(inches)) * 2.54

      if (state.gender === 'male') {
        const BMR = 66.5 + (13.75 * weight) / 2.2046 + 5.003 * height - 6.755 * age
        state.caloriesRequired = (Number(BMR) * Number(activity)).toFixed(0)
        state.BMR = Number(BMR)
      }

      if (state.gender === 'female') {
        const BMR = 655.1 + (9.563 * weight) / 2.2046 + 1.85 * height - 4.676 * age
        state.caloriesRequired = (Number(BMR) * Number(activity)).toFixed(0)
        state.BMR = Number(BMR)
      }
    },

    calcMacros(state) {
      state.recommendedNutrientsIntake.protein = ((30 * state.caloriesRequired) / 100 / 4).toFixed()
      state.recommendedNutrientsIntake.fat = ((30 * state.caloriesRequired) / 100 / 9).toFixed()
      state.recommendedNutrientsIntake.carbohydrates = ((40 * state.caloriesRequired) / 100 / 4).toFixed()
    },

    updateUser(state, action) {
      console.log(action.payload)
      return { ...state, ...action.payload }
    },
  },
})

export const { updateState, calcCalories, calcMacros, updateUser } = userInfoSlice.actions
export default userInfoSlice.reducer
