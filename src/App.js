import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListToDo from "./containers/ListTodojs";
import Login from "./containers/Login";
import { ToDoContext, TokenContext } from "./context";
import usePersistedState from "./utils/usePersistedState";

import "./App.scss";

function App() {
  const [todos, setTodos] = usePersistedState("todos", []);
  const [token, setToken] = usePersistedState("token", false);
  return (
    <div className="App">
      <TokenContext.Provider value={[token, setToken]}>
        <Router>
          <NavBar auth={token} />
          <Switch>
            <Route path="/" exact component={Login} />
            <ToDoContext.Provider value={[todos, setTodos]}>
              <Route path="/list" component={ListToDo} />
            </ToDoContext.Provider>
          </Switch>
        </Router>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
