import React, { Component } from "react";
import "./header.css";
import { BsCursor, BsEnvelope, BsBriefcase } from "react-icons/bs";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-contact ">
          <div className="contact-phone ">
            <i>
              <BsCursor />
            </i>
            <p className="">0352222522</p>
          </div>
          <div className="contact-mail ">
            <i>
              <BsEnvelope />
            </i>
            <p className="">sansalehot@gmail.com</p>
          </div>
          <div className="contact-compa ">
            <i>
              <BsBriefcase />
            </i>
            <p className="">Company DT</p>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Header;
