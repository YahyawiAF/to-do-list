import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListToDo from "./containers/ListTodojs";
import Login from "./containers/Login";
import Home from "./containers/Home";
import { ToDoContext, TokenContext } from "./context";
import ProtectedRoute from "./components/ProtectedRoute";
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
            <ProtectedRoute
              exact
              authed={!token}
              path="/login"
              component={Login}
            />
            <ToDoContext.Provider value={[todos, setTodos]}>
              <ProtectedRoute
                exact
                authed={token}
                path="/list"
                component={ListToDo}
              />
              <ProtectedRoute
                exact
                authed={token}
                path="/"
                component={Home}
              />
            </ToDoContext.Provider>
          </Switch>
        </Router>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
