import React from "react";
import './css/dashboard.css'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

function Dashboard() {
  const data = [
    { name: "Google", percentage: 55, url: "https://www.google.com" },
    { name: "Facebook", percentage: 40, url: "https://www.facebook.com" },
    { name: "Amazon", percentage: 25, url: "https://www.amazon.com" },
    { name: "Microsoft", percentage: 30, url: "https://www.microsoft.com" },
  ];

  const handleClick = (url) => {
    window.location = url;
  };
  return (
    <div className="chart">
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 150, backgroundColor: "#ccc" }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "40px",
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar
          dataKey="percentage"
          fill="#8884d8"
          barSize={70}
          onClick={(event) => handleClick(event.payload.url)}
        />
      </BarChart>
    </div>
  );
}

export default Dashboard;
