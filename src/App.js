import React, { useState } from 'react';
import './App.css';
import Login from './Components/login';
import NavBar from './Components/navbar';
import StudentsRootView from './Components/students-root-view';

function App() {

  const [user, setUser] = useState({authenticated: false, profile: {name:""}, peData: null});
  const [view, setView] = useState('report');

  const handleUserAuth = (authData)=>{
    setUser(authData);
    console.log(authData);
  }

  const handleLogout = ()=>{
    setUser({authenticated:false, profile: {name: ""}, peData: null});
  }
  return(
    <React.Fragment>
      <NavBar authenticated={user.authenticated} username={user.profile.name} onLogout={handleLogout}/>
      {(!user.authenticated)? <Login onLogin={handleUserAuth}/>:
       (user.peData === null)? <div><h1>TODO faculty view</h1></div>:
       <StudentsRootView student={user}/>}
    </React.Fragment>
  );
}

export default App;
