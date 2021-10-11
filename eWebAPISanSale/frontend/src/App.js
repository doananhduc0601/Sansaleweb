import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import Login from "./components/Login/Login";
// import Dashboard from "./components/Dashboard";
// import Home from "./components/Home";
// import PrivateRoute from "./Utils/PrivateRoute";
// import PublicRoute from "./Utils/PublicRoute";
import routes from "./routes";

import "./App.css";
import { render } from "@testing-library/react";

function App() extends Component{
  render(){
    return (
      <Router>
        <div>
          <div className="container">
            <main className="row">
              {/* <Route path="/" exact component={Home} />
              <PublicRoute path="/login" exact component={Login} />
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
              <Route path="/tablist" exact component={TableList}/> */}
              {this.showContentMenus(routes)}
            </main>
          </div>
        </div>
      <Router>
  );
  }
  
}

export default App;
