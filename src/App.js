import logo from './logo.svg';
import './App.css';
import {Welcome} from './components/helloworld'


function App() {
  return (
   <div className="App">
     <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
      <Welcome name='Sara'/>
      <Welcome name='Melissa'/>
      <Welcome name='George'/>
      <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  ); 
}
export default App;
