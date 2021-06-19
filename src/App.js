import React,{useEffect} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom' ;
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
import { auth } from './Components/firebase';
import {useStateValue} from './Components/StateProvider';

function App() {
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
