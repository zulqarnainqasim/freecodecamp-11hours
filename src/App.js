import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import ReactDOM  from 'react-dom';


function App() {
  return(
    <div>
      <Navbar/>
      <Main/>
    </div>
  )
 
}


ReactDOM.render(<App/>,
  document.getElementById('root'))
export default App;
