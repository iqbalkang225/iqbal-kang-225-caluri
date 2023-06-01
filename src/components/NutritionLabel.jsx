import React from 'react';
import { useSelector } from 'react-redux';

const NutritionLabel = ({ numOfServings, slice, type }) => {
  const {
    servings: { number, size, unit },
    nutrition,
  } = useSelector((store) => store[slice][type]);

  const { nutrients, calories } = nutrition;

  if (!nutrients) return;
  if (!calories) return;

  return (
    <div className='text-xs 2xl:text-lg 3xl:text-2xl p-4'>
      <h2 className='text-4xl font-extrabold border-b-2'>Nutrition Facts</h2>
      <p> {number} serving(s) per container</p>
      <div className='flex justify-between font-extrabold border-b-[14px] border-black mb-2'>
        <h3>Serving Size</h3>
        <h3>
          {size} {unit}
        </h3>
      </div>
      <p className=' font-bold'>Amount per serving</p>
      <div className='flex justify-between font-bold text-4xl border-b-8 border-black'>
        <p>Calories</p>
        <p> {calories * numOfServings} </p>
      </div>
      <div className='flex justify-between py-2'>
        <p></p>
        <p className='font-extrabold '>% Daily Value *</p>
      </div>

      {nutrients.map((nutrient, index) => {
        if (nutrient.name === 'Calories') return;
        const { name, amount, unit, percentOfDailyNeeds } = nutrient;
        return (
          <div key={index} className='flex justify-between  border-t-2 py-1'>
            <p>
              <span
                className={`font-bold ${nutrient.name === 'Saturated Fat' && 'ml-6'} ${
                  nutrient.name === 'Trans Fat' && 'ml-6'
                }`}
              >
                {name}
              </span>
              {amount * numOfServings}
              {unit}
            </p>
            <p className='font-bold'> {percentOfDailyNeeds}% </p>
          </div>
        );
      })}
    </div>
  );
};

export default NutritionLabel;

// <div className = 'flex justify-between  border-t-2 py-1'>
// <p> <span className='font-bold'>Total Fat</span>  {nutrients[4].amount}g</p>
// <p className='font-bold'> {nutrients[4].percentOfDailyNeeds}% </p>
// </div>
// <div className = 'flex justify-between  border-t-2 py-1'>
// <p className='ml-8'> Saturated Fat {nutrients[5].amount}g</p>
// <p className='font-bold'> {nutrients[5].percentOfDailyNeeds}% </p>
// </div>
// <div className = 'flex justify-between  border-t-2 py-1'>
// <p className='ml-8'> Trans Fat {nutrients[5].amount}g</p>
// <p className='font-bold'> {nutrients[6].percentOfDailyNeeds}% </p>
// </div>
// <div className = 'flex justify-between  border-t-2 py-1'>
// <p> <span className='font-bold'>Cholesterol</span>  {nutrients[2].amount}mg</p>
// <p className='font-bold'> {nutrients[2].percentOfDailyNeeds}% </p>
// </div>
// <div className = 'flex justify-between  border-t-2 py-1'>
// <p> <span className='font-bold'>Sodium</span>  {nutrients[10].amount}mg</p>
// <p className='font-bold'> {nutrients[10].percentOfDailyNeeds}% </p>
// </div>
// <div className = 'flex justify-between  border-t-2 py-1'>
// <p> <span className='font-bold'>Total Carbohydrate</span>  {nutrients[1].amount}g</p>
// <p className='font-bold'> {nutrients[1].percentOfDailyNeeds}% </p>
// </div>
// <div className = 'flex justify-between  border-t-2 py-1'>
// <p className='ml-8'> Dietary Fiber {nutrients[7].amount}g</p>
// <p className='font-bold'> {nutrients[7].percentOfDailyNeeds}% </p>
// </div>
// <div className = 'flex justify-between  border-t-2 py-1'>
// <p className='ml-8'> Total Sugars {nutrients[11].amount}g</p>
// <p className='font-bold'> {nutrients[11].percentOfDailyNeeds}% </p>
// </div>
// <div className = 'flex justify-between border-t-2 py-1 border-b-[14px] border-b-black'>
// <p> <span className='font-bold'>Protein</span>  {nutrients[9].amount}g</p>
// <p className='font-bold'> {nutrients[9].percentOfDailyNeeds}% </p>
// </div>
// <div className = 'flex justify-between border-b-2 py-1'>
// <p> Vitamin A {nutrients[12].amount}IU</p>
// <p className='font-bold'> {nutrients[12].percentOfDailyNeeds}% </p>
// </div>
// <div className = 'flex justify-between border-b-2 py-1'>
// <p> Vitamin C {nutrients[13].amount}mg</p>
// <p className='font-bold'> {nutrients[13].percentOfDailyNeeds}% </p>
// </div>
// <div className = 'flex justify-between border-b-2 py-1'>
// <p> Calcium {nutrients[0].amount}mg</p>
// <p className='font-bold'> {nutrients[0].percentOfDailyNeeds}% </p>
// </div>
// <div className = 'flex justify-between border-b-2 py-1'>
// <p> Iron {nutrients[8].amount}mg</p>
// <p className='font-bold'> {nutrients[8].percentOfDailyNeeds}% </p>
// </div>
