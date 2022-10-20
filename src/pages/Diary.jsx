import React from 'react'
import { Link } from 'react-router-dom'
import temp from '../assets/temp.jpg'


const Diary = () => {
  return (
    <div className='text-black text-sm'>
      {/* header card */}
      <div className = 'bg-white p-4 mb-4 shadow-md shadow-white/50 rounded-md hover:shadow-sm duration-200'>
        <h2 className="text-sm mb-2"> Calories Remaining </h2>
        <div className = 'flex justify-between items-center'>
          {/* 1st item */}
          <div className = 'flex flex-col items-center'>
            <p className = 'text-sm'>2,950</p>
            <p className = 'text-xs text-gray-500'>Goal</p>
          </div>

          {/* 2nd item */}
          <div className = 'flex flex-col items-center'>
            -
          </div>

          {/* 3rd item */}
          <div className = 'flex flex-col items-center'>
            <p className = 'text-sm'>950</p>
            <p className = 'text-xs text-gray-500'>Food</p>
          </div>

          {/* 4th item */}
          <div className = 'flex flex-col items-center'>
            +
          </div>

          {/* 5th item */}
          <div className = 'flex flex-col items-center'>
            <p className = 'text-sm'>0</p>
            <p className = 'text-xs text-gray-500'>Exercise</p>
          </div>

          {/* 6th item */}
          <div className = 'flex flex-col items-center'>
            =
          </div>

          {/* 7th item */}
          <div className = 'flex flex-col items-center'>
            <p className = 'text-sm font-bold'>2,000</p>
            <p className = 'text-xs text-gray-500'>Remaining</p>
          </div>
        </div>
      </div>

      {/* breakfast card */}
      <div className = 'bg-white p-4 divide-y-2 rounded-md'>
        {/* breakfast header */}
        <div className = 'flex justify-between pb-2 font-bold'>
          <h2>Breakfast</h2>
          <h2>340</h2>
        </div>
        {/* breakfast item 1 */}
        <div className = 'flex justify-between items-center py-2'>
          <div className = 'flex items-center gap-2'>
            <img src = {temp} className = 'h-11 w-11 rounded-full' />
            <div>
              <h3>Museli</h3>
              <p className = 'text-xs text-gray-500'>1.0 cup</p>
            </div>
          </div>
          <p>310</p>
        </div>

        {/* breakfast item 2 */}
        <div className = 'flex justify-between items-center py-2'>
          <div className = 'flex items-center gap-2'>
            <img src = {temp} className = 'h-11 w-11 rounded-full' />
            <div>
              <h3>Museli</h3>
              <p className = 'text-xs text-gray-500'>1.0 cup</p>
            </div>
          </div>
          <p>310</p>
        </div>

        <Link to = '/search' className = 'block pt-2 text-red-500 hover:text-red-300 duration-200'>
          Add Food
        </Link>
      </div>
      {/* end of breakfast card */}
    </div>
  )
}

export default Diary