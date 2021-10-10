
import React,{useEffect, useState } from 'react';
import { getrfToken, getToken, getUser, removeUserSession,setUserSession } from '../Utils/Common'; 
import Nav from '../components/Nav';
import axios from 'axios';

function Dashboard(props) {
  const [authLoading, setAuthLoading] = useState(true);
  const name = getUser();
  const token = getToken();
  
  const handleLogout = () => {    
       removeUserSession();
       props.history.push('/login');
     }
    axios.get('https://localhost:5001/api/Categories',
    { headers : {"Authorization": `Bearer ${token}`}})
    .then((response) => {
      var response = response.data;
    },
    (error)=>{
      removeUserSession();
      props.history.push('/login');
    }
    
    
    );
 
 
  
  // const token = getToken();
  // const name = getUser();
  // // handle click event of logout button
  // const handleLogout = () => {    
  //   removeUserSession();
  //   props.history.push('/login');
  // }

  // if (token==null) {
  //   return <div className="content">Checking Authentication...</div>
  // }
 
  return (
    <div>
     <Nav/>
      <input type="button" onClick={handleLogout} value="Logout" />
      <br /><br />
     <h1> Welcome {name}!</h1>
    </div>
  );
}
export default Dashboard;