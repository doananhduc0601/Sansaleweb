import React, { useState, useEffect } from "react";
// import { AiFillCloseCircle } from "react-icons/ai";
import { RiAddCircleLine } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";

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
  // const onCloseForm = () => {
  //  props.onCloseForm();
  // };
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
  const [isVisible, setIsVisible] = useState(false);

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
    <>
      <button
        class="iconmofrom btn-primary"
        type="button"
        onClick={() => setIsVisible(false)}
        style={{ display: isVisible ? "block" : "none" }}
      >
        <AiOutlineCloseCircle />
      </button>
      <button
        class="iconmofrom btn-primary"
        type="button"
        onClick={() => setIsVisible(true)}
        style={{ display: isVisible ? "none" : "block" }}
      >
        <RiAddCircleLine />
      </button>
      <div class="row" style={{ display: isVisible ? "block" : "none" }}>
        <div class="col-md-12">
          <div class="card card-user">
            <div class="card-header">
              <h5 class="card-title">Edit Product</h5>
            </div>
            <div class="card-body">
              <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div class="row">
                  <div class="col-md-4 pr-1">
                    <div class="form-group">
                      <label>Id</label>
                      <input
                        class="form-control"
                        placeholder="id"
                        name="id"
                        value={values.id}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-md-8 pl-1">
                    <div class="form-group">
                      <label>Tên danh mục</label>
                      <input
                        class={"form-control" + applyErrorClass("name")}
                        placeholder="Tên sản phẩm"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                

                <div class="col-md-4 pr-1">
                  <div class="form-group">
                    <label>Trạng Thái </label>
                    <input
                      type=""
                      class="form-control"
                      placeholder="true"
                      name="status"
                      value={values.status}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div class="col-md-8 pl-1">
                  <div class="form-group">
                    <label>Tên danh mục</label>
                    <input
                      class={"form-control" + applyErrorClass("name")}
                      placeholder="Tên sản phẩm"
                      name="name"
                      value={values.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                </div>
                <div class="row">
                  <div class="update ml-auto mr-auto">
                    <button type="submit" class="btn btn-primary btn-round">
                      ADD/UPDATE
                    </button>
                  </div>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default TaskForm;