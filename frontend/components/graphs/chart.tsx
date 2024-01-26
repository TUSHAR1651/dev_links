import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import { Bar } from "react-chartjs-2";

const Data = [
  {
    referrer: "Facebook",
    count: 80,
  },
  {
    referrer: "Instagram",
    count: 100,
  },
  {
    referrer: "Twitter",
    count: 145,
  },
  {
    referrer: "Snapchat",
    count: 11,
  },
  {
    referrer: "Linktree",
    count: 34,
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
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Top Referrers",
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
    labels: Data.map((data) => data.referrer),
    datasets: [
      {
        label: "Users Gained",
        data: Data.map((data) => data.count),

        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      <BarChart chartData={chartData} />
    </div>
  );
};

export default MyComponent;
