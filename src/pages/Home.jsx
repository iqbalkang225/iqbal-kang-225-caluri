import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';
import DashboardNav from '../components/DashboardNav';

const Home = () => {
  const navigate = useNavigate();
  const { caloriesRequired } = useSelector((store) => store.userInfoSlice);

  useEffect(() => {
    if (!caloriesRequired) navigate('/info');
  }, []);

  return (
    <div className='flex flex-col h-[calc(100vh-80px)] w-[90%] mx-auto justify-between font-poppins'>
      <Outlet />
      <DashboardNav />
    </div>
  );
};

export default Home;
