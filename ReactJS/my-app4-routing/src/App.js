import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Pricing } from "./Pricing";
import { Features } from "./Features";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route path="/pricing" component={Pricing} />
        <Route path="/features" component={Features} />
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
