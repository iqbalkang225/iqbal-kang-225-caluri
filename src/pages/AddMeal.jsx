import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import Loader from '../components/Loader'
import { BiArrowBack } from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import NutritionLabel from '../components/NutritionLabel'
import { useDispatch } from 'react-redux'
import { fetchMeal } from '../store/fetchedMealsSlice'
import { useSelector } from 'react-redux'

const AddMeal = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const {nutrition} = useSelector(store => store.fetchedMealsSlice.fetchedMeal)
  const {fat, protein, carbs} =  nutrition
  const { percentFat, percentProtein, percentCarbs } = nutrition.caloricBreakdown
 

  useEffect( () => {
    dispatch( fetchMeal(id) )
  }, [] )


  return (
    <div className = 'space-y-3 h-full overflow-y-scroll'>
      {/* add meal card */}
      <div className = 'bg-white rounded-md  text-black overflow-hidden'>
        {/* header */}
        <div className = 'flex items-center justify-between bg-red-50 p-2'>
          <div className = 'flex items-center gap-6'>
          <Link to = '/search' className = 'hover:text-red-500 duration-100 hover:scale-110'>
              <BiArrowBack size={24} />
            </Link>
            <h3>Add Food</h3>
          </div>
          <Link to = '/search' className = 'hover:text-red-500 duration-100 hover:scale-110'>
            <BsCheck size={32} />
          </Link>
        </div>
        {/* card body */}
        <div className = 'divide-y-2 p-2'>
          <h2 className = 'font-bold text-lg py-3'>Oatmeal, Dry</h2>
          <form className = 'divide-y-2'>
            {/* form group */}
            <div className = 'flex justify-between py-3'>
              <label htmlFor="meal">Meal</label>
              <select name="meal" className = 'text-red-500 outline-none cursor-pointer'>
                <option value = 'breakfast'> Breakfast </option>
                <option value = 'snack-1'> Snack 1 </option>
                <option value = 'lunch'>  Lunch </option>
                <option value = 'snack-2'> Snack 2 </option>
                <option value = 'dinner'> Dinner </option>
              </select>
            </div>
             {/* form group */}
             <div className = 'flex justify-between py-3'>
              <label htmlFor="servings">Number of Servings</label>
              <input type="number" name='servings'  className = 'w-10 outline-none text-red-500' />
            </div>
          </form>
          {/* calories  */}
          <div className = 'flex justify-between p-4'>
            {/* children */}
            <div className = 'text-center'>
              <p className="text-xs text-green-500">{percentCarbs}%</p>
              <p className = 'text-sm'> {carbs} </p>
              <p className="text-xs text-gray-400">Carbs</p>
            </div>
            {/* children */}
            <div className = 'text-center'>
            <p className="text-xs text-yellow-500">{percentCarbs}%</p>
              <p className = 'text-sm'>{carbs}</p>
              <p className="text-xs text-gray-400">Carbs</p>
            </div>
            {/* children */}
            <div className = 'text-center'>
              <p className="text-xs text-orange-500">{percentFat}%</p>
              <p className = 'text-sm'>{fat}</p>
              <p className="text-xs text-gray-400">Fat</p>
            </div>
            {/* children */}
            <div className = 'text-center'>
              <p className="text-xs text-green-500">{percentProtein}%</p>
              <p className = 'text-sm'>{protein}</p>
              <p className="text-xs text-gray-400">Protein</p>
            </div>
          </div>
          {/* nutrition label */}
          <NutritionLabel />
        </div>
      </div>
    </div>
  )
}

export default AddMeal