import logo from "./logo.svg";
import "./App.css";
import LifeCycleA from "./LifeCycles/LifeCycleA";
import ClickCounter from "./HigerOrderComponent/ClickCounter";
import HoverCounter from "./HigerOrderComponent/HoverCounter";
import { ParentComp } from "./ChildToParent/ParentComp";
import ClickCounterRender from "./RenderProps/ClickCounterRender";
import HoverCounterRender from "./RenderProps/HoverCounterRender";
import Counter from "./RenderProps/Counter";

function App() {
  return (
    <div className="App">
      {/* <LifeCycleA myName="Murali Krishna"/> */}
      {/* <ClickCounter/>
      <HoverCounter/> */}
      {/* <ParentComp/> */}
      {/* <ClickCounterRender/>
      <HoverCounterRender/> */}
      <Counter
        render={(count, increment) => (
          <ClickCounterRender count={count} increment={increment} />
        )}
      />
      <Counter
        render={(count, increment) => (
          <HoverCounterRender count={count} increment={increment} />
        )}
      />
    </div>
  );
}

export default App;
