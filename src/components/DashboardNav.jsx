import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { GiNotebook } from 'react-icons/gi'
import { FaUserAlt } from 'react-icons/fa'
import { FaNutritionix } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const DashboardNav = () => {
  return (
    <div
      className={`  bg-red-500 p-2 mb-2 text-white rounded-lg shadow-lg shadow-red-500/30 justify-center flex gap-6 `}
    >
      <NavLink to='/' end={true} className={({ isActive }) => (isActive ? `link active` : 'link')}>
        <MdDashboard size={24} className='mb-1 group:-translate-y-1.5 duration-200' />
        <p className='text-xs'>Dashboard</p>
      </NavLink>

      <NavLink to='diary' className={({ isActive }) => (isActive ? `link active` : 'link')}>
        <GiNotebook size={24} className='mb-1 group-checked::-translate-y-1.5 duration-200' />
        <p className='text-xs'>Diary</p>
      </NavLink>

      <NavLink to='nutrition' className={({ isActive }) => (isActive ? `link active` : 'link')}>
        <FaNutritionix size={24} className='mb-1 group-hover:-translate-y-1.5 duration-200' />
        <p className='text-xs'>Nutrition</p>
      </NavLink>

      <NavLink to='profile' className={({ isActive }) => (isActive ? `link active` : 'link')}>
        <FaUserAlt size={24} className='mb-1 group-hover:-translate-y-1.5 duration-200' />
        <p className='text-xs'>Profile</p>
      </NavLink>
    </div>
  )
}

export default DashboardNav
