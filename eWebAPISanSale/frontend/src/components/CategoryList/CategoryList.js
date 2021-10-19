import React, { useState, useEffect } from "react";
import TaskForm from "./component_category/TaskForm1";
import Control from "./component_category/Control1";
import TaskList from "./component_category/TaskList1";
import axios from "axios";
// import { NavItem } from "react-bootstrap";

export default function CategoryList() {
  const [employeeList, setEmployeeList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    refreshEmployeeList();
  }, []);

  const employeeAPI = (url = "https://localhost:5001/api/Categories/") => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  };

  function refreshEmployeeList() {
    employeeAPI()
      .fetchAll()
      .then((res) => {
        setEmployeeList(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  const addOrEdit = (formData, onSuccess) => {
    if (formData.get("id") == "0")
      employeeAPI()
        .create(formData)
        .then((res) => {
          onSuccess();
          refreshEmployeeList();
        })
        .catch((err) => console.log(err));
    else
      employeeAPI()
        .update(formData.get("id"), formData)
        .then((res) => {
          onSuccess();
          refreshEmployeeList();
        })
        .catch((err) => console.log(err));
  };

  const showRecordDetails = (data) => {
    setRecordForEdit(data);
  };

  const onDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm("Are you sure to delete this record?"))
      employeeAPI()
        .delete(id)
        .then((res) => refreshEmployeeList())
        .catch((err) => console.log(err));
  };

  /////////////////////// I. Thành phần cũ /////
  // constructor(props) {
  //   super(props);
  //   this.state = { tasks: [], isDisplayForm: false };
  // }

  //  1. tạo mảng và lưu giá trị vào, sau đó hiển thị
  // onGenerateData = () => {
  //   var tasks = [
  //     { id: 2, name: "a", status: true },
  //     { id: 4, name: "b", status: false },
  //     { id: 1, name: "c", status: true },
  //   ];
  //   this.setState({ tasks: tasks });
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // };

  // 2. chuyển đổi button "Thêm" thành true/false

  // onCloseForm = () => {
  //   this.setState({ isDisplayForm: false });
  // };
  // var { tasks, isDisplayForm } = this.state;
  // var elmTaskForm = isDisplayForm ? (
  //   <TaskForm onCloseForm={this.onCloseForm} />
  // ) : (
  //   ""
  // );

  const ontoggle = () => {
    setIsDisplay(true);
  };

  const onCloseForm = () => {
    setIsDisplay(false);
  };
  const elmTaskForm = isDisplay ? (
    <TaskForm
      addOrEdit={addOrEdit}
      recordForEdit={recordForEdit}
      // setIsVisible={setIsVisible}
      onCloseForm={onCloseForm}
    />
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
        <div class={isDisplay ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
          {/* <TaskForm addOrEdit={addOrEdit} recordForEdit={recordForEdit} /> */}
          {elmTaskForm}
        </div>
        {/* phần bên phải */}
        <div
          class={
            isDisplay
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
          }
        >
          <button type="button" class="btn btn-primary" onClick={ontoggle}>
            <span class="fa fa-plus mr-5"></span>Thêm Công Việc
          </button>
          <button
            type="button"
            class="btn btn-primary"
            //onClick={this.onGenerateData}
          >
            <span class="fa fa-plus mr-5"></span>Generate
          </button>
          <Control />
          <div class="row mt-15">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-15">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th class="text-center">STT</th>
                    <th class="text-center">Tên danh mục</th>
                    <th class="text-center">Meta Title</th>
                    <th class="text-center">Trạng Thái</th>
                    <th class="text-center">Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeList.map((item) => {
                    return (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.nameCategory}</td>
                        <td>{item.metaTitle}</td>
                        <td class="text-center">
                          <span class="label label-success">
                            {item.status == true ? "true" : "-----"}
                          </span>
                        </td>
                        <td class="text-center">
                          <button
                            type="button"
                            class="btn btn-warning"
                            onClick={() => {
                              showRecordDetails(item);
                            }}
                          >
                            <span class="fa fa-pencil mr-5"></span>Sửa
                          </button>
                          &nbsp;
                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={(e) => onDelete(e, parseInt(item.id))}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default ProductList;
