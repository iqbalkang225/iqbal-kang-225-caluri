import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const NutritionLabel = () => {

  const dispatch = useDispatch()
  const {servings: {number, size, unit}, nutrition} = useSelector(store => store.fetchedMealsSlice.fetchedMeal)
  const { nutrients, calories } = nutrition

  return (
    <div className='text-xs p-4'>
      <h2 className='text-4xl font-extrabold border-b-2'>Nutrition Facts</h2>
      <p> {number} serving(s) per container</p>
      <div className='flex justify-between font-extrabold border-b-[14px] border-black mb-2'>
        <h3>Serving Size</h3>
        <h3>{size} {unit}</h3>
      </div>
      <p className=' font-bold'>Amount per serving</p>
      <div className='flex justify-between font-bold text-4xl border-b-8 border-black'>
        <p>Calories</p>
        <p>90</p>
      </div>
      <div className='flex justify-between py-2'>
        <p></p>
        <p className='font-extrabold '>% Daily Value *</p>
      </div>
      <div className = 'flex justify-between  border-t-2 py-1'>
        <p> <span className='font-bold'>Total Fat</span>  0g</p>
        <p className='font-bold'> 10% </p>
      </div>
      <div className = 'flex justify-between  border-t-2 py-1'>
        <p className='ml-8'> Saturated Fat 5g</p>
        <p className='font-bold'> 1% </p>
      </div>
      <div className = 'flex justify-between  border-t-2 py-1'>
        <p className='ml-8'> Trans Fat 2g</p>
        <p className='font-bold'> 4% </p>
      </div>
      <div className = 'flex justify-between  border-t-2 py-1'>
        <p> <span className='font-bold'>Cholesterol</span>  0mg</p>
        <p className='font-bold'> 7% </p>
      </div>
      <div className = 'flex justify-between  border-t-2 py-1'>
        <p> <span className='font-bold'>Sodium</span>  15mg</p>
        <p className='font-bold'> 9% </p>
      </div>
      <div className = 'flex justify-between  border-t-2 py-1'>
        <p> <span className='font-bold'>Total Carbohydrate</span>  50g</p>
        <p className='font-bold'> 40% </p>
      </div>
      <div className = 'flex justify-between  border-t-2 py-1'>
        <p className='ml-8'> Dietary Fiber 2g</p>
        <p className='font-bold'> 12% </p>
      </div>
      <div className = 'flex justify-between  border-t-2 py-1'>
        <p className='ml-8'> Total Sugars 20g</p>
        <p className='font-bold'> 8% </p>
      </div>
      <div className = 'flex justify-between  border-t-2 py-1'>
        <p className='ml-12'> Includes 0g added sugar</p>
        <p className='font-bold'> 4% </p>
      </div>
      <div className = 'flex justify-between border-t-2 py-1 border-b-[14px] border-b-black'>
        <p> <span className='font-bold'>Protein</span>  50g</p>
        <p className='font-bold'> 40% </p>
      </div>
      <div className = 'flex justify-between border-b-2 py-1'>
        <p> Vitamin D 0mcg</p>
        <p className='font-bold'> 0% </p>
      </div>
      <div className = 'flex justify-between border-b-2 py-1'>
        <p> Calcium 0mg</p>
        <p className='font-bold'> 0% </p>
      </div>
      <div className = 'flex justify-between border-b-2 py-1'>
        <p> Iron 0mg</p>
        <p className='font-bold'> 0% </p>
      </div>
      <div className = 'flex justify-between border-b-2 py-1'>
        <p> Potassium 0mg</p>
        <p className='font-bold'> 0% </p>
      </div>
    </div>
  )
}

export default NutritionLabel