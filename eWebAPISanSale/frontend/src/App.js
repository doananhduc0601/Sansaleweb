import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard";
import Menu from "./components/Menu/Menu";
import Nav from "./Nav";

import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
// import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          {/* <Nav /> */}
          {/* <main className="row"> */}
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          {/* <Route path="/tablist" exact component={TableList}/> */}
          {/* {this.showContentMenus(routes)} */}
          {/* </main> */}
        </div>
      </Router>
    );
  }
}

export default App;
