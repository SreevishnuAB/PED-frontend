import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from './Components/login';
import StudentsRootView from './Components/students-root-view';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css'

function App() {

  const history = useHistory();
  const [user, setUser] = useState({authenticated: false, profile: {name:"", phone: "", email: ""}, pedData: null});

  const changeView = (newView)=>{
//    setView(newView);
    console.log(newView);
    history.push(`${newView}/profile`)
    
  }

  const handleUserAuth = (authData)=>{
    setUser(authData);
   // history.push(`/student/${authData.profile.id}`)
  //  console.log(authData);
  }

  const handleProfileChange = (newField)=>{
    let updatedUser = user;
    updatedUser.profile[newField.field.toLowerCase()] = newField.value;
    setUser(updatedUser);
  }

  const handleLogout = ()=>{
    history.push("/");
    setUser({authenticated:false, profile: {name: ""}, pedData: null});
  }


  // return(
  //   <React.Fragment>
  //     <NavBar authenticated={user.authenticated} username={user.profile.name} onMenuClick={changeView} onLogout={handleLogout}/>
  //     {(!user.authenticated)? <Login onLogin={handleUserAuth}/>:
  //      (user.pedData === null)? <div><h1>TODO faculty view</h1></div>:
  //      <StudentsRootView student={user} view={view} onProfileChange={handleProfileChange}/>}
  //   </React.Fragment>
  // );

  return(
    <TransitionGroup>
      <CSSTransition
        key={1}
        classNames="fade"
        timeout={300}
      >
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps)=>(
              <Login
                {...routerProps}
                onLogin={handleUserAuth}
              />
            )}
          />
        <Route
          path="/student"
          render={(routerProps)=>(
            <StudentsRootView
              {...routerProps}
              student={user}
              onProfileChange={handleProfileChange}
              onMenuClick={changeView}
              onLogout={handleLogout}
            />
          )}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
