import React from 'react';
import { Switch , Route, Redirect, useRouteMatch } from 'react-router-dom';
import StudentsReport from './students-report';

export default function StudentsRootView(props){

  const [profile, setProfile] = React.useState({});

  const handleProfile = React.useCallback((prof)=>{
    setProfile(prof)
  }, []);
  // switch(props.view){
  //   case "report":
  //     return <StudentsReport profile={props.student.profile} pedData={props.student.pedData}/>
  //   case "profile":
  //     return <Profile profile={props.student.profile} onProfileChange={props.onProfileChange}/>;
  //   default:
  //     return <div>TODO Error page</div>
  // }

  let match = useRouteMatch();

  //console.log(props.student);
  if(props.student.authenticated === false)
    return <Redirect to="/"/>;
  return(
    <Switch>
      <Route
        exact
        path={`${match.path}/:studentId`}
        render={(routerProps)=>(
            <StudentsReport
              student={props.student}
              onGet={handleProfile}
              onNav={props.onNav}
              {...routerProps}
            />
        )}
      />
    </Switch>
  );
}