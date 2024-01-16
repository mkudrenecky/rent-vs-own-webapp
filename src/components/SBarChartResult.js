import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Stack, Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const SBarCharResult = ({ data }) => {
  const { homeValue, monthlyRent } = data;

  const tax = (homeValue * 0.01) / 12;
  const maintenance = (homeValue * 0.01) / 12;
  const capitalCost = (homeValue * 0.03) / 12;
  const imputedRent = maintenance + capitalCost + tax;

  const labels = ["Monthly Rent", "Monthly Cost of Ownership"];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Rent",
        data: [monthlyRent],
        backgroundColor: "rgb(255, 99, 132, 0.3)",
        borderColor: "rgb(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Tax",
        data: [0, tax],
        backgroundColor: "rgb(75, 192, 192, 0.3)",
        borderColor: "rgb(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Maintenance",
        data: [0, maintenance],
        backgroundColor: "rgb(53, 162, 235, 0.3)",
        borderColor: "rgb(53, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Cost of Capital",
        data: [0, capitalCost],
        backgroundColor: "rgb(150, 53, 235, 0.3)",
        borderColor: "rgb(150, 53, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack gap={3}>
      <Typography textAlign="center" variant="h4">
        Rent vs Own
      </Typography>
      <Typography textAlign="center" variant="h5">
        Monthly Rent: $ {monthlyRent.toFixed(2)}
      </Typography>
      <Typography textAlign="center" variant="h5">
        Monthly Cost of Ownership: $ {imputedRent.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div style={{ width: "800px", height: "400px" }}>
          <Bar options={options} data={chartData} />
        </div>
      </Stack>
    </Stack>
  );
};

export default SBarCharResult;
