import React from 'react';
import StudentsReport from './students-report';
import Profile from './profile';

export default function StudentsRootView(props){

  switch(props.view){
    case "report":
      return <StudentsReport profile={props.student.profile} pedData={props.student.pedData}/>
    case "profile":
      return <Profile profile={props.student.profile} onProfileChange={props.onProfileChange}/>;
    default:
      return <div>TODO Error page</div>
  }
}