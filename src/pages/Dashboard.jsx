import React, { useEffect } from 'react';
import { AiFillFlag, AiFillFire } from 'react-icons/ai';
import { ImSpoonKnife } from 'react-icons/im';
import SearchForm from '../components/SearchForm';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RadialChart from '../components/RadialChart';

const Dashboard = () => {
  const { caloriesRequired } = useSelector((store) => store.userInfoSlice);
  const { totalCalories } = useSelector((store) => store.storedMealsSlice.caloriesEaten);

  return (
    <div className='h-full w-full text-black font-poppins flex flex-col justify-between'>
      <div className='bg-white rounded-xl shadow-lg shadow-white/30 p-6'>
        <h2 className='font-bold'>Calories</h2>
        <p className='text-xs 2xl:text-lg 3xl:text-2xl text-gray-500'>Remaining = Goal - Food + Exercise</p>

        <div className='flex mt-4 gap-4'>
          <div className='w-1/2  flex justify-center'>
            <RadialChart />
          </div>

          <div className='w-1/2 flex flex-col gap-4'>
            <div className='flex items-center gap-3'>
              <AiFillFlag size='24' className='text-gray-500' />
              <div>
                <h3 className='text-xs 2xl:text-lg 3xl:text-2xl'>Base Goal</h3>
                <p className='text-xs 2xl:text-lg 3xl:text-2xl font-bold'> {caloriesRequired} </p>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <ImSpoonKnife size='24' className='text-red-500' />
              <div>
                <h3 className='text-xs 2xl:text-lg 3xl:text-2xl'>Food</h3>
                <p className='text-xs 2xl:text-lg 3xl:text-2xl font-bold'> {totalCalories} </p>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <AiFillFire size='24' className='text-orange-500' />
              <div>
                <h3 className='text-xs 2xl:text-lg 3xl:text-2xl'>Exercise</h3>
                <p className='text-xs 2xl:text-lg 3xl:text-2xl font-bold'>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to='/search'>
        <SearchForm />
      </Link>
    </div>
  );
};

export default Dashboard;
