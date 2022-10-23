import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ( props ) => {

  const deleteMacroUnit = (macro) => macro?.slice(0, -1)

  const carbs = deleteMacroUnit(props.carbs)
  const fat = deleteMacroUnit(props.fat)
  const protein = deleteMacroUnit(props.protein)

  const data = {
    labels: ['Carbs', 'Fat', 'Protein'],
    datasets: [{
      data: [carbs, fat, protein],
      backgroundColor: ['#e9b306', '#f97315', '#22c55d'],
      borderWidth: '0',
      cutout: '75%'
    }]
  }
  
  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  }
  
  // const plugins = [{
  //   id : 'doughnut',
  //   beforeDraw: function(chart) {
  //    let width = chart.width,
  //        height = chart.height,
  //        ctx = chart.ctx;
  //        ctx.restore();
  //        ctx.fontSize = '20'
  //        let fontSize = (height).toFixed(2);
  //        ctx.font = fontSize + "em sans-serif";
  //       ctx.fontSize = 70;
  //        ctx.textBaseline = "top";
  //        let text = props.calories,
  //        textX = Math.round((width - ctx.measureText(text).width) / 2),
  //        textY = height / 2;
  //        ctx.fillText(text, textX, textY);
  //        ctx.save();
  //   } 
  //  }]

  return (
      <Doughnut 
        data = {data}
        type = "doughnut" 
        options = {options}
        // plugins = {plugins} 
      />
  )
}

export default DoughnutChart