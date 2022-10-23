import React from 'react'
import Chart from "react-apexcharts"
import { useSelector } from 'react-redux';

const RadialChart = () => {

      const options = {
        plotOptions: {
          radialBar: {
            track: {
              background: '#fee2e1',
            },
            dataLabels: {
              name: {
                color: "#fff",
                fontSize: "13px",
                show: false
              },
              value: {
                color: "#000",
                fontSize: "14px",
                show: true,
                offsetY: 5
              }
            }
          }
        },
        fill: {
          type: "linear",
          colors: ['#ef4444'],
        },
        stroke: {
          lineCap: "round"
        },
        // labels: ["Progress"]
      };
      const { caloriesRequired } = useSelector(store => store.userInfoSlice)
      const { totalCalories } = useSelector(store => store.storedMealsSlice.caloriesEaten)

      const remainingCaloriesPercentage = () => {
        if(((totalCalories / caloriesRequired) * 100).toFixed() === 'NaN') return 0
        return ((totalCalories / caloriesRequired) * 100).toFixed()
      }

      return (
        <Chart
        options={options}
        series= {[remainingCaloriesPercentage()]}
        type="radialBar"
        width='200'
      />
      )
  }


export default RadialChart;