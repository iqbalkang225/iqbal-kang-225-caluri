import React from 'react'
import Chart from "react-apexcharts"

const RadialChart = () => {
     
      // const series = [50]

      // var options = {        
      //   plotOptions: {
      //     radialBar: { 
      //       dataLabels: {
      //         name: {
      //           show: false,
      //           color: "#fff",
      //           fontSize: "16px",
      //           offsetY: 5,
      //         },
      //         value: {
      //           show: true,
      //           color: "#000",
      //           fontSize: "16px",
      //           offsetY: 5,
      //         }
      //       }
      //     }
      //   },
      //   track: {
      //     background: '#000',
      //     strokeWidth: '100%',
      //   },

      
      //   stroke: {
      //     lineCap: "round",
      //   },
      //   // labels: [2600]
      // };

      const options = {
      
      
        series: [67],
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

      return (
        <Chart
        options={options}
        series= {[30]}
        type="radialBar"
        width='200'
      />
      )
  }


export default RadialChart;