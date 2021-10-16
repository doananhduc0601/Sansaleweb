import React, { Component } from "react";
import "./Home.css";
import Categorymenu from "../../../components/caterory_menu/caterory_menu";
import Slides from "../../../components/slide/slide";
import Dealsock from "../../../components/dealsock/dealsock";
import EmployeeList from "../../../components/productimage/EmployeeList";

class Home extends Component {
  render() {
    return (
      <div>
        <Slides />
        <Categorymenu />
        <Dealsock />
        {/* <EmployeeList/> */}
      </div>
    );
  }
}

export default Home;
