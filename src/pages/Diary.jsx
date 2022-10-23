import React from 'react'
import { useSelector } from 'react-redux'
import MealType from '../components/MealType'

const Diary = () => {

  const { caloriesRequired } = useSelector(store => store.userInfoSlice)
  const { totalCalories } = useSelector(store => store.storedMealsSlice.caloriesEaten)

  return (
    <div className=" text-black text-sm h-[calc(100vh-140px)] overflow-y-scroll">
      {/* header card */}
      <div className = 'bg-white p-4 mb-4 shadow-md shadow-white/50 rounded-md hover:shadow-sm duration-200'>
        <h2 className="text-sm mb-2"> Calories Remaining </h2>
        <div className = 'flex justify-between items-center'>
          {/* 1st item */}
          <div className = 'flex flex-col items-center'>
            <p className = 'text-sm'> {caloriesRequired} </p>
            <p className = 'text-xs text-gray-500'>Goal</p>
          </div>

          {/* 2nd item */}
          <div className = 'flex flex-col items-center'>
            -
          </div>

          {/* 3rd item */}
          <div className = 'flex flex-col items-center'>
            <p className = 'text-sm'> {totalCalories} </p>
            <p className = 'text-xs text-gray-500'>Food</p>
          </div>

          {/* 4th item */}
          <div className = 'flex flex-col items-center'>
            +
          </div>

          {/* 5th item */}
          <div className = 'flex flex-col items-center'>
            <p className = 'text-sm'>0</p>
            <p className = 'text-xs text-gray-500'>Exercise</p>
          </div>

          {/* 6th item */}
          <div className = 'flex flex-col items-center'>
            =
          </div>

          {/* 7th item */}
          <div className = 'flex flex-col items-center'>
            <p className = 'text-sm font-bold'> {caloriesRequired - totalCalories} </p>
            <p className = 'text-xs text-gray-500'>Remaining</p>
          </div>
        </div>
      </div>

      <div className = 'space-y-4'>

        <MealType type = 'breakfast' />
        <MealType type = 'snack-1' />
        <MealType type = 'lunch' />
        <MealType type = 'snack-2' />
        <MealType type = 'dinner' />
        <MealType type = 'snack-3' />

      </div>

    </div>
  )
}

export default Diary

 {/* breakfast item 1 */}
//  <div className = 'flex justify-between items-center py-2'>
//  <div className = 'flex items-center gap-2'>
//    <img src = {temp} className = 'h-11 w-11 rounded-full' />
//    <div>
//      <h3>Museli</h3>
//      <p className = 'text-xs text-gray-500'>1.0 cup</p>
//    </div>
//  </div>
//  <p>310</p>
// </div>