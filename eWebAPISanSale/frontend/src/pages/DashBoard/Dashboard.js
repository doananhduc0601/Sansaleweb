import React from "react";
import { getToken, getUser, removeUserSession } from "../../Utils/Common";
// import Nav from "./Nav";
import axios from "axios";
import Menu from "../../components/Menu/Menu";

function Dashboard(props) {
  const name = getUser();
  const token = getToken();

  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };
  axios
    .get("https://localhost:5001/api/Categories", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(
      (response) => {
        //var response = response.data;
      },
      (error) => {
        removeUserSession();
        props.history.push("/login");
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
      {/* <Nav /> */}
      <Menu />
      <input type="button" onClick={handleLogout} value="Logout" />
      <br />
      <br />
      <h1> Welcome {name}!</h1>
    </div>
  );
}
export default Dashboard;
