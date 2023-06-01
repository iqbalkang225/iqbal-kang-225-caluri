import React from 'react';
import { motion } from 'framer-motion';
import PieChart from '../components/PieChart';
import { useSelector } from 'react-redux';
import { formatTitle } from '../utilities/utilFunctions';

const Calories = () => {
  const { caloriesEaten } = useSelector((store) => store.storedMealsSlice);
  const { caloriesRequired } = useSelector((store) => store.userInfoSlice);
  const { totalCalories } = caloriesEaten;
  const mealTypes = Object.entries(caloriesEaten).slice(1);
  console.log(mealTypes);

  const backgroundColors = ['#EBB305', '#F77316', '#22C55D', '#044389', '#D30C7B', '#662E9B'];

  const data = {
    labels: ['Breakfast', 'Snack 1', 'Lunch', 'Snack 2', 'Dinner', 'Snack 3'],
    datasets: [
      {
        data: mealTypes.map((meal) => ((meal[1] / totalCalories) * 100).toFixed()),
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className='bg-white rounded-md p-4 text-black'
    >
      {/* chart */}
      <div className='h-44 w-44 mx-auto mb-8'>
        <PieChart data={data} />
      </div>

      {/* calories breakdown */}
      <div className='grid grid-cols-2 gap-4'>
        {mealTypes.map((meal, index) => {
          let color = meal[0];

          const percentage = (meal[1] / totalCalories) * 100 || 0;
          return (
            <div className='flex gap-2' key={index}>
              <div className={`h-4 w-4 ${color}`}></div>
              <div>
                <h2>{formatTitle(meal[0])}</h2>
                <p className='text-gray-500'>
                  {percentage.toFixed()}% ({meal[1]} cal)
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* calorie rows */}
      <div className='flex justify-between py-3 mt-6 border-t-2 text-sm 2xl:text-lg 3xl:text-2xl'>
        <p>Total Calories</p>
        <p> {totalCalories} </p>
      </div>

      {/* calorie rows */}
      <div className='flex justify-between py-3 border-y-2 text-sm 2xl:text-lg 3xl:text-2xl'>
        <p>Goal</p>
        <p> {caloriesRequired} </p>
      </div>
    </motion.div>
  );
};

export default Calories;
