import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from'react-router-dom'
import StudentForm from './components/StudentForm';
import Details from './components/Details';


function App() {

  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<StudentForm/>}/>
          <Route path='/storedDetails' element={<Details/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
