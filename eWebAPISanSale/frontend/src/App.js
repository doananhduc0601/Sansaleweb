import React, { Component } from "react";
import "./App.css";
import { BrowserRouter,Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/DashBoard/Dashboard";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import Home from "./pages/HomePage/Trangchu/Home";
import Baiviet from "./pages/HomePage/BaiViet/Baiviet";
import Menuhome from "./components/menuhome/menuhome";
import Header from "./components/headerconteact/header";
import ProductList from "./components/ProductList/ProductList"
class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        
        <div className="App">
          <Header/>
          
     
          <Route path="/" exact component={Home}/>
          <Route path="/baiviet"  component={Baiviet}/>
          <Route path="/productlist"  component={ProductList}/>
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
