  
import React from "react";
import { Line } from "react-chartjs-2";


  const options = {
    title: {
      display: true,
      text: "Category performance"
    },

  };

 var data = {

  labels: [1, 2, 3, 4],
  datasets: [{ 
    data: [1,3,5,9],//TOTAL mistakes at a specific run,
    label: "Errors at a run",
    borderColor: "#3e95cd",
    fill: false
  }, { 
    data: [0, 1, 2, 4],//average TOTAL mistakes at a specific run,
    label: "Average Errors at a run",
    borderColor: "#8e5ea2",
    fill: false
  }
]
 };

 export default class LineGraph extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Line options={options} data={data} />
      </div>
    );
  }
}


//export default LineGraph;
