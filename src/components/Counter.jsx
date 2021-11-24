import { Button, Paper, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";

import React from "react";

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
  return (
    <CounterContainer elevation={3}>
      <Typography variant="h4">Counter:</Typography>
      <Typography variant="h5">0</Typography>
      <ButtonContainer>
        <CounterButton variant="contained">Increase</CounterButton>
        <CounterButton variant="contained">Decrease</CounterButton>
      </ButtonContainer>
    </CounterContainer>
  );
}

export default CounterPage;
