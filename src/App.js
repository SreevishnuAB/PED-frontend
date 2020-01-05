import React, { useState } from 'react';
import './App.css';
import Login from './Components/login';
import NavBar from './Components/navbar';

function App() {

  const [user, setUser] = useState({authenticated: false, peData: null});

  const handleUserAuth = (authData)=>{
    setUser(authData);
    console.log(authData);
  }

  return(
    <React.Fragment>
      <NavBar authenticated={user.authenticated} username={user}/>
      {(!user.authenticated)? <Login onLogin={handleUserAuth}/>:
       (user.peData === null)? <div><h1>TODO faculty view</h1></div>:
       <div><h1>TODO Student view</h1></div>}
    </React.Fragment>
  );
}

export default App;
