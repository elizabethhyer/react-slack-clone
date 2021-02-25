import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/room"}>Chat Page</Route>
          <Route path={"/"}>Home/Login</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
