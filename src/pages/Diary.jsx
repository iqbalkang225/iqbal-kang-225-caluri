import React from 'react';
import { useSelector } from 'react-redux';
import MealType from '../components/MealType';

const Diary = () => {
  const { caloriesRequired } = useSelector((store) => store.userInfoSlice);
  const { totalCalories } = useSelector((store) => store.storedMealsSlice.caloriesEaten);

  const outerContainerClasses = 'text-black text-sm 2xl:text-lg 3xl:text-2xl overflow-y-scroll';
  const caloriesUpperTextClasses = 'text-sm 2xl:text-lg 3xl:text-2xl';
  const caloriesBottomTextClasses = 'text-xs 2xl:text-lg 3xl:text-2xl text-gray-500';
  const seperatorsClasses = 'flex flex-col items-center';

  return (
    <div className={outerContainerClasses}>
      {/* header card */}
      <div className='bg-white p-4 mb-4 shadow-md shadow-white/50 rounded-md hover:shadow-sm duration-200'>
        <h2 className={caloriesUpperTextClasses + ' mb-2'}> Calories Remaining </h2>
        <div className='flex justify-between items-center'>
          {/* 1st item */}
          <div className={seperatorsClasses}>
            <p className={caloriesUpperTextClasses}> {caloriesRequired} </p>
            <p className={caloriesBottomTextClasses}>Goal</p>
          </div>

          {/* 2nd item */}
          <div className={seperatorsClasses}>-</div>

          {/* 3rd item */}
          <div className={seperatorsClasses}>
            <p className={caloriesUpperTextClasses}> {totalCalories} </p>
            <p className={caloriesBottomTextClasses}>Food</p>
          </div>

          {/* 4th item */}
          <div className={seperatorsClasses}>+</div>

          {/* 5th item */}
          <div className={seperatorsClasses}>
            <p className={caloriesUpperTextClasses}>0</p>
            <p className={caloriesBottomTextClasses}>Exercise</p>
          </div>

          {/* 6th item */}
          <div className={seperatorsClasses}>=</div>

          {/* 7th item */}
          <div className={seperatorsClasses}>
            <p className={caloriesUpperTextClasses + ' font-bold'}> {caloriesRequired - totalCalories} </p>
            <p className={caloriesBottomTextClasses}>Remaining</p>
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        <MealType type='breakfast' />
        <MealType type='snack-1' />
        <MealType type='lunch' />
        <MealType type='snack-2' />
        <MealType type='dinner' />
        <MealType type='snack-3' />
      </div>
    </div>
  );
};

export default Diary;
