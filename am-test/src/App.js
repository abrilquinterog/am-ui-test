//import logo from './logo.svg';
import './App.scss';
import Characters from './Characters';
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Characters/>
    </div>
  );
}

export default App;
