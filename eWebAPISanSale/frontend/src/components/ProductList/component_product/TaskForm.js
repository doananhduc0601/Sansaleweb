import React, { Component } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "11", name: "22", status: false };
  }
  ////////////////////////////////// Đóng thành phần bên trái //////////////////////////////////
  onCloseForm = () => {
    this.props.onCloseForm();
  };
  ////////////////////////////////// Thêm dữ liệu //////////////////////////////////
  onChange = (event) => {
    var target = event.target;
    var id = target.id;
    var name = target.name;
    var value = target.value;
    this.state({
      [name]: value,
      // [id]: value,
    });
  };
  ////////////////////////////////// sự kiện submit //////////////////////////////////
  onSubmit = () => {
    console.log(this.state);
  };
  ////////////////////////////////// render //////////////////////////////////
  render() {
    const style = { color: "red", fontSize: "1.7em" };
    return (
      <div class="panel panel-warning">
        {/* 0. */}
        <div class="panel-heading">
          <h3 class="panel-title">
            Thêm Công Việc------------
            <AiFillCloseCircle
              style={style}
              onClick={this.onCloseForm}
              text-align="center"
            />
          </h3>
        </div>

        <div class="panel-body">
          {/* chuyền submit vào */}
          <form onSubmit={this.onSubmit}>
            {/* 1. Hiển thị Category và chọn */}
            <div class="form-group">
              <label>Danh mục :</label>
              <select class="form-control" required="required">
                <option value="0">Điện tử</option>
                <option value="1">Mỹ phẩm</option>
                <option value="1">Card điện thoại</option>
                <option value="1">Cần, ke, kẹo, cỏ</option>
              </select>
            </div>

            {/* 2. Thêm data */}
            <label>ID :</label>
            <input
              type="text"
              class="form-control"
              name="id"
              value={this.state.id}
              onChange={this.onchange}
            />
            <label>tên :</label>
            <select
              class="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onchange}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>

            <label>tên bài viết :</label>
            <input
              type="text"
              class="form-control"
              name="name"
              value={this.state.name}
              onChange={this.onchange}
            />

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
