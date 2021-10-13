import React, { Component } from "react";
import Sort from "./Sort";
import Search from "./Search";

class Control extends Component {
  render() {
    return (
      <div class="row mt-15">
        {/* 2.1. Tìm kiếm theo tên */}
        <Search />

        {/* 2.2. Sắp xếp a-z */}
        <Sort />
      </div>
    );
  }
}

export default Control;
