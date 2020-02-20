import React, { useState } from 'react';
import './App.css';
import Login from './Components/login';
import NavBar from './Components/navbar';
import StudentsRootView from './Components/students-root-view';

function App() {

  const [view, setView] = useState('report');
  const [user, setUser] = useState({authenticated: false, profile: {name:"", phone: "", email: ""}, pedData: null});

  const changeView = (newView)=>{
    setView(newView);
  }

  const handleUserAuth = (authData)=>{
    setUser(authData);
    console.log(authData);
  }

  const handleProfileChange = (newField)=>{
    let updatedUser = user;
    updatedUser.profile[newField.field.toLowerCase()] = newField.value;
    setUser(updatedUser);
  }

  const handleLogout = ()=>{
    setUser({authenticated:false, profile: {name: ""}, pedData: null});
  }

  return(
    <React.Fragment>
      <NavBar authenticated={user.authenticated} username={user.profile.name} onMenuClick={changeView} onLogout={handleLogout}/>
      {(!user.authenticated)? <Login onLogin={handleUserAuth}/>:
       (user.pedData === null)? <div><h1>TODO faculty view</h1></div>:
       <StudentsRootView student={user} view={view} onProfileChange={handleProfileChange}/>}
    </React.Fragment>
  );
}

export default App;
