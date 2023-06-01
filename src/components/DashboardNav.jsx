import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { GiNotebook } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import { FaNutritionix } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const dashboardItems = [
  { name: 'dashboard', link: '/', icon: <MdDashboard /> },
  { name: 'diary', link: '/diary', icon: <GiNotebook /> },
  { name: 'nutrition', link: '/nutrition', icon: <FaNutritionix /> },
  { name: 'profile', link: '/profile', icon: <FaUserAlt /> },
];

const DashboardNav = () => {
  const dashboardBoxClasses = `bg-red-500 p-2 mb-2 rounded-lg shadow-lg shadow-red-500/30 justify-center flex gap-6`;
  const linkTextClasses = `text-xs 2xl:text-lg 3xl:text-2xl capitalize`;
  const iconsClasses = 'group-hover:-translate-y-1.5 duration-200 text-xl 2xl:text-3xl';

  const renderDashboardItems = dashboardItems.map((item) => {
    return (
      <NavLink
        key={item.name}
        to={item.link}
        end={true}
        className={({ isActive }) => (isActive ? `link active` : 'link')}
      >
        <span className={iconsClasses}>{item.icon}</span>
        <p className={linkTextClasses}>{item.name}</p>
      </NavLink>
    );
  });

  return <div className={dashboardBoxClasses}>{renderDashboardItems}</div>;
};

export default DashboardNav;
