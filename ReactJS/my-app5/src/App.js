import logo from './logo.svg';
import './App.css';
import LifeCycleA from './LifeCycles/LifeCycleA';
import ClickCounter from './HigerOrderComponent/ClickCounter';
import HoverCounter from './HigerOrderComponent/HoverCounter';

function App() {
  return (
    <div className="App">
      {/* <LifeCycleA myName="Murali Krishna"/> */}
      <ClickCounter/>
      <HoverCounter/>
    </div>
  );
}

export default App;
