import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "../Baiviet.css";
import { RiAddCircleLine } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
const API_URL = "https://localhost:5001/api";
const API_URL1 = "https://localhost:5001/Images";
const UPLOAD_ENDPOINT = "Images/";
const defaultImageSrc = "../assets/img/damir-bosnjak.jpg";

const initialFieldValues = {
  id: 0,
  name: "",
  // //code: "",
  metaTitle: "",
  // description: "",
  // image: "",
  // //moreImages: "",
  // price: "",
  // promotionPrice: "",
  // //includedVat: "",
  // quantity: "",
  categoryId: "",
  // detail: "",
  // warranty: "",
  // createdDate: "",
  // //createdBy: "",
  // modifiedDate: "",
  // //modifiedBy: "",
  // metaKeywords: "",
  // metaDescriptions: "",
  // status: "",
  tags: "",
  // viewCount: "",
  // link: "",
  // // category: null,
  content1: "",
  imageSrc: defaultImageSrc,
  imageFile: null,
};
export default function TaskForm_baiviet(props) {
  const { addOrEdit, recordForEdit } = props;
  const [values, setValues] = useState(initialFieldValues);
  const [addData, setVal] = useState("");
  const [errors, setErrors] = useState({});
  const { isVisible, setIsVisible } = props;

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
    setErrors({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("id", values.id);
      formData.append("name", values.name);
      formData.append("metaTitle", values.metaTitle);
      formData.append("content1", addData);
      formData.append("categoryId", values.categoryId);
      formData.append("tags", values.tags);
      addOrEdit(formData, resetForm);
    }
  };

  const applyErrorClass = (field) =>
    field in errors && errors[field] == false ? " invalid-field" : "";

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("imageFile", file);
            fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
              method: "post",
              body: body,
              // mode: "no-cors"
            })
              .then((response) => response.json())
              .then((content) => {
                resolve({
                  default: `${API_URL1}/${content.nameImage}`,
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  const handleChange = (e, editor) => {
    const data = editor.getData();
    // JSON.parse(data);
    setVal(data);
    // values.description(data);
  };
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
        <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Id</label>
                <input
                  class="form-control"
                  placeholder="id"
                  name="id"
                  value={values.id}
                  onChange={handleInputChange}
                  disabled
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Tên bài viết</label>
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
            <div class="col-md-6">
              <div class="form-group">
                <label>Tag</label>
                {/* <input type="text" class="form-control" placeholder="category" name="categoryId" value={values.categoryId} onChange={handleInputChange}/> */}
                <select
                  type="text"
                  class={"form-control" + applyErrorClass("tags")}
                  name="tags"
                  value={values.tags}
                  onChange={handleInputChange}
                >
                  <option>Chọn......</option>
                  <option value="a">a</option>
                  <option value="b">b</option>
                  <option value="c">c</option>
                  <option value="d">d</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Category ID</label>
                {/* <input type="text" class="form-control" placeholder="category" name="categoryId" value={values.categoryId} onChange={handleInputChange}/> */}
                <select
                  type="text"
                  class={"form-control" + applyErrorClass("categoryId")}
                  name="categoryId"
                  value={values.categoryId}
                  onChange={handleInputChange}
                >
                  <option>Chọn......</option>
                  <option value={1}>1 . Thiết Bị Điển Tử</option>
                  <option value={2}>2 . Quẩn Áo </option>
                  <option value={3}>3 . Food</option>
                  <option value={36}>4 . Quần áo</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Tiêu đề bài viết</label>
                <input
                  class={"form-control" + applyErrorClass("metaTitle")}
                  placeholder="...."
                  name="metaTitle"
                  value={values.metaTitle}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div className="baiviet">
              <h2 style={{ textAlign: "center" }}>Thêm Bài Viết</h2>
              <CKEditor
                onReady={(editor) => {
                  editor.ui
                    .getEditableElement()
                    .parentElement.insertBefore(
                      editor.ui.view.toolbar.element,
                      editor.ui.getEditableElement()
                    );
                  editor = editor;
                }}
                onError={({ willEditorRestart }) => {
                  if (willEditorRestart) {
                    this.editor.ui.view.toolbar.element.remove();
                  }
                }}
                onChange={handleChange}
                editor={DecoupledEditor}
                data={addData}
                config={{
                  extraPlugins: [uploadPlugin],
                }}
                name="content1"
                value={values.content1}
                onSubmit={handleInputChange}
              />
            </div>
            <div> {console.log(addData)}</div>
            <div>
              <textarea>{addData}</textarea>
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
    </>
  );
}
