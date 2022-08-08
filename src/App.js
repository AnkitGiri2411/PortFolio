import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import About from './component/About';
import {
  BrowserRouter as Router,
  
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Project from './component/Project';
import Details from './component/Details';


function App() {
  return (
    <>
    <Router>
    <Header/>
    <div className="App"></div>
        <Routes>
          <Route exact path="/" element={<Details/>}/>
          <Route exact path="about" element={<About/>}/>
          </Routes>
      
    </Router></>
    
  );
}

export default App;
