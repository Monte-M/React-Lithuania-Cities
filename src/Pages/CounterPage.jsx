import { Container } from "@mui/material";
import { styled } from "@mui/styles";
import Counter from "../components/Counter";

import React from "react";

const CounterContainer = styled(Container)({
  marginTop: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "400px",
});

function CounterPage() {
  return (
    <CounterContainer>
      <Counter />
    </CounterContainer>
  );
}

export default CounterPage;
