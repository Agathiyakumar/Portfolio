
import './App.css';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Portfolio from './Porthome/portfolio';


function App() {
  
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={<Portfolio/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
