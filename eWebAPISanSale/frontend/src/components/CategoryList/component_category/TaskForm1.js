import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

// const defaultImageSrc = "/img/thecao.png";

const initialFieldValues = {
  id: 0,
  nameCategory: "",
  status: "",
  metaTitle: "",
  // contents: "",
  // products: "",
  // imageSrc: defaultImageSrc,
  // imageFile: null,
};

export default function TaskForm(props) {
  ///////////////////// I. thành phần hiển thị bên trái
  // constructor(props) = () => {
  //   super(props);
  //   this.state = { id: "11", name: "22", status: false };
  // }
  ////////////////////////////////// Đóng thành phần bên trái //////////////////////////////////
  const onCloseForm = () => {
    props.onCloseForm();
  };
  ////////////////////////////////// Thêm dữ liệu //////////////////////////////////
  // const onChange = (event) => {
  //   var target = event.target;
  //   var id = target.id;
  //   var name = target.name;
  //   var value = target.value;
  //   this.state({
  //     [name]: value,
  //     // [id]: value,
  //   });
  // };
  ////////////////////////////////// sự kiện submit //////////////////////////////////
  // const onSubmit = () => {
  //   console.log(this.state);
  // };
  ////////////////////////////////// render //////////////////////////////////

  /////////////////// II. thêm thành phần IMAGE
  const { addOrEdit, recordForEdit } = props;

  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});
  // const [isVisible, setIsVisible] = props;

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
          // imageFile,
          // imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        // imageFile: null,
        // imageSrc: defaultImageSrc,
      });
    }
  };

  const validate = () => {
    let temp = {};
    temp.nameCategory = values.nameCategory == "" ? false : true;
    temp.metaTitle = values.metaTitle == "" ? false : true;
    //temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x == true);
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    //document.getElementById("image-uploader").value = null;
    setErrors({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("id", values.id);
      formData.append("nameCategory", values.nameCategory);
      formData.append("status", values.status);
      formData.append("metaTitle", values.metaTitle);
      addOrEdit(formData, resetForm);
    }
  };

  const applyErrorClass = (field) =>
    field in errors && errors[field] == false ? " invalid-field" : "";

  ///////////////////
  return (
    <div class="panel panel-warning">
      {/* 0. */}
      <div class="panel-heading">
        <h3 class="panel-title">
          Thêm Công Việc------------
          <AiFillCloseCircle
            onClick={onCloseForm}
            style={{ color: "red", fontSize: "1.7em" }}
            text-align="center"
          />
        </h3>
      </div>

      <div class="panel-body">
        {/* chuyền submit vào */}
        <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
          <label>ID :</label>
          <input
            class="form-control"
            name="id"
            value={values.id}
            onChange={handleInputChange}
          />
          <label>tên sản phẩm:</label>
          <input
            type="text"
            class="form-control"
            name="nameCategory"
            value={values.nameCategory}
            onChange={handleInputChange}
          />
          <label>Status:</label>
          <select
            class="form-control"
            required="required"
            name="status"
            value={values.status}
            onChange={handleInputChange}
          >
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
          <label>Meta Title:</label>
          <input
            type="text"
            class={"form-control" + applyErrorClass("metaTitle")}
            name="metaTitle"
            value={values.metaTitle}
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
