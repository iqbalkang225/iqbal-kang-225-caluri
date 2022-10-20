import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Carbs', 'Fat', 'Protein'],
  datasets: [{
    data: ['34', '40', '26'],
    backgroundColor: ['#e9b306', '#f97315', '#22c55d'],
    borderWidth: '0',
    cutout: '85%'
  }]
}

const options = {
  plugins: {
    legend: {
      display: false
    }
  }
}


const plugins = [{
  id : 'doughnut',
  beforeDraw: function(chart) {
   let width = chart.width,
       height = chart.height,
       ctx = chart.ctx;
       ctx.restore();
       let fontSize = (height / 160).toFixed(2);
       ctx.font = fontSize + "em sans-serif";
       ctx.textBaseline = "top";
       let text = "Foo-bar",
       textX = Math.round((width - ctx.measureText(text).width) / 2),
       textY = height / 2;
       ctx.fillText(text, textX, textY);
       ctx.save();
  } 
 }]

const DoughnutChart = () => {

  return (
    <div className='w-24 h-24'>
      <Doughnut 
        data = {data}
        type = "doughnut" 
        options = {options}
        plugins = {plugins} 
      />
    </div>
  )
}

export default DoughnutChart