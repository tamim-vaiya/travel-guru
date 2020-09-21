import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import "firebase/auth";
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';

function App() {
  
  return (
    <div className="bg">
    <Router>
      <Booking></Booking>
    </Router>
    </ div>
  );
}

export default App;
