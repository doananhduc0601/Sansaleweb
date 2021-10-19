import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import TaskForm from "../CategoryList/component_category/TaskForm1";
import Setting from "../Setting/Setting";
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
    if (alert.confirm("Are you sure to delete this record?"))
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
  // const onToggleForm = () => {
  //   this.setState({ isDisplayForm: true });
  // };

  // onCloseForm = () => {
  //   this.setState({ isDisplayForm: false });
  // };
  // var { tasks, isDisplayForm } = this.state;
  // var elmTaskForm = isDisplayForm ? (
  //   <TaskForm onCloseForm={this.onCloseForm} />
  // ) : (
  //   ""
  // );
  return (
    <>
      <div class="container">
        <Setting />
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title"> Product </h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead class=" text-primary">
                      <th>Id</th>
                      <th>Tên</th>
                      <th>Giá Gốc</th>
                      <th>Giá Bán</th>
                      <th>Lượng Truy Cập</th>
                      <th>Hàng Tồn</th>
                      <th>Hình Ảnh</th>
                      <th>Trạng Thái</th>
                      <th>Hành Động</th>
                    </thead>
                    <tbody>
                      {employeeList.map((item) => {
                        return (
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.promotionPrice}</td>
                            <td>{item.price}</td>
                            <td>{item.viewCount}</td>
                            <td>{item.quantity}</td>
                            <td className="text-center">
                              {" "}
                              <img
                                src={item.imageSrc}
                                className="card-img-top"
                                style={{ height: 50, width: 50 }}
                              />
                            </td>

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
                                <AiOutlineEdit />
                              </button>
                              &nbsp;
                              <button
                                type="button"
                                class="btn btn-danger"
                                onClick={(e) => onDelete(e, parseInt(item.id))}
                              >
                                <AiOutlineDelete />
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
      </div>
    </>
  );
}

// export default ProductList;
