import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import notes from "./pages/notes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Main />
        <Switch>
          <Route path="#" component={notes} />
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
