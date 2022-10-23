import React from 'react'
import PieChart from '../components/PieChart'

const data = {
  labels: ['Breakfast', 'Snack 1', 'Lunch', 'Snack 2', 'Dinner', 'Snack 3'],
  datasets: [
    {
      data: [0, 0, 0],
      backgroundColor: ['red', 'green', 'blue'],
      borderWidth: 1,
    },
  ],
};

const Macros = () => {
  return (
    <div className='bg-white h-[calc(100vh-190px)] overflow-y-scroll rounded-md p-4 text-black divide-y-2'>
      {/* chart */}
      <div className="h-44 w-44 mx-auto mb-8">
        <PieChart data = {data} />
      </div>
    
  </div>
  )
}

export default Macros