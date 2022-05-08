import styled from 'styled-components'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/details' element={<Details/>} />
          <Route path='/' element={<Home/>} />
        </Routes>      
      </div>
    </Router>
    
  );
}

export default App;
