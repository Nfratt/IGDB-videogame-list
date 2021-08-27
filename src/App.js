
import './App.css';
import {SearchBar} from './components/search';
import BookData from "./Data.json";

function App() {
  return (
   <div className="App">
     <header className="App-header">
     <SearchBar placeholder="Search for a Game" data={BookData} />
      </header>
    </div>
  ); 
}
export default App;
