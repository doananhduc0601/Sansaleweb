import React, { Component } from "react";
import TaskForm from "./component_product/TaskForm";
import Control from "./component_product/Control";
import TaskList from "./component_product/TaskList";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], isDisplayForm: false };
  }

  //  1. tạo mảng và lưu giá trị vào, sau đó hiển thị
  onGenerateData = () => {
    var tasks = [
      { id: 2, name: "a", status: true },
      { id: 4, name: "b", status: false },
      { id: 1, name: "c", status: true },
    ];
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // 2. chuyển đổi button "Thêm" thành true/false
  onToggleForm = () => {
    this.setState({ isDisplayForm: true });
  };

  onCloseForm = () => {
    this.setState({ isDisplayForm: false });
  };
  render() {
    var { tasks, isDisplayForm } = this.state;
    var elmTaskForm = isDisplayForm ? (
      <TaskForm onCloseForm={this.onCloseForm} />
    ) : (
      ""
    );
    return (
      <div class="container">
        <div class="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div class="row">
          {/* Phần bên trái */}
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">{elmTaskForm}</div>
          {/* phần bên phải */}
          <div
            class={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span class="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.onGenerateData}
            >
              <span class="fa fa-plus mr-5"></span>Generate
            </button>
            <Control />

            <TaskList tasks={tasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
