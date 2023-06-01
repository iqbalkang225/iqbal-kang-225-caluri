import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addMealTypeCalories,
  deleteMeal,
  mealToEdit,
  setMealType,
  updateCaloriesEaten,
} from '../store/storedMealsSlice';
import { formatTitle } from '../utilities/utilFunctions';
import { AiFillDelete } from 'react-icons/ai';

const MealType = ({ type }) => {
  const dispatch = useDispatch();
  const { storedMeals } = useSelector((store) => store.storedMealsSlice);

  const filteredMealsList = storedMeals.filter((meal) => meal.mealType === type);
  const mealTypeCaloriesTotal = filteredMealsList.reduce(
    (total, meal) => total + meal.nutrition.calories * meal.numOfServings,
    0
  );

  useEffect(() => {
    dispatch(addMealTypeCalories({ [type]: mealTypeCaloriesTotal }));
    dispatch(updateCaloriesEaten());
  }, [storedMeals]);

  const deleteMealHandler = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteMeal(id));
  };

  const editMealHandler = (id) => dispatch(mealToEdit(id));

  const onClickHandler = (type) => dispatch(setMealType(type));

  return (
    <div className='divide-y-2 bg-white p-4 rounded-md'>
      <div className='flex justify-between pb-2 font-bold'>
        <h2> {formatTitle(type)} </h2>
        <h2> {mealTypeCaloriesTotal} </h2>
      </div>

      {filteredMealsList.map((meal) => {
        return (
          <Link
            key={meal.id}
            onClick={editMealHandler.bind(null, meal.id)}
            to='/edit'
            className='w-full flex justify-between items-center py-2 cursor-pointer text-left text-xs 2xl:text-lg 3xl:text-2xl group'
          >
            <div className='flex items-center gap-2'>
              <img src={meal.mealImage} className='h-11 w-11 rounded-full group-hover:scale-110 duration-200' />
              <div className='group-hover:translate-x-1 duration-200'>
                <h3>{meal.title.slice(0, 30)}...</h3>
                <p className='text-xs 2xl:text-lg 3xl:text-2xl text-gray-500'>
                  <span className='font-bold'>{meal.numOfServings}</span> x {meal.servings.size}
                  {meal.servings.unit}
                  <AiFillDelete
                    onClick={(e) => deleteMealHandler(e, meal.id)}
                    className='inline-block ml-1 duration-200 hover:text-red-500'
                  />
                </p>
              </div>
            </div>
            <p>{meal.nutrition.calories * meal.numOfServings}</p>
          </Link>
        );
      })}

      <Link
        to='/search'
        onClick={onClickHandler.bind(null, type)}
        className='block pt-2 text-red-500 hover:text-red-300 duration-200'
      >
        Add Food
      </Link>
    </div>
  );
};

export default MealType;
