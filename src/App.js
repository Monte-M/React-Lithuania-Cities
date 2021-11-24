import { Container, CssBaseline, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import CityPage from "./Pages/CityPage";
import CounterPage from "./Pages/CounterPage";

function App() {
  const auth = useSelector((state) => state.auth.authentication);
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Switch>
        <>
          {auth ? (
            <>
              <Route path="/counter">
                <CounterPage />
              </Route>
              <Route exact path="/">
                <CityPage />
              </Route>
            </>
          ) : (
            <Container sx={{ m: 2 }}>
              <Typography variant="h4" sx={{ color: "tomato" }}>
                Please login for full access
              </Typography>
            </Container>
          )}
        </>
      </Switch>
    </div>
  );
}

export default App;
