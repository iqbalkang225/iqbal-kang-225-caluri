import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { fetchMeals } from '../store/fetchedMealsSlice'


const SearchForm = ( {initial, animate } ) => {

  const dispatch = useDispatch()
  const [enteredMeal, setEnteredMeal] = useState('')
  const [selectedMeal, setSelectedMeal] = useState([])
  const onChangeHandler = (e) => setEnteredMeal(e.target.value)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch( fetchMeals(enteredMeal) )
  }
  

  return (
    <form onSubmit = {onSubmitHandler}>
      <motion.input 
        initial = {initial}
        animate = {animate}
        onChange = {onChangeHandler}
        value = {enteredMeal}
        placeholder = 'Search for a food'
        className='rounded-full mb-2 w-4/5 mx-auto block p-2 px-4 outline-none text-black placeholder:text-xs'>
      </motion.input>  
    </form>
  )
}

export default SearchForm

// className='rounded-full mb-2 w-[90%] mx-auto block p-1.5 px-4 outline-none text-black placeholder:text-xs'>