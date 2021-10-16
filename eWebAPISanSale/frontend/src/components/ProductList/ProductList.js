import React, { useState, useEffect } from "react";
import TaskForm from "./component_product/TaskForm";
import Control from "./component_product/Control";
import TaskList from "./component_product/TaskList";
import axios from "axios";

export default function ProductList() {
  const [employeeList, setEmployeeList] = useState([])
  const [recordForEdit, setRecordForEdit] = useState(null)

  useEffect(() => {
      refreshEmployeeList();
  }, [])

  const employeeAPI = (url = 'https://localhost:5001/api/Products/') => {
      return {
          fetchAll: () => axios.get(url),
          create: newRecord => axios.post(url, newRecord),
          update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
          delete: id => axios.delete(url + id)
      }
  }

  function refreshEmployeeList() {
      employeeAPI().fetchAll()
          .then(res => {
              setEmployeeList(res.data)
          })
          .catch(err => console.log(err))
  }

  const addOrEdit = (formData, onSuccess) => {
      if (formData.get('id') == "0")
          employeeAPI().create(formData)
              .then(res => {
                  onSuccess();
                  refreshEmployeeList();
              })
              .catch(err => console.log(err))
      else
          employeeAPI().update(formData.get('id'), formData)
              .then(res => {
                  onSuccess();
                  refreshEmployeeList();
              })
              .catch(err => console.log(err))
  }

  const showRecordDetails = data => {
      setRecordForEdit(data)
  }

  const onDelete = (e, id) => {
      e.stopPropagation();
      if (window.confirm('Are you sure to delete this record?'))
          employeeAPI().delete(id)
              .then(res => refreshEmployeeList())
              .catch(err => console.log(err))
  }

  const imageCard = data => (
      <div className="card" onClick={() => { showRecordDetails(data) }}>
          <img src={data.imageSrc} className="card-img-top rounded-circle" />
          <div className="card-body">
              <h5>{data.employeeName}</h5>
              <span>{data.occupation}</span> <br />
              <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.id))}>
                  <i className="far fa-trash-alt"></i>
              </button>
          </div>
      </div>
  )


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
    <div class="container">
      <div class="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div class="row">
        {/* Phần bên trái */}
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <TaskForm  addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit} />
        </div>
        {/* phần bên phải */}
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <button
            type="button"
            class="btn btn-primary"
            //onClick={this.onToggleForm}
          >
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
          {/* <TaskList employeeList={employeeList}/> */}

          <div class="row mt-15">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-15">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th class="text-center">STT</th>
              <th class="text-center">Tên</th>
              <th class="text-center">Trạng Thái</th>
              <th class="text-center">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input type="text" class="form-control" />
              </td>
              <td>
                <select class="form-control">
                  <option value="-1">Tất Cả</option>
                  <option value="0">Ẩn</option>
                  <option value="1">Kích Hoạt</option>
                </select>
              </td>
              <td></td>
            </tr>

            {employeeList.map(item=>{
              return <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td class="text-center">
                <span class="label label-success">Kích Hoạt</span>
              </td>
              <td class="text-center">
                <button type="button" class="btn btn-warning"  onClick={() => { showRecordDetails(item) }}>Sửa
                  {/* <span class="fa fa-pencil mr-5"></span> */}
                </button>
                &nbsp;
                <button type="button" class="btn btn-danger" onClick={e => onDelete(e, parseInt(item.id))}>
                Xóa
                </button>
              </td>
            </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
    {/* const imageCard = data => (
      <div className="card" onClick={() => { showRecordDetails(data) }}>
          <img src={data.imageSrc} className="card-img-top rounded-circle" />
          <div className="card-body">
              <h5>{data.employeeName}</h5>
              <span>{data.occupation}</span> <br />
              <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.id))}>
                  <i className="far fa-trash-alt"></i>
              </button>
          </div>
      </div>
  ) */}


          {/* tasks={tasks} */}
        </div>
      </div>
    </div>
  );
}

// export default ProductList;
