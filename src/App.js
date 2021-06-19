import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom' ;
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Login from './Components/Login';
import { auth } from './Components/firebase';

function App() {
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log("THE USER IS >>", authUser);

      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      else{
        dispatch({
          type:"SET_USER",
          user: null,
        });
      }
    });
  },[]);
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
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
