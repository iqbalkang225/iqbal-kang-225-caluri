import React from 'react';
import { useSelector } from 'react-redux';
import PieChart from '../components/PieChart';

const requiredMacros = [40, 30, 30];

const Macros = () => {
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

  const mainNutrients = [filterNutrients('Protein'), filterNutrients('Carbohydrates'), filterNutrients('Fat')];

  const macroPercentage = mainNutrients.map((nutrient) => {
    const nutrientTotal = mainNutrients.reduce(
      (total, nutrient) => nutrient[0]?.amount * nutrient[0]?.numOfServings + total,
      0
    );

    return Math.floor(((nutrient[0]?.amount * nutrient[0]?.numOfServings) / nutrientTotal) * 100);
  });

  const data = {
    labels: ['Carbohydrates', 'Fat', 'Protein'],
    datasets: [
      {
        data: macroPercentage.map((macro) => macro),
        backgroundColor: ['#ebb305', '#f97315', '#22c55d'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='bg-white h-[calc(100vh-190px)] 2xl:h-[calc(100vh-230px)] overflow-y-scroll rounded-md p-4 text-black divide-y-2'>
      {/* chart */}
      <div className='h-44 w-44 mx-auto mb-8'>
        <PieChart data={data} />
      </div>

      {/* body */}
      <div className='space-y-2'>
        <div className='grid grid-cols-5'>
          <p className='col-span-3'></p>
          <p>Total</p>
          <p>Goal</p>
        </div>

        {mainNutrients.map((nutrient, index) => {
          let color;
          if (index === 0) color = `bg-[#ebb305]`;
          if (index === 1) color = `bg-[#f97315]`;
          if (index === 2) color = `bg-[#22c55d]`;
          return (
            <div className='grid grid-cols-5'>
              {/* carbs row */}
              <div className='flex col-span-3 gap-2'>
                <div className={`h-4 w-4 ${color}`}></div>
                <p>
                  {nutrient[0]?.name || 'nutrient'} ({nutrient[0]?.amount * nutrient[0]?.numOfServings || 0}g)
                </p>
              </div>
              <p>{macroPercentage[index] || 0}%</p>
              <p>{requiredMacros[index]}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Macros;
