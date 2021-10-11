import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <main className="from-signin">
              <Route path="/" exact component={Home} />
              <PublicRoute path="/login" exact component={Login} />
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
              {/* <Route path="/tablist" exact component={TableList}/> */}
            </main>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
