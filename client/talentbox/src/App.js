import './App.css';
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Google_login from './pages/gLogin';
import Courses from './pages/Courses';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className = "pages">
          <Routes>
            <Route path="/"
            element = {<Home />}
            />
            <Route path="/login"
            element = {<Login />}
            />
            <Route path="/signup"
            element = {<Signup />}
            />
            <Route path="/gLogin"
            element = {<Google_login />}
            />

            <Route path="/courses"
            element = {<Courses />}
            />
            
          </Routes>
        </div>
      </BrowserRouter>
      
        
      
    </div>
  );
}

export default App;
