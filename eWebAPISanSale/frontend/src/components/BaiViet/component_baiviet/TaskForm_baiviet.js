import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "../Baiviet.css";
const API_URL = "https://localhost:5001/api";
const API_URL1 = "https://localhost:5001/Images";
const UPLOAD_ENDPOINT = "Contents/";
const defaultImageSrc = "../assets/img/damir-bosnjak.jpg";

const initialFieldValues = {
  id: 0,
  // name: "",
  // //code: "",
  // metaTitle: "",
  description: "",
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
  // //topHot: "",
  // viewCount: "",
  // link: "",
  // // category: null,
  imageSrc: defaultImageSrc,
  imageFile: null,
};
export default function MyEditor({ handleChange, ...props }) {
  const { addOrEdit, recordForEdit } = props;
  const [values, setValues] = useState();
  const [errors, setErrors] = useState({});
  const { isVisible, setIsVisible } = props;
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("imageFile", file);
            body.append("categoryId", 1);
            body.append("image", null);
            // let headers = new Headers();
            // headers.append("Origin", "http://localhost:3000");
            fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
              method: "post",
              body: body,
              // mode: "no-cors"
            })
              .then((response) => response.json())
              .then((content) => {
                resolve({
                  default: `${API_URL1}/${content.image}`,
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

  return (
    <div className="container">
      <div className="baiviet">
        <h2 style={{ textAlign: "center" }}>Thêm Bài Viết</h2>
        <CKEditor
          onReady={(editor) => {
            console.log("Editor is ready to use!", editor);
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
          // onChange={(event, editor) => console.log({ event, editor })}
          editor={DecoupledEditor}
          data="<p>Mời Bạn Nhập!</p>"
          config={{
            extraPlugins: [uploadPlugin],
          }}
          // value={values.description}
          // onSubmit={handleInputChange}
        />
      </div>
      {/* <div class="author">
        <img
          src={values.imageSrc}
          style={{ height: 250, width: 250, marginTop: 30 }}
        />
      </div> */}
      {/* <input
        type="file"
        accept="image/*"
        className="form-control-file"
        onChange={showPreview}
        id="image-uploader"
      /> */}

      <div class="row">
        <div class="update ml-auto mr-auto">
          <button type="submit" class="btn btn-primary btn-round">
            ADD/UPDATE
          </button>
        </div>
      </div>
    </div>
  );
}
