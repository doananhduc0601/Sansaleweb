import React, { Component } from "react";
import TaskItem from "./TaskItem";

export default function TaskList() {
 
  return (
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
            <tr>
              <td>1</td>
              <td>Học lập trình</td>
              <td class="text-center">
                <span class="label label-success">Kích Hoạt</span>
              </td>
              <td class="text-center">
                <button type="button" class="btn btn-warning">
                  <span class="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button type="button" class="btn btn-danger">
                  <span class="fa fa-trash mr-5"></span>Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// export default TaskList;
