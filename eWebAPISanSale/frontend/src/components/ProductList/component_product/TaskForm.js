import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const defaultImageSrc = "/img/thecao.png";

const initialFieldValues = {
  id: 0,
  name: "anhduc",
  code: "123",
  metaTitle: "anh",
  description: "a",
  image: "",
  moreImages: "aa",
  price: "123",
  promotionPrice: "123",
  includedVat: true,
  quantity: "123",
  categoryId: "1",
  detail: "aa",
  warranty: "12",
  createdDate: "12/08/2021",
  createdBy: "d",
  modifiedDate: "12/08/2021",
  modifiedBy: "c",
  metaKeywords: "aaa",
  metaDescriptions: "aaa",
  status: "True",
  topHot: "11",
  viewCount: "12",
  link: "aa",
  // category: null,
  imageSrc: defaultImageSrc,
  imageFile: null,
};

export default function TaskForm(props) {
  ///////////////////// I. thành phần hiển thị bên trái
  // constructor(props) = () => {
  //   super(props);
  //   this.state = { id: "11", name: "22", status: false };
  // }
  ////////////////////////////////// Đóng thành phần bên trái //////////////////////////////////
  const onCloseForm = () => {
    this.props.onCloseForm();
  };
  ////////////////////////////////// Thêm dữ liệu //////////////////////////////////
  const onChange = (event) => {
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
  const onSubmit = () => {
    console.log(this.state);
  };
  ////////////////////////////////// render //////////////////////////////////

  /////////////////// II. thêm thành phần IMAGE
  const { addOrEdit, recordForEdit } = props;

  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (recordForEdit != null) setValues(recordForEdit);
  }, [recordForEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...values,
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSrc: defaultImageSrc,
      });
    }
  };

  const validate = () => {
    let temp = {};
    //temp.description = values.description == "" ? false : true;
    temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x == true);
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    document.getElementById("image-uploader").value = null;
    setErrors({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("id", values.id);
      formData.append("name", values.name);
      formData.append("code", values.code);
      formData.append("metaTitle", values.metaTitle);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("promotionPrice", values.promotionPrice);
      formData.append("quantity", values.quantity);
      formData.append("categoryId", values.categoryId);
      formData.append("detail", values.detail);
      formData.append("warranty", values.warranty);
      formData.append("createdDate", values.createdDate);
      formData.append("createdBy", values.createdBy);
      formData.append("modifiedDate", values.modifiedDate);
      formData.append("modifiedBy", values.modifiedBy);
      formData.append("metaKeywords", values.metaKeywords);
       formData.append("status", values.status);
      formData.append("viewCount", values.viewCount);
      formData.append("link", values.link);
      formData.append("image", values.image);
      formData.append("imageFile", values.imageFile);
      addOrEdit(formData, resetForm);
    }
  };

  const applyErrorClass = (field) =>
    ((field in errors && errors[field] == false) ? " invalid-field" : "");

  ///////////////////
  return (
    <div class="panel panel-warning">
      {/* 0. */}
      <div class="panel-heading">
        <h3 class="panel-title">
          Thêm Công Việc------------
          <AiFillCloseCircle
            style={{ color: "red", fontSize: "1.7em" }}
            onClick={onCloseForm}
            text-align="center"
          />
        </h3>
      </div>

      <div class="panel-body">
        {/* chuyền submit vào */}
        <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
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
          {/* 2. hình ảnh */}
          <img
            src={values.imageSrc}
            className="card-img-top"
            style={{ height: 250, width: 320, margin: 4 }}
          />
          <div className="form-group">
            <input
              type="file"
              accept="image/*"
              className={"form-control-file" + applyErrorClass("imageSrc")}
              onChange={showPreview}
              id="image-uploader"
            />
          </div>
          {/* 3. Thêm data */}
          <label>ID :</label>
          <input
            class="form-control"
            name="id"
            value={values.id}
            //value={this.state.id}
            onChange={handleInputChange}
          />
          <label>tên sản phẩm:</label>
          <input
            type="text"
            class="form-control"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
          <label>meta Title:</label>
          <input
            type="text"
            class="form-control"
            name="metaTitle"
            value={values.metaTitle}
            //value={this.state.name}
            onChange={handleInputChange}
          />
          <label>Miêu tả :</label>
          <input
            type="text"
            class="form-control"
            name="description"
            value={values.description}
            onChange={handleInputChange}
          />
          <label>Tên image:</label>
          <input
            type="text"
            class="form-control"
            name="image"
            value={values.image}
            onChange={handleInputChange}
          />
          <label>Giá đã giảm :</label>
          <input
            type="text"
            class="form-control"
            name="price"
            value={values.price}
            onChange={handleInputChange}
          />
          <label>Giá gốc :</label>
          <input
            type="text"
            class="form-control"
            name="promotionPrice"
            value={values.promotionPrice}
            onChange={handleInputChange}
          />
          <label>Hàng tồn :</label>
          <input
            type="text"
            class="form-control"
            name="quantity"
            value={values.quantity}
            onChange={handleInputChange}
          />
          <label>Category ID:</label>
          <input
            type="text"
            class="form-control"
            name="categoryId"
            value={values.categoryId}
            onChange={handleInputChange}
          />

          {/* <label>Category ID :</label>
          <select
            class="form-control"
            required="required"
            onChange={handleInputChange}
            name="categoryId"
            //value={values.categoryId}
          >
            <option value={values.categoryId}>1</option>
            <option value={values.categoryId}>2</option>
            <option value={values.categoryId}>3</option>
            <option value={values.categoryId}>4</option>
          </select> */}

          <label>Chi tiết :</label>
          <input
            type="text"
            class="form-control"
            name="detail"
            value={values.detail}
            onChange={handleInputChange}
          />
          <label>Bảo hiểm :</label>
          <input
            type="text"
            class="form-control"
            name="warranty"
            value={values.warranty}
            onChange={handleInputChange}
          />
          <label>Ngày Tạo :</label>
          <input
            type="text"
            class="form-control"
            name="createdDate"
            value={values.createdDate}
            onChange={handleInputChange}
          />
          <label>Tạo bởi ai :</label>
          <input
            type="text"
            class="form-control"
            name="createdBy"
            value={values.createdBy}
            onChange={handleInputChange}
          />
          <label>ngày sửa :</label>
          <input
            type="text"
            class="form-control"
            name="modifiedDate"
            value={values.modifiedDate}
            onChange={handleInputChange}
          />
          <label>sửa lại bởi ai :</label>
          <input
            type="text"
            class="form-control"
            name="modifiedBy"
            value={values.modifiedBy}
            onChange={handleInputChange}
          />
          <label>Từ khóa :</label>
          <input
            type="text"
            class="form-control"
            name="metaKeywords"
            value={values.metaKeywords}
            onChange={handleInputChange}
          />
          {/* <label>Status:</label>
          <select
            class="form-control"
            required="required"
            name="status"
            value={values.status}
            onChange={handleInputChange}
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select> */}
          <label>Status :</label>
          <input
            type="text"
            class="form-control"
            name="status"
            value={values.status}
            onChange={handleInputChange}
          />
          <label>Số lượng đã xem :</label>
          <input
            type="text"
            class="form-control"
            name="viewCount"
            value={values.viewCount}
            onChange={handleInputChange}
          />
          <label>Link :</label>
          <input
            type="text"
            class="form-control"
            name="link"
            value={values.link}
            onChange={handleInputChange}
          />
          <br />
          <div class="text-center">
            <button type="submit" class="btn btn-warning">
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// export default TaskForm;
