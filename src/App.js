import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
// import BenIndex from "./components/BenIndex";
// import BenResult from "./components/BenResult";
import SBarCharResult from "./components/SBarChartResult";
import Collapsible from "react-collapsible";
import ExpandCard from "./components/ExpandCard";

function App() {
  const [data, setData] = useState({
    homeValue: 600000,
    downPayment: 600000 * 0.2,
    loanAmount: 600000 * 0.8,
    loanTerm: 25,
    interestRate: 5,
    monthlyRent: 1000,
  });
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems="top">
          <Grid item xs={12} md={6}>
            <ExpandCard />
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ marginTop: 10 }}>
              <SBarCharResult data={data} />
            </Box>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
