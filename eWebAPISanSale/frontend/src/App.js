import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/DashBoard/Dashboard";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import Home from "./pages/HomePage/Trangchu/Home";

class App extends Component {
  render() {
    return (
      
      <Router>
        <Home/>
        <div className="App">
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
