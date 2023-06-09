import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {RecoilRoot} from 'recoil';
import Login from "./Login"
import Quiz from "./Quiz"
import Register from "./Register"
import Model from "./Model"

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/model">
            <Model />
          </Route>
          <Route path="/">
            <Quiz />
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
