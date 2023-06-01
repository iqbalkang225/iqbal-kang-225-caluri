import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Loader from '../components/Loader';
import { BiArrowBack } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import NutritionLabel from '../components/NutritionLabel';
import { useDispatch } from 'react-redux';
import { fetchMeal } from '../store/fetchedMealsSlice';
import { useSelector } from 'react-redux';
import DoughnutChart from '../components/DoughnutChart';
import { addMeal, updateCaloriesEaten } from '../store/storedMealsSlice';

const AddMeal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeal(id));
  }, []);

  const navigate = useNavigate();

  const { mealType } = useSelector((store) => store.storedMealsSlice);

  const [mealInfo, setMealInfo] = useState({ 'meal-type': mealType, numOfServings: 1 });

  const macroTotal = (macro) => (Number(macro?.slice(0, -1)) || 0) * mealInfo.numOfServings;

  // const macroPercentageTotal = macroPercentage => macroPercentage * mealInfo.numOfServings

  const { fetchedMeals, fetchedMeal } = useSelector((store) => store.fetchedMealsSlice);
  const { nutrition, title } = fetchedMeal;
  if (!nutrition) return;

  const { fat, protein, carbs } = nutrition;
  const { percentFat, percentProtein, percentCarbs } = nutrition.caloricBreakdown;

  const onChangeHandler = (e) =>
    setMealInfo((prevState) => {
      const { name, value } = e.target;
      return { ...prevState, [name]: value };
    });

  const addMealHandler = () => {
    if (!mealInfo['meal-type']) return;
    const { ['meal-type']: mealType, numOfServings } = mealInfo;
    const mealImage = fetchedMeals.find((meal) => meal.id === +id).image;
    dispatch(addMeal({ id, ...fetchedMeal, mealImage, mealType, numOfServings }));
    dispatch(updateCaloriesEaten());
    navigate('/diary');
  };

  return (
    <div className='space-y-3 h-full overflow-y-scroll'>
      {/* add meal card */}
      <div className='bg-white rounded-md  text-black overflow-hidden'>
        {/* header */}
        <div className='flex items-center justify-between bg-red-50 p-2'>
          <div className='flex items-center gap-6'>
            <Link to='/search' className='hover:text-red-500 duration-100 hover:scale-110'>
              <BiArrowBack size={24} />
            </Link>
            <h3>Add Food</h3>
          </div>
          <button className='hover:text-red-500 duration-100 hover:scale-110' onClick={addMealHandler}>
            <BsCheck size={32} />
          </button>
        </div>
        {/* card body */}
        <div className='divide-y-2 p-2'>
          <h2 className='font-bold text-lg py-3'> {title.slice(0, 20)} </h2>
          <form className='divide-y-2'>
            {/* form group */}
            <div className='flex justify-between py-3'>
              <label htmlFor='meal-type'>Meal</label>
              <select
                onChange={onChangeHandler}
                value={mealInfo['meal-type']}
                name='meal-type'
                className='text-red-500 outline-none cursor-pointer'
              >
                <option value=''> Meal type </option>
                <option value='breakfast'> Breakfast </option>
                <option value='snack-1'> Snack 1 </option>
                <option value='lunch'> Lunch </option>
                <option value='snack-2'> Snack 2 </option>
                <option value='dinner'> Dinner </option>
                <option value='snack-3'> Snack 3 </option>
              </select>
            </div>
            {/* form group */}
            <div className='flex justify-between py-3'>
              <label htmlFor='numOfServings'>Number of Servings</label>
              <input
                onChange={onChangeHandler}
                value={mealInfo.numOfServings}
                type='number'
                name='numOfServings'
                className='w-10 outline-none text-red-500'
              />
            </div>
          </form>
          {/* calories  */}
          <div className='flex justify-between items-center p-4'>
            {/* children */}
            <div className='w-20 h-20'>
              <DoughnutChart {...nutrition} />
            </div>
            {/* children */}
            <div className='text-center'>
              <p className='text-xs 2xl:text-lg 3xl:text-2xl text-yellow-500'>{percentCarbs.toFixed()}%</p>
              <p className='text-sm 2xl:text-lg 3xl:text-2xl'>{macroTotal(carbs)}</p>
              <p className='text-xs 2xl:text-lg 3xl:text-2xl text-gray-400'>Carbs</p>
            </div>
            {/* children */}
            <div className='text-center'>
              <p className='text-xs 2xl:text-lg 3xl:text-2xl text-orange-500'>{percentFat.toFixed()}%</p>
              <p className='text-sm 2xl:text-lg 3xl:text-2xl'>{macroTotal(fat)}</p>
              <p className='text-xs 2xl:text-lg 3xl:text-2xl text-gray-400'>Fat</p>
            </div>
            {/* children */}
            <div className='text-center'>
              <p className='text-xs 2xl:text-lg 3xl:text-2xl text-green-500'>{percentProtein.toFixed()}%</p>
              <p className='text-sm 2xl:text-lg 3xl:text-2xl'>{macroTotal(protein)}</p>
              <p className='text-xs 2xl:text-lg 3xl:text-2xl text-gray-400'>Protein</p>
            </div>
          </div>
          {/* nutrition label */}
          <NutritionLabel numOfServings={mealInfo.numOfServings} type='fetchedMeal' slice='fetchedMealsSlice' />
        </div>
      </div>
    </div>
  );
};

export default AddMeal;
