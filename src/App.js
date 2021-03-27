import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListToDo from "./containers/ListTode.js";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/list" exact component={ListToDo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
