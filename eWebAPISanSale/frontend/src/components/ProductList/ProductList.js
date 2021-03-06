import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "../ProductList/component_product/TaskForm";
import TaskList from "./component_product/TaskList";
import Control from "./component_product/Control";

export default function ProductList(props) {
  const [employeeList, setEmployeeList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState(0);
  const [url, setUrl] = useState();

  useEffect(() => {
    refreshEmployeeList();
  }, []);

  // const select = () => {
  //   if (number == 0) {
  //     setUrl = "https://localhost:5001/api/Products/";
  //   } else if (number == 1) {
  //     setUrl = "https://localhost:5001/api/Products/GetProducts_a_z";
  //   } else if (number == 2) {
  //     setUrl = "https://localhost:5001/api/Products/GetProducts_z_a";
  //   }
  // };

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

  return (
    <>
      <div class="container">
        <TaskForm
          addOrEdit={addOrEdit}
          recordForEdit={recordForEdit}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
        <Control
          employeeList={employeeList}
          setSearch={setSearch}
          setNumber={setNumber}
        />
        <TaskList
          showRecordDetails={showRecordDetails}
          onDelete={onDelete}
          employeeList={employeeList}
          setIsVisible={setIsVisible}
          isVisible={isVisible}
          search={search}
          number={number}
        />
        {/* {employeeList
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((item, i) => {
            return (
              <td class="row" key={i}>
                <td>{item.name}</td>
              </td>
            );
          })} */}
      </div>
    </>
  );
}

// export default ProductList;
