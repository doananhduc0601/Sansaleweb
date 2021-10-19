import React, { useState, useEffect } from "react";
import TaskForm1 from "./component_category/TaskForm1";
import Control1 from "./component_category/Control1";
import TaskList1 from "./component_category/TaskList1";
import axios from "axios";
// import { NavItem } from "react-bootstrap";

export default function CategoryList() {
  const [employeeList, setEmployeeList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [isDisplayForm, setIsDisplayForm] = useState(false);

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

  return (
    <div class="container">
      {/* <div class="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div> */}
      <TaskForm1 addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Control1 />
        <TaskList1 showRecordDetails={showRecordDetails}
          onDelete={onDelete}
          employeeList={employeeList}/>
      </div>
    </div>
  );
}

// export default ProductList;
