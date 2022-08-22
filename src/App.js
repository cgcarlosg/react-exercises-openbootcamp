import logo from './logo.svg';
import './App.css';
//import GreetingStyled from './components/pure/pure/greetingStyled';
import Clock from './hooks/Ejercicio456'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
