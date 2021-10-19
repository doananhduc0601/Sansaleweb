import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "../ProductList/component_product/TaskForm";
import TaskList from "./component_product/TaskList";

export default function ProductList() {
  const [employeeList, setEmployeeList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);

  useEffect(() => {
    refreshEmployeeList();
  }, []);

  const employeeAPI = (url = "https://localhost:5001/api/Products/") => {
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
          window.confirm("Bạn đã Thêm thành công");
        })
        .catch((err) => {
          console.log(err);
          window.confirm("Bạn đã Thêm thất bại");
        });
    else
      employeeAPI()
        .update(formData.get("id"), formData)
        .then((res) => {
          onSuccess();
          refreshEmployeeList();
          window.confirm("Bạn đã update thành công");
        })
        .catch((err) => {
          console.log(err);
          window.confirm("Mời bạn nhập lại");
        });
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

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div class="container">
        <TaskForm
          addOrEdit={addOrEdit}
          recordForEdit={recordForEdit}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />

        <TaskList
          showRecordDetails={showRecordDetails}
          onDelete={onDelete}
          employeeList={employeeList}
          setIsVisible={setIsVisible}
          isVisible={isVisible}
        />
      </div>
    </>
  );
}

// export default ProductList;
