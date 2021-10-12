import React, { Component } from "react";

class TaskForm extends Component {
  render() {
    return (
      <div class="panel panel-warning">
        <div class="panel-heading">
          <h3 class="panel-title">Thêm Công Việc</h3>
        </div>
        <div class="panel-body">
          <form>
            <div class="form-group">
              <label>ID :</label>
              <input type="text" class="form-control" />
            </div>
            <label>tên :</label>
            <select class="form-control" required="required">
              <option value="1">Kích Hoạt</option>
              <option value="0">Ẩn</option>
            </select>
            <label>tên bài viết :</label>
            <input type="text" class="form-control" />
            <label>Miêu tả :</label>
            <input type="text" class="form-control" />
            <label>Tên :</label>
            <input type="text" class="form-control" />
            <label>Giá đã giảm :</label>
            <input type="text" class="form-control" />
            <label>Giá gốc :</label>
            <input type="text" class="form-control" />
            <label>Thuế :</label>
            <input type="text" class="form-control" />
            <label>Hàng tồn :</label>
            <input type="text" class="form-control" />
            <label>Category ID :</label>
            <input type="text" class="form-control" />
            <label>Chi tiết :</label>
            <input type="text" class="form-control" />
            <label>Bảo hiểm :</label>
            <input type="text" class="form-control" />
            <label>Ngày Tạo :</label>
            <input type="text" class="form-control" />
            <label>Ngày sửa :</label>
            <input type="text" class="form-control" />
            <label>Từ khóa :</label>
            <input type="text" class="form-control" />
            <label>Tình trạng :</label>
            <input type="text" class="form-control" />
            <label>TopHot :</label>
            <input type="text" class="form-control" />
            <label>Số lượng đã xem :</label>
            <input type="text" class="form-control" />
            <label>Link :</label>
            <input type="text" class="form-control" />
            <br />

            <div class="text-center">
              <button type="submit" class="btn btn-warning">
                Thêm
              </button>
              &nbsp;
              <button type="submit" class="btn btn-danger">
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
