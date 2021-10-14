import './App.css';
import { ParentComp } from './ChildToParent/ParentComp';
import ClickCounter from './HigherOrderComponent/ClickCounter';
import HoverCounter from './HigherOrderComponent/HoverCounter';
import ClickCounter2 from './HigherOrderComponent2/ClickCounter2';
import HoverCounter2 from './HigherOrderComponent2/HoverCounter2';
import ClickCounterRender from './RenderProps/ClickCounterRender';
import HoverCounterRender from './RenderProps/HoverCounterRender';
import Counter from './RenderProps/Counter';
import LifeCycleA from './LifeCycles/LifeCycleA';
import RefsDemo from './Refs/RefsDemo';
import { PortalDemo } from './PortalDemo/PortalDemo';
import { ContextCompA } from './Context/ContextCompA';
import { UserProvider } from './Context/userContext';
import { ContextUserCompA } from './ContextUsers/ContextUserCompA';
import { ConUserProvider } from './ContextUsers/conUserContext';

function App() {
  let users = [{name:"Murali"},{name:"Jermaine"},{name:"Daniel"}];

  return (
    <div className="App">
      {/* <LifeCycleA myName="Jermaine Sooi"/> */}

      {/* <ClickCounter />
      <HoverCounter />
      <ClickCounter2 />
      <HoverCounter2 /> */}
      {/* <ParentComp /> */}

      {/* <ClickCounterRender />
      <HoverCounterRender /> */}

      {/* <Counter 
        render={(count, increment) => 
          (<ClickCounterRender count={count} increment={increment}/>
        )}
      />
      <Counter render={(count, increment) => (<HoverCounterRender count={count} increment={increment}/>)}/> */}

      {/* <RefsDemo /> */}
      {/* <PortalDemo /> */}

      {/* <UserProvider value="My name is Jermaine">
        <ContextCompA />
      </UserProvider> */}
      
      <ConUserProvider value={users}>
        <ContextUserCompA/>
      </ConUserProvider>

    </div>
  );
}

export default App;
