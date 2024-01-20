import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ExpandCard() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <Card sx={{ minWidth: 300, border: "1px solid rgba(211,211,211,0.6)" }}> */}
      <Card sx={{ minWidth: 300 }}>
        <CardHeader
          title="How do we determine if it is cheaper to rent or buy?"
          action={
            <IconButton
              onClick={() => setOpen(!open)}
              aria-label="expand"
              size="small"
            >
              {/* {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
              {open ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          }
        ></CardHeader>
        <div style={{ backgroundColor: "rgba(211,211,211,0.4)" }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <CardContent>
              <Container sx={{ height: 100, lineHeight: 1 }}>
                <p>
                  Monthly Cost of Ownership is boiled down to 5% of the Home
                  Price
                </p>
                <li>3% is assumed for the cost of capital</li>
                <li>1% allocated to tax</li>
                <li>1% for depreciation</li>
                <li> expand </li>
                <li>Add some links</li>
              </Container>
            </CardContent>
          </Collapse>
        </div>
      </Card>
    </>
  );
}
