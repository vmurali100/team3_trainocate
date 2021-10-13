import './App.css';
import ClickCounter from './HigherOrderComponent/ClickCounter';
import HoverCounter from './HigherOrderComponent/HoverCounter';
import ClickCounter2 from './HigherOrderComponent2/ClickCounter2';
import HoverCounter2 from './HigherOrderComponent2/HoverCounter2';
import LifeCycleA from './LifeCycles/LifeCycleA';

function App() {
  return (
    <div className="App">
      {/* <LifeCycleA myName="Jermaine Sooi"/> */}
      <ClickCounter />
      <HoverCounter />
      <ClickCounter2 />
      <HoverCounter2 />
    </div>
  );
}

export default App;
