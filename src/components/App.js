
// import logo from './logo.svg';
// import './App.css';
import Message from './Message.js';
import Counter from './Counter.js';
import FuncionClick from './FuncionClick.js';
import ClassClick from './ClassClick.js';
import EventBind from './EventBind.js';
import Hello from './Hello.js';
import Welcome from './Welcome'
import Greet from './Greet.js'
import ParentComponent from './ParentComponent.js';
import UserGreeting from './UserGreeting.js';
import NameList from './NameList.js';
import Form from './Form.js';
import LifecycleA from './LifecycleA.js';
import FragmentDemo from './FragmentDemo.js';
import Table from './Table.js';
import PureComp from './PureComp.js';
import ParentComp from './ParentComp.js';
import RefsDemo from './RefsDemo.js';
import FocusInput from './FocusInput.js'
import FRParentInput from './FRParentInput.js';
import PortalDemo from './PortalDemo.js';
import Hero from './Hero.js';
import ErrorBoundary from './ErrorBoundary.js';
import ClickCounter from './ClickCounter.js';
import HoverCounter from './HoverCounter.js';
import ClickCounterTwo from './ClickCounterTwo.js';
import HoverCounterTwo from './HoverCounterTwo.js';
import User from './User.js';
import CounterTwo from './CounterTwo.js';
import ComponentC from './ComponentC.js';

function App() {
  return (
    <div className="App">
      <ComponentC />
      {/* <CounterTwo>
      { (count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo>
      <CounterTwo>
      { (count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo>  */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Simon' : 'Guest'} /> */}
      {/* <ClickCounter name='Simon'/>
      <HoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FuncionClick/> */}
      {/* <Welcome name='Simon' heroName='Fiers'>
        <p> This is children props</p>
      </Welcome>
      <Greet name='Simon' heroName='Fiers'>
        <p> This is children props</p>
      </Greet> */}
      {/* <Counter/> */}
      {/* </Greet> */}
      {/* <Message/> */}
      {/* <Welcome name='Simon' heroname='Fiers'>
        <p> This is children props</p>
      </Welcome>
      <Welcome nname='Clark' heroname='Superman'>
        <button>Action</button>
      </Welcome>
      <Welcome name='Diana' heroname='Wonder Women'/>
      <Greet name='Simon' heroname='Fiers'>
        <p> This is children props</p>
      </Greet>
      <Greet name='Clark' heroname='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroname='Wonder Women'/> */}
      {/* <Hello /> */}
      {/* <Welcome /> */}
      {/* <Greet /> */}
    </div>
  )
}

export default App;
