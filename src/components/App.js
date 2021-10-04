
// import logo from './logo.svg';
// import './App.css';
import Greet from './Greet.js'
import Ric from './Welcome'
import Message from './Message.js';
import Counter from './Counter.js';
import FuncionClick from './FuncionClick.js';
import ClassClick from './ClassClick.js';
import EventBind from './EventBind.js';

function App() {
  return (
    <div className="App">
        {/* <Counter/> */}
        {/* <Greet name='Simon' surname='Fiers'/> */}
        {/* <FuncionClick/> */}
        <EventBind/>
        {/* <ClassClick/> */}
        {/* <Greet name='Maxime'/>
        <Greet name='Marc' surname='Fiers'>
          <p>This is the kid</p>
        </Greet>
        <Ric name='Micheline' surname='Mams'/> */}
        {/* <Message/> */}
    </div>
  )
}

export default App;
