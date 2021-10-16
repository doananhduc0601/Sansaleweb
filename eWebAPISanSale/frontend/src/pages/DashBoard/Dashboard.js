import React from "react";
import { getToken, getUser, removeUserSession } from "../../Utils/Common";
// import Nav from "./Nav";
import axios from "axios";
import Menu from "../../components/Menu/Menu";
import { BrowserRouter, Route } from "react-router-dom";
// import Header from "../../components/headerconteact/header";
import ProductList from "../../components/ProductList/ProductList";
// import PrivateRoute from "../../Utils/PrivateRoute";
// import PublicRoute from "../../Utils/PublicRoute";

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
        // props.history.push("/productlist");
      },
      (error) => {
        removeUserSession();
        props.history.push("/login");
      }
    );

  return (
    <div>
    <Menu />
    {/* <BrowserRouter>
        <div className="App">
          
          <Route path="/productlist" component={ProductList} />
        </div>
      </BrowserRouter> */}
     
      <input type="button" onClick={handleLogout} value="Logout" />
      <br />
      <br />
      <h1> Welcome {name}!</h1>
    </div>
  );
}
export default Dashboard;
