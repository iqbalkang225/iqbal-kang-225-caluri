import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = ( props ) => {

  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    
  }

  return (
      <Pie 
        data = {props.data}
        options = {options}
      />
  )
}

export default PieChart