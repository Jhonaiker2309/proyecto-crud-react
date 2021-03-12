import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import {
  initialMonth,
  lastMonth,
  initialDay,
  lastDay,
  initialYear,
  lastYear,
} from "./list";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Foot({ changeDataShowed }) {
  const classes = useStyles();
  const [currentInitialDay, setCurrentInitialDay] = useState(1);
  const [currentLastDay, setCurrentLastDay] = useState(31);
  const [currentInitialYear, setCurrentInitialYear] = useState(2001);
  const [currentLastYear, setCurrentLastYear] = useState(2021);
  const [currentInitialMonth, setCurrentInitialMonth] = useState(1);
  const [currentLastMonth, setCurrentLastMonth] = useState(12);

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currentInitialDay}
            onChange={(e) => setCurrentInitialDay(e.target.value)}
            helperText="Please select your currency"
            variant="outlined"
          >
            {initialDay.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currentInitialMonth}
            onChange={(e) => setCurrentInitialMonth(e.target.value)}
            helperText="Please select your currency"
            variant="outlined"
          >
            {initialMonth.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currentInitialYear}
            onChange={(e) => setCurrentInitialYear(e.target.value)}
            helperText="Please select your currency"
            variant="outlined"
          >
            {initialYear.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
              variant="contained"
              color="secondary"
              onClick={() =>{
                setCurrentInitialDay(1);
                setCurrentInitialMonth(1);
                setCurrentInitialYear(2001);
                setCurrentLastDay(31);
                setCurrentLastMonth(12);
                setCurrentLastYear(2021);
                changeDataShowed(currentInitialDay,currentInitialMonth,currentInitialYear,currentLastDay,currentLastMonth,currentLastYear);}
              }
            >
              Restart
            </Button>
        </div>
      </form>

      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currentLastDay}
            onChange={(e) => setCurrentLastDay(e.target.value)}
            helperText="Please select your currency"
            variant="outlined"
          >
            {lastDay.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currentLastMonth}
            onChange={(e) => setCurrentLastMonth(e.target.value)}
            helperText="Please select your currency"
            variant="outlined"
          >
            {lastMonth.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currentLastYear}
            onChange={(e) => setCurrentLastYear(e.target.value)}
            helperText="Please select your currency"
            variant="outlined"
          >

            {lastYear.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="secondary"
            onClick={() =>
              changeDataShowed(
                currentInitialDay,
                currentInitialMonth,
                currentInitialYear,
                currentLastDay,
                currentLastMonth,
                currentLastYear
              )
            }
          >
            Filter
          </Button>
        </div>
      </form>
    </div>
  );
}
