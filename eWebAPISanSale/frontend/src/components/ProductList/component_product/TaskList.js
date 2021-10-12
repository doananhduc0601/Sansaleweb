import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  render() {
    var { tasks } = this.props; // var tasks = this.props.tasks
    var elmTasks = tasks.map((task, index) => {
      return <TaskItem key={task.id} index={index} task={task} />;
    });
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
              {/* vùng để lấy dữ liệu bên server: TaskItem */}
              {elmTasks}
              {/* --------- */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TaskList;
