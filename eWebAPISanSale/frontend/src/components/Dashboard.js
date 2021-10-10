
import React from 'react';
import { getToken, getUser, removeUserSession,setUserSession } from '../Utils/Common'; 
import Nav from '../components/Nav';


function Dashboard(props) {
  const user = getUser();
  // handle click event of logout button
  const handleLogout = () => {    
    removeUserSession();
    props.history.push('/login');
  }
  if (getToken==null) {
    return <div className="content">Checking Authentication...</div>
  }
 
  return (
    <div>
     <Nav/>
      <input type="button" onClick={handleLogout} value="Logout" />
      <br /><br />
     <h1> Welcome {user}!</h1>
    </div>
  );
}
export default Dashboard;