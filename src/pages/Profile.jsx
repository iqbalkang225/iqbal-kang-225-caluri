import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { calcCalories, calcMacros, updateUser } from '../store/userInfoSlice';

const Profile = () => {
  const dispatch = useDispatch();

  const { name, age, weight, feet, inches } = useSelector((store) => store.userInfoSlice);

  const [userInfo, setUserInfo] = useState({ name: name, age: age, weight: weight, feet: feet, inches: inches });

  const onChangeHandler = (e) =>
    setUserInfo((prevInfo) => {
      const { name, value } = e.target;
      return { ...prevInfo, [name]: value };
    });

  const submitHandler = () => {
    dispatch(updateUser(userInfo));
    dispatch(calcCalories());
    dispatch(calcMacros());
  };

  const getInitials = (name) => name?.split(' ').map((character) => character[0]?.toUpperCase());

  return (
    //Profile card
    <div className='bg-red-50 rounded-md  text-black overflow-hidden'>
      {/* header */}
      <div className='flex items-center justify-between p-2'>
        <div className='flex items-center gap-6'>
          <Link to='/search' className='hover:text-red-500 duration-100 hover:scale-110'>
            <BiArrowBack size={24} />
          </Link>
          <h3>Settings</h3>
        </div>
        <Link to='/' className='hover:text-red-500 duration-100 hover:scale-110' onClick={submitHandler}>
          <BsCheck size={32} />
        </Link>
      </div>
      {/* body */}
      <div className='h-20 w-20 mt-8 rounded-full mx-auto bg-red-500 flex items-center justify-center'>
        <h2 className='uppercase text-white font-bold text-2xl'> {getInitials(name)} </h2>
      </div>
      <form className='text-sm 2xl:text-lg 3xl:text-2xl p-4  text-red-800 space-y-4'>
        {/* group 1 */}
        <div className='flex flex-col  p-2 shadow-sm border-b-2 relative'>
          <label htmlFor='name' className='text-red-300'>
            Name
          </label>
          <input
            type='text'
            name='name'
            value={userInfo.name}
            onChange={onChangeHandler}
            className='bg-transparent capitalize outline-none peer'
          />
          <div className='absolute h-[2px] w-full left-0 bottom-0 duration-200 peer-focus:bg-red-500'></div>
        </div>

        {/* group 2 */}
        <div className='flex flex-col  p-2 shadow-sm border-b-2 relative'>
          <label htmlFor='age' className='text-red-300'>
            Age
          </label>
          <input
            type='number'
            name='age'
            value={userInfo.age}
            onChange={onChangeHandler}
            className='bg-transparent outline-none w-24 peer'
          />
          <div className='absolute h-[2px] w-full left-0 bottom-0 duration-200 peer-focus:bg-red-500'></div>
        </div>

        {/* group 3 */}
        <div className='flex flex-col  p-2 shadow-sm border-b-2 relative'>
          <label htmlFor='weight' className='text-red-300'>
            Weight
          </label>
          <input
            type='number'
            name='weight'
            value={userInfo.weight}
            onChange={onChangeHandler}
            className='bg-transparent outline-none w-24 peer'
          />
          <div className='absolute h-[2px] w-full left-0 bottom-0 duration-200 peer-focus:bg-red-500'></div>
        </div>

        {/* group 4 */}
        <div className='flex flex-col  p-2 shadow-sm border-b-2 relative'>
          <label htmlFor='weight' className='text-red-300'>
            Height
          </label>
          <div className='flex gap-4'>
            <input
              className='outline-none bg-transparent  w-10 peer'
              type='number'
              name='feet'
              value={userInfo.feet}
              onChange={onChangeHandler}
              placeholder='feet'
            />
            <input
              className='outline-none bg-transparent  w-10 peer'
              type='number'
              name='inches'
              value={userInfo.inches}
              onChange={onChangeHandler}
              placeholder='inches'
            />
            <div className='absolute h-[2px] w-full left-0 bottom-0 duration-200 peer-focus:bg-red-500'></div>
          </div>
        </div>

        <div className='flex justify-center'>
          <button
            type='button'
            onClick={submitHandler}
            className='bg-red-500 px-6 py-3 rounded-md text-white shadow-lg hover:shadow-sm duration-200 mt-4 hover:bg-red-700 duration-200'
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
