import { Button, Paper, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/store";

const CounterContainer = styled(Paper)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "400px",
  padding: "30px",
});

const ButtonContainer = styled(Box)({
  margin: "10px",
});

const CounterButton = styled(Button)({
  margin: "5px",
  backgroundColor: "#333",
});

function CounterPage() {
  const counter = useSelector((state) => state.counter.counter);

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(counterActions.increase());
  };

  const handleDecrease = () => {
    dispatch(counterActions.decrease());
  };
  return (
    <CounterContainer elevation={3}>
      <Typography variant="h4">Counter:</Typography>
      <Typography variant="h5">{counter}</Typography>
      <ButtonContainer>
        <CounterButton variant="contained" onClick={handleIncrease}>
          Increase
        </CounterButton>
        <CounterButton variant="contained" onClick={handleDecrease}>
          Decrease
        </CounterButton>
      </ButtonContainer>
    </CounterContainer>
  );
}

export default CounterPage;
