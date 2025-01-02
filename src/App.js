
import './App.css';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Portfolio from './Porthome/portfolio';
import Nav from './Porthome/Components/Navbar';
import Home from './Porthome/Components/Home';

function App() {
  
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route  path='/profile' element={<Portfolio/>}/>
          <Route path='/navigation' element={<Nav/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
