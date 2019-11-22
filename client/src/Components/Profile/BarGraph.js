import React from "react";
import { Bar } from "react-chartjs-2";

const options = {
  responsive: true,
  legend: {
    position: "top"
  },
  title: {
    display: true,
    text: "Category performance"
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

var data = {

  labels: ["x", "y", "z", "a"],
  datasets: [{
    label: "errors",
    backgroundColor: "#3e95cd",
    borderColor: "#3e95cd",
    borderwidth: 1,
    data: [10, 4, 12, 8]//[sum of all mistakes for all previous 
    //runs for a specific category]
  },

  {
    label: "class average",
    backgroundColor: "#8e5ea2",
    borderColor: "#8e5ea2",
    borderwidth: 1,
    data: [7, 6, 9, 5]//[average mistakes for a specific category 
    //for all previous runs ]
  }
  ]
};

class BarGraph extends React.Component {
  render() {
    return (
      <div>
        <Bar options={options} data={data} />
      </div>
    );
  }
}


export default BarGraph;
