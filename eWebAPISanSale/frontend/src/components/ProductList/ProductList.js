import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";
import TaskForm from "../ProductList/component_product/TaskForm";

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
  

  return (
    <>
    
    <div class="container">
          
     
           
            
      <TaskForm addOrEdit={addOrEdit} recordForEdit={recordForEdit} />

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
                      <th>
                        Id
                      </th>
                      <th>
                        Tên
                      </th>
                      <th>
                        Giá Gốc
                      </th>
                      <th>
                        Giá Bán
                      </th>
                      <th>
                        Lượng Truy Cập
                      </th>
                      <th >
                        Hàng Tồn
                      </th>
                      <th >
                        Hình Ảnh
                      </th>
                      <th >
                        Trạng Thái 
                      </th>
                      <th >
                        Hành Động
                      </th>
                    
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
                            
                            <td className="text-center"> <img
                                  src={item.imageSrc}
                                  className="card-img-top"
                                  style={{ height: 50, width: 50}}
                                />
                              </td>

                            <td class="text-center">
                            
                            <span className={item.status == true ?"label label-success" : "label label-warning"}>
                                {item.status == true ? "Còn" : "Hết"}
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
                                <AiOutlineEdit/>
                            </button>
                            &nbsp;
                            <button
                                type="button"
                                class="btn btn-danger"
                                onClick={(e) => onDelete(e, parseInt(item.id))}
                            >
                               <AiOutlineDelete/>
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
