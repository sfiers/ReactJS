
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

function App() {
  return (
    <div className="App">
        {/* <Greet name='Simon' surname='Fiers'/> */}
        {/* <EventBind/> */}

        <ClassClick/>
        <FuncionClick/>
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
