import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ButtonDetails from "./Components/ButtonDetails/ButtonDetails";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/posts/:id'>
          <ButtonDetails/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
