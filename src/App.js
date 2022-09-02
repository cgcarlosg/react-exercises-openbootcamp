import './App.css';
//import GreetingStyled from './components/pure/pure/greetingStyled';
//import Clock from './hooks/Ejercicio456'
import ContactListComponent from './components/pure/container/contact_list.jsx'
import OptionalRender from './components/pure/pure/forms/optionalRender';
//import Father from './components/pure/container/father';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<ContactListComponent></ContactListComponent>*/}
        <OptionalRender></OptionalRender>
      </header>
    </div>
  );
}

export default App;
