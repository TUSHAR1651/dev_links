import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import { Bar } from "react-chartjs-2";

const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];
const data = {
  labels: ["Red", "Orange", "Blue"],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
    {
      label: "Popularity of colours",
      data: [55, 23, 96],
      // you can set indiviual colors for each bar
      backgroundColor: [
        "rgba(255, 255, 255, 0.6)",
        "rgba(255, 255, 255, 0.6)",
        "rgba(255, 255, 255, 0.6)",
      ],
      borderWidth: 1,
    },
  ],
};

export const BarChart = ({ chartData }: any) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

Chart.register(CategoryScale);

const MyComponent = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),

        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      <p>Using Chart.js in React</p>
      <BarChart chartData={chartData} />
    </div>
  );
};

export default MyComponent;
