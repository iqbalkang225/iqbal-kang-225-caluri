import React from 'react'
import { Outlet } from 'react-router'
import DashboardNav from '../components/DashboardNav'

const Home = () => {
  return (
    <div className = 'flex flex-col h-[calc(100vh-80px)] w-[90%] mx-auto justify-between'>
      <Outlet />
      <DashboardNav />
    </div>
  )
}

export default Home