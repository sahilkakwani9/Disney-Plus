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
import {Provider} from 'react-redux';
import {store} from './app/store.js'

function App() {
  return (
    
    <Provider store={store}>
        <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/details' element={<Details/>} />
            <Route path='/' element={<Home/>} />
          </Routes>      
        </div>
      </Router>
    </Provider>
    
    
  );
}

export default App;
