import React from "react";
import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BenResult = ({ data }) => {
  const { homeValue, monthlyRent } = data;

  const imputedRent = (homeValue * 0.05) / 12;
  const pieChartData = {
    labels: ["Cost of Ownership", "Monthly Rent"],
    datasets: [
      {
        label: "Ratio of Home Ownership and Monthly Rent",
        data: [imputedRent, monthlyRent],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 152, 0, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 152, 0, 1)"],
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
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  );
};

export default BenResult;
