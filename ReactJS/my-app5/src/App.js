import './App.css';
import ClickCounter from './HigherOrderComponent/ClickCounter';
import HoverCounter from './HigherOrderComponent/HoverCounter';
import LifeCycleA from './LifeCycles/LifeCycleA';

function App() {
  return (
    <div className="App">
      {/* <LifeCycleA myName="Jermaine Sooi"/> */}
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
