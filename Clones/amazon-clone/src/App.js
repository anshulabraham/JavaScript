import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{},dispatch]=useStateValue();
 useEffect(() => {
  //Leaving it empty would only let it fire once
  auth.onAuthStateChanged(authUser =>  {
    console.log('User  is >>',authUser);
    if(authUser) {
      // The  user just logged in
      dispatch({
        type:'SET_USER',
        user:authUser
      })
    }else 
    {
      //User is locked out
    }

  })
 }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
          <Header/>
            <Checkout/>
            </Route>
          <Route path="/">
          <Header/>
          <Home />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;