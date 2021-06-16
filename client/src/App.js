import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoreSubjects from "./pages/MoreSubjets/MoreSubjects";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/subjects" exact component={MoreSubjects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
