import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { Stack } from "@mui/system";

const Input = styled(MuiInput)`
  width: 60px;
`;

export default function InputSlider({
  defaultValue,
  min,
  max,
  label,
  unit,
  onChange,
  amount,
  value,
  steps,
  color,
  onBlur,
  onInputChange,
}) {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      <Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              min={min}
              max={max}
              defaultValue={defaultValue}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={onChange}
              value={value}
              marks
              step={steps}
              color={color}
            />
          </Grid>
          <Grid item>
            <Input
              value={value}
              size="medium"
              onChange={onInputChange}
              //onBlur={onBlur}
              steps={steps}
              min={min}
              max={max}
              type="number"
              aria-label="input-slider"
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
