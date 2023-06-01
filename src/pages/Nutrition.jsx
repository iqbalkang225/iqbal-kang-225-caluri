import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nutrition = () => {
  const loadVariants = {
    hidden: {
      y: -100,
    },
    visible: {
      y: 0,
    },
    rotation: {
      scale: 1.2,
      transition: {
        rotate: { repeat: Infinity, repeatType: 'reverse', duration: 0.225 },
      },
    },
  };

  return (
    <div className='text-xs 2xl:text-lg 3xl:text-2xl'>
      {/* page nav */}
      <div className='flex justify-evenly mb-4'>
        {/* link 1 */}
        <motion.div
          variants={loadVariants}
          initial='hidden'
          whileHover='rotation'
          transition={{ delay: 0.1 }}
          animate='visible'
        >
          <NavLink to='' end={true} className={({ isActive }) => (isActive ? 'text-red-500' : '')}>
            CALORIES
          </NavLink>
        </motion.div>
        {/* link 2 */}
        <motion.div
          variants={loadVariants}
          initial='hidden'
          whileHover='rotation'
          transition={{ delay: 0.2 }}
          animate='visible'
        >
          <NavLink to='nutrients' className={({ isActive }) => (isActive ? 'text-red-500' : '')}>
            NUTRIENTS
          </NavLink>
        </motion.div>
        {/* link 3 */}
        <motion.div
          variants={loadVariants}
          initial='hidden'
          whileHover='rotation'
          transition={{ delay: 0.3 }}
          animate='visible'
        >
          <NavLink to='macros' className={({ isActive }) => (isActive ? 'text-red-500' : '')}>
            MACROS
          </NavLink>
        </motion.div>
      </div>

      <Outlet />
    </div>
  );
};

export default Nutrition;
