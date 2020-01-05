import React, { useState } from 'react';
import './App.css';
import Login from './Components/login';
import NavBar from './Components/navbar';
import StudentsRootView from './Components/students-root-view';

function App() {

  const [user, setUser] = useState({authenticated: false, name: "", peData: null});
  const [view, setView] = useState('report');

  const handleUserAuth = (authData)=>{
    setUser(authData);
    console.log(authData);
  }

  return(
    <React.Fragment>
      <NavBar authenticated={user.authenticated} username={user.name}/>
      {(!user.authenticated)? <Login onLogin={handleUserAuth}/>:
       (user.peData === null)? <div><h1>TODO faculty view</h1></div>:
       <StudentsRootView/>}
    </React.Fragment>
  );
}

export default App;
