import { CssBaseline } from "@mui/material";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import CounterPage from "./Pages/CounterPage";
import HomePage from "./Pages/HomePage";

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
          <HomePage />
        </Route>
        <Route path="*">
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
