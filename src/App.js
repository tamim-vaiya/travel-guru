import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "firebase/auth";
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import SearchPage from './components/SearchPage/SearchPage';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import ComingSoon from './components/ComingSoon/ComingSoon';

function App() {
  
  return (
    <div >
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route path='/home'>
          <Home></Home>
        </Route>

        <Route path='/booking'>
          <Booking></Booking>
        </Route>

        <Route path='/searchPage'>
          <SearchPage></SearchPage>
        </Route>

        <Route path='/login'>
          <Login></Login>
        </Route>

        <Route path='/comingSoon'>
          <ComingSoon></ComingSoon>
        </Route>

        <Route path='*'>
          <NotFound></NotFound>
        </Route>

      </Switch>
    </Router>
    </ div>
  );
}

export default App;
