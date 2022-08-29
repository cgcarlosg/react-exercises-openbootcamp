import './App.css';
//import GreetingStyled from './components/pure/pure/greetingStyled';
//import Clock from './hooks/Ejercicio456'
import ContactListComponent from './components/pure/container/contact_list.jsx'
//import Father from './components/pure/container/father';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;
