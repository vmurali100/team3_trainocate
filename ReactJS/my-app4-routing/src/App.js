import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Navbar } from './Navbar';
import { Pricing } from './Pricing';
import { Features } from './Features';
import { Home } from './Home';
import { ProductDetails } from './ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route path="/pricing" component={Pricing}/>
          <Route path="/features" component={Features}/>
          <Route path="/:id" component={ProductDetails}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
