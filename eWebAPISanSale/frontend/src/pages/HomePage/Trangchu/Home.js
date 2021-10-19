import React, { Component } from "react";
import "./Home.css";
import Categorymenu from "../../../components/caterory_menu/caterory_menu";
import Slides from "../../../components/slide/slide";
import Dealsock from "../../../components/dealsock/dealsock";
import EmployeeList from "../../../components/productimage/EmployeeList";
import Homemenu from "../../../components/menuhome/homemenu";
import Header from "../../../components/headerconteact/header";
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Homemenu />
        <Slides />
        <Categorymenu />
        <Dealsock />
        <EmployeeList />
      </div>
    );
  }
}

export default Home;
