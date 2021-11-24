import { CssBaseline } from "@mui/material";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import CityPage from "./Pages/CityPage";
import CounterPage from "./Pages/CounterPage";

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route path="/counter">
          <CounterPage />
        </Route>
        <Route exact path="/">
          <CityPage />
        </Route>
        <Route path="*">
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
