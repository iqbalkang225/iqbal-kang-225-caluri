import { compose } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux';

const Nutrients = () => {
  const { recommendedNutrientsIntake } = useSelector((store) => store.userInfoSlice);
  const { storedMeals } = useSelector((store) => store.storedMealsSlice);
  const nutrientsList = storedMeals.map((meal) => [meal.nutrition.nutrients, +meal.numOfServings]);

  const filterNutrients = (nutrientName) => {
    return nutrientsList.map((nutrients) => {
      const filteredNutrients = nutrients[0].find((nutrient) => nutrient.name === nutrientName);
      const numOfServings = nutrients[1];
      return { ...filteredNutrients, numOfServings };
    });
  };

  const mainNutrients = [
    filterNutrients('Protein'),
    filterNutrients('Carbohydrates'),
    filterNutrients('Fiber'),
    filterNutrients('Sugar'),
    filterNutrients('Fat'),
    filterNutrients('Saturated Fat'),
    filterNutrients('Trans Fat'),
    filterNutrients('Cholesterol'),
    filterNutrients('Calcium'),
    filterNutrients('Sodium'),
    filterNutrients('Magnesium'),
    filterNutrients('Potassium'),
  ];

  const nutrientsArray = mainNutrients.map((nutrient) => {
    const nutrientsName = nutrient[0]?.name;
    const nutrientsTotal = nutrient.reduce((total, item) => total + (item.amount || 0) * item.numOfServings, 0);
    return { name: nutrientsName, total: nutrientsTotal };
  });

  const recommendedNutrientsIntakeArray = Object.entries(recommendedNutrientsIntake);

  const nutrientPercentage = (nutrientAmount, total) => (nutrientAmount / total) * 100;

  return (
    <div className='bg-white h-[calc(100vh-190px)] 2xl:h-[calc(100vh-230px)] overflow-y-scroll rounded-md p-4 text-black divide-y-2'>
      {/* header */}
      <div className='grid grid-cols-4 justify-items-center mb-2'>
        <p></p>
        <p>Total</p>
        <p>Goal</p>
        <p>Left</p>
      </div>

      {nutrientsArray.map((nutrient, index) => {
        const width = nutrientPercentage(nutrient?.total, recommendedNutrientsIntakeArray[index][1]);
        return (
          <div className='py-4' key={index}>
            <div className='grid grid-cols-4 justify-items-center mb-2'>
              <p className='justify-self-start'>
                {' '}
                {nutrient.name ||
                  recommendedNutrientsIntakeArray[index][0].slice(0, 1).toUpperCase() +
                    recommendedNutrientsIntakeArray[index][0].slice(1)}{' '}
              </p>
              <p> {nutrient?.total} </p>
              <p> {recommendedNutrientsIntakeArray[index][1]} </p>
              <p>0</p>
            </div>
            {/* nutrient fill */}
            <div className='w-full bg-gray-500 h-1 overflow-x-hidden'>
              <div style={{ width: `${width}%` }} className={` bg-red-500 h-1`}></div>
            </div>
          </div>
        );
      })}

      {/* nutrient body */}

      {/* <div className='py-4'>
        <div className="grid grid-cols-4 justify-items-center mb-2">
          <p className='justify-self-start font-bold'>Protein</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </div>
        <div className='w-full bg-gray-500 h-1'>
          <div className='w-[50%] bg-red-500 h-1'></div>
        </div>
      </div> */}
    </div>
  );
};

export default Nutrients;
