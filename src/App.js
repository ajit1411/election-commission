import React from 'react';
import logo from './logo.svg';
import './App.css';
import Applayout from './Components/Applayout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Applayout />
    </div>
  );
}

export default App;
