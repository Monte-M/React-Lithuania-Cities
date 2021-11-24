import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import CounterPage from "./Pages/CounterPage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/counter">
          <CounterPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
