import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import Login from './components/Login';
import movies from './movies.json';
import NotFound from './components/NotFound';

function App() {
  return (
    
        <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='/black-widow' element={<Details/>} /> */}
            {movies && movies.map((movie)=>{
              return <Route path={'/'+movie.endpoint} element={<Details movie={movie}/>} />
            })}
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>      
        </div>
      </Router>
    
    
  );
}

export default App;
