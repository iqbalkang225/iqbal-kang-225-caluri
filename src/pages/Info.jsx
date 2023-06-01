import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { calcCalories, calcMacros, updateState } from '../store/userInfoSlice';

const Info = () => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('');

  const nextSlide = () => {
    if (index === 0) setName(nameRef.current.value);
    if (index === 1) setAge(ageRef.current.value);
    if (index === 2) {
      if (maleRef.current.checked) setGender(maleRef.current.value);
      if (femaleRef.current.checked) setGender(femaleRef.current.value);
    }
    if (index === 3) {
      setFeet(feetRef.current.value);
      setInches(inchesRef.current.value);
    }
    if (index === 4) setWeight(weightRef.current.value);
    if (index === 5) setActivity(activityRef.current.value);

    setIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () =>
    setIndex((prevIndex) => {
      if (prevIndex === 0) prevIndex = 1;
      return prevIndex - 1;
    });

  let className;
  if (index === 0) className = `-translate-x-[0%]`;
  if (index === 1) className = `-translate-x-[100%]`;
  if (index === 2) className = `-translate-x-[200%]`;
  if (index === 3) className = `-translate-x-[300%]`;
  if (index === 4) className = `-translate-x-[400%]`;
  if (index === 5) className = `-translate-x-[500%]`;

  const nameRef = useRef();
  const ageRef = useRef();
  const maleRef = useRef();
  const femaleRef = useRef();
  const weightRef = useRef();
  const activityRef = useRef();
  const feetRef = useRef();
  const inchesRef = useRef();

  const handleSubmit = (e) => {
    dispatch(updateState({ name, age, gender, feet, inches, weight, activity }));
    dispatch(calcCalories());
    dispatch(calcMacros());
  };

  return (
    <div className='h-[calc(100vh-4rem)]  w-[90%] mx-auto flex items-center'>
      <form className='relative w-full overflow-hidden font-poppins '>
        {index === 6 ? (
          <motion.p initial={{ y: -200 }} animate={{ y: 0 }} className='text-2xl 2xl:text-3xl 3xl:text-4xl font-light'>
            You are 1 step closer in acheving your goals!
          </motion.p>
        ) : (
          <div className={`flex w-full ${className}`}>
            <motion.div
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              key={Math.random()}
              className={`flex flex-col w-full flex-none`}
            >
              <label htmlFor='name' className='text-3xl font-thin'>
                Name
              </label>
              <input
                className='rounded-md p-2 outline-none bg-transparent border mt-2'
                type='text'
                name='name'
                ref={nameRef}
              />
            </motion.div>

            <motion.div
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              key={Math.random()}
              className={`flex flex-col w-full flex-none`}
            >
              <label htmlFor='age' className='text-3xl font-thin'>
                Age
              </label>
              <input
                className='rounded-md p-2 outline-none bg-transparent border mt-2'
                type='number'
                name='age'
                ref={ageRef}
              />
            </motion.div>

            <motion.div
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              key={Math.random()}
              className={`w-full flex-none flex flex-col`}
            >
              <div className='flex flex-col items-start space-y-6'>
                <div className='space-x-2'>
                  <input
                    className='appearance-none border h-5 w-5 2xl:h-7 2xl:w-7 rounded-full cursor-pointer checked:bg-white'
                    type='radio'
                    name='gender'
                    value='male'
                    ref={maleRef}
                  />
                  <label htmlFor='gender' className='text-2xl 2xl:text-3xl 3xl:text-4xl font-thin'>
                    Male
                  </label>
                </div>

                <div className='space-x-2'>
                  <input
                    className='appearance-none border h-5 w-5 2xl:h-7 2xl:w-7 rounded-full cursor-pointer checked:bg-white'
                    type='radio'
                    name='gender'
                    value='female'
                    ref={femaleRef}
                  />
                  <label htmlFor='gender' className='text-2xl 2xl:text-3xl 3xl:text-4xl font-thin'>
                    Female
                  </label>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              key={Math.random()}
              className={`w-full flex-none flex flex-col`}
            >
              <label htmlFor='height' className='text-3xl font-thin'>
                Height
              </label>
              <div className='flex gap-4'>
                <input
                  className='rounded-md p-2 outline-none bg-transparent border mt-2 w-24'
                  type='number'
                  name='feet'
                  placeholder='feet'
                  ref={feetRef}
                />
                <input
                  className='rounded-md p-2 outline-none bg-transparent border mt-2 w-24'
                  type='number'
                  name='inches'
                  placeholder='inches'
                  ref={inchesRef}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              key={Math.random()}
              className={`w-full flex-none flex flex-col`}
            >
              <label htmlFor='weight' className='text-3xl font-thin'>
                Weight
              </label>
              <input
                className='rounded-md p-2 outline-none bg-transparent border mt-2'
                type='number'
                name='weight'
                placeholder='lbs'
                ref={weightRef}
              />
            </motion.div>

            <motion.div
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              key={Math.random()}
              className={`w-full flex-none flex flex-col space-y-2`}
            >
              <label htmlFor='activity' className='text-3xl font-thin'>
                Activity
              </label>
              <select name='activity' className='p-2 outline-none text-black rounded-md' ref={activityRef}>
                <option value=''> --Activity Level --</option>
                <option value='1.2'> Sedentary: little or no exercise </option>
                <option value='1.375'> Light: exercise 1-3 times/week </option>
                <option value='1.55'> Moderate: exercise 4-5 times/week </option>
                <option value='1.725'> Active: intense exercise 6-7 times/week </option>
                <option value='1.9'> Very active: very intense exercise daily </option>
              </select>
            </motion.div>
          </div>
        )}

        <div className='flex gap-4 mt-12'>
          {index === 6 ? (
            <Link
              to='/'
              onClick={handleSubmit}
              type='button'
              className='bg-white rounded-lg text-center py-2 px-5 w-full text-black hover:bg-red-500 hover:text-white'
            >
              <motion.button initial={{ y: 100 }} animate={{ y: 0 }}>
                Calculate
              </motion.button>
            </Link>
          ) : (
            <>
              <button
                onClick={prevSlide}
                type='button'
                className='bg-white rounded-lg py-2 px-5 w-full text-black hover:bg-red-500 hover:text-white'
              >
                Previous
              </button>

              <button
                onClick={nextSlide}
                type='button'
                className='bg-white rounded-lg py-2 px-5 w-full text-black hover:bg-red-500 hover:text-white'
              >
                Next
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Info;
