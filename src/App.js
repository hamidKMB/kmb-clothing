import React from 'react';
import HomePage from "./pages/home-page/homepage.component"
import { Switch, Route} from "react-router-dom";

import "./App.css";

const HatsPage = () => {
  return (
    <h1>Hats Page</h1>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
