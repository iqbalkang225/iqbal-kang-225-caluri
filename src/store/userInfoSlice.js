import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  caloriesRequired: 0,
  BMR: 0
}

const userInfoSlice = createSlice({
  name: 'calculate-calories',
  initialState,
  reducers: {
    updateState (state,action) {
      return {
        ...action.payload
      }

    },

    calcCalories(state) {
      const { weight, feet, inches, age, activity } = state
      const height = ((Number(feet) * 12) + Number(inches)) * 2.54

      if(state.gender === 'male') {
        const BMR = 66.5 + (13.75 * weight/2.2046) + (5.003 * height) - (6.755 * age)
        state.caloriesRequired = (Number(BMR) * Number(activity)).toFixed(0)
        state.BMR = Number(BMR)
      }   

      if(state.gender === 'female') {
        const BMR = 655.1 + (9.563 * weight/2.2046) + (1.850 * height) - (4.676 * age)
        state.caloriesRequired = (Number(BMR) * Number(activity)).toFixed(0)
        state.BMR = Number(BMR)
      }   
    }
  }
})

export const { updateState, calcCalories } = userInfoSlice.actions
export default userInfoSlice.reducer