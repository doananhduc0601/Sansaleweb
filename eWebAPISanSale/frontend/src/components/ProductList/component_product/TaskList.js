import React, { Component } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function TaskList(props) {
  const { isVisible, setIsVisible } = props;
  return (
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title"> Product </h4>
          </div>
          <div class="card-body">
            <div class="table-responsive my-custom-scrollbar table-wrapper-scroll-y">
              <table class="table" >
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
                  {props.employeeList.map((item) => {
                    return (
                      <tr>
                        <td>{item.id}</td>
                        <td >{item.name}</td>
                        <td>{item.promotionPrice}</td>
                        <td>{item.price}</td>
                        <td>{item.viewCount}</td>
                        <td>{item.quantity}</td>
                       
                        <td className="text-center">
                          <img
                            src={item.imageSrc}
                            className="card-img-top"
                            style={{ height: 50, width: 50 }}
                          />
                        </td>

                        <td class="text-center">
                          <span
                            className={
                              item.status == true
                                ? "label label-success"
                                : "label label-warning"
                            }
                          >
                            {item.status == true ? "Còn" : "Hết"}
                          </span>
                        </td>
                        <td class="text-center">
                          <button
                            type="button"
                            class="btn btn-warning"
                            onClick={() => {
                              props.showRecordDetails(item);
                              props.setIsVisible(true);
                            }}
                          >
                            <AiOutlineEdit />
                          </button>
                          &nbsp;
                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={(e) =>
                              props.onDelete(e, parseInt(item.id))
                            }
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
  );
}
