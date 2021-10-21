// import React, { useState, useEffect } from "react";
// import { RiAddCircleLine } from "react-icons/ri";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import "../Baiviet.css";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import axios from "axios";

// const defaultImageSrc = "../assets/img/damir-bosnjak.jpg";

// const initialFieldValues = {
//   id: 0,
//   name: "",
//   //code: "",
//   metaTitle: "",
//   description: "",
//   image: "",
//   //moreImages: "",
//   price: "",
//   promotionPrice: "",
//   //includedVat: "",
//   quantity: "",
//   categoryId: "",
//   //detail: "",
//   warranty: "",
//   createdDate: "",
//   //createdBy: "",
//   modifiedDate: "",
//   //modifiedBy: "",
//   metaKeywords: "",
//   metaDescriptions: "",
//   status: "",
//   //topHot: "",
//   viewCount: "",
//   link: "",
//   // category: null,
//   imageSrc: defaultImageSrc,
//   imageFile: null,
// };
// function uploadImageCallBack(file) {
//   return new Promise(
//     (resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       axios.open('POST', 'https://localhost:5001/api/Contents/');
//       const data = new FormData();
//       data.append('image', file);
//       axios.send(data);
//       axios.addEventListener('load', () => {
//         const response = JSON.parse(axios.responseText);
//         resolve(response);
//       });
//       axios.addEventListener('error', () => {
//         const error = JSON.parse(axios.responseText);
//         reject(error);
//       });
//     }
//   );
// }

// export default function TaskForm_baiviet(props) {
 


 
  // const { addOrEdit, recordForEdit } = props;
  // const [values, setValues] = useState(initialFieldValues);
  // const [errors, setErrors] = useState({});
  // const { isVisible, setIsVisible } = props;

//   useEffect(() => {
//     if (recordForEdit != null) setValues(recordForEdit);
//   }, [recordForEdit]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const showPreview = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       let imageFile = e.target.files[0];
//       const reader = new FileReader();
//       reader.onload = (x) => {
//         setValues({
//           ...values,
//           imageFile,
//           imageSrc: x.target.result,
//         });
//       };
//       reader.readAsDataURL(imageFile);
//       console.log(errors)
//     } else {
//       setValues({
//         ...values,
//         imageFile: null,
//         imageSrc: defaultImageSrc,
//       });
//     }
//   };

//   const validate = () => {
//     let temp = {};
//     //temp.description = values.description == "" ? false : true;
//     temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
//     setErrors(temp);
//     return Object.values(temp).every((x) => x == true);
//   };

//   const resetForm = () => {
//     setValues(initialFieldValues);
//     // document.getElementById("image-uploader").value = null;
//     setErrors({});
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       const formData = new FormData();
//       formData.append("id", values.id);
//       //   formData.append("name", values.name);
//       //   formData.append("code", values.code);
//       //   formData.append("metaTitle", values.metaTitle);
//       //   formData.append("description", values.description);
//       //   formData.append("price", values.price);
//       //   formData.append("promotionPrice", values.promotionPrice);
//       //   formData.append("quantity", values.quantity);
//       formData.append("categoryId", values.categoryId);
//       //   formData.append("detail", values.detail);
//       // formData.append("warranty", values.warranty);
//       // formData.append("createdDate", values.createdDate);
//       // formData.append("createdBy", values.createdBy);
//       // formData.append("modifiedDate", values.modifiedDate);
//       // formData.append("modifiedBy", values.modifiedBy);
//       //   formData.append("metaKeywords", values.metaKeywords);
//       //   formData.append("status", values.status);
//       //   formData.append("viewCount", values.viewCount);
//       //   formData.append("link", values.link);
//       formData.append("image", values.image);
//       formData.append("imageFile", values.imageFile);
//       addOrEdit(formData, resetForm);
//     }
//   };

//   const applyErrorClass = (field) =>
//     field in errors && errors[field] == false ? " invalid-field" : "";
//   return (
//     <>
//       <button
//         class="iconmofrom btn-primary"
//         type="button"
//         onClick={() => setIsVisible(false)}
//         style={{ display: isVisible ? "block" : "none" }}
//       >
//         <AiOutlineCloseCircle />
//       </button>
//       <button
//         class="iconmofrom btn-primary"
//         type="button"
//         onClick={() => setIsVisible(true)}
//         style={{ display: isVisible ? "none" : "block" }}
//       >
//         <RiAddCircleLine />
//       </button>
//       <div class="row" style={{ display: isVisible ? "block" : "none" }}>
//         <div class="col-md-12">
//           <div class="card card-user">
//             <div class="card-header">
//               <h5 class="card-title">Edit Product</h5>
//             </div>
//             <div class="card-body">
//               <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
//                 <div class="row">
//                   <div class="col-md-3 pr-1">
//                     <div class="form-group">
//                       <label>Id</label>
//                       <input
//                         class="form-control"
//                         placeholder="id"
//                         name="id"
//                         value={values.id}
//                         onChange={handleInputChange}
//                       />
//                     </div>
                 


//                   {/* ------------- */}

//                   <div class="col-md-4">
//                     <div class="form-group">
//                       <label>Category</label>
//                       {/* <input type="text" class="form-control" placeholder="category" name="categoryId" value={values.categoryId} onChange={handleInputChange}/> */}
//                       <select
//                         type="text"
//                         class={"form-control" + applyErrorClass("category")}
//                         name="categoryId"
//                         value={values.categoryId}
//                         onChange={handleInputChange}
//                       >
//                         <option value={1}>1 . Thiết Bị Điển Tử</option>
//                         <option value={2}>2 . Quẩn Áo </option>
//                         <option value={3}>3 . Food</option>
//                         <option value={4}>4 . Nội Thất</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>


//                 <div class="col-md-12">
//                   <div class="form-group">
                    
//                       <label>Mô tả</label>
//                      <Editor
//                         // editorState={editorState}
//                         // onEditorStateChange={this.onEditorStateChange}    
//                         toolbar={{
//                           inline: { inDropdown: true },
//                           list: { inDropdown: true },
//                           textAlign: { inDropdown: true },
//                           link: { inDropdown: true },
//                           history: { inDropdown: true },
//                           image: { uploadCallback: showPreview, alt: { present: true, mandatory: true } },
//                   }}
                      
                     
//                    />
                   
               
//                     </div>
//                   </div>
//                 </div>

//                 <div class="row">
//                   <div class="update ml-auto mr-auto">
//                     <button type="submit" class="btn btn-primary btn-round">
//                       ADD/UPDATE
//                     </button>
//                   </div>
//                 </div>
//                 </form>
//             </div>
//           </div>
//           </div>
//           </div>
       
       
       
//     </>
//   );
// }
import React,{useState} from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { NavItem } from "react-bootstrap";
// import * as ClassicEditor from "../../../../ckeditor5/src/ckeditor";
// import Image from '@ckeditor/ckeditor5-image/src/image';
// import ImageResizeHandles from '@ckeditor/ckeditor5-image/src/imageresize/imageresizehandles';
const API_URL = "https://localhost:5001/api";
const UPLOAD_ENDPOINT = "Contents/";
const defaultImageSrc = "../assets/img/damir-bosnjak.jpg";

const initialFieldValues = {
  id: 0,
  // name: "",
  // //code: "",
  // metaTitle: "",
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
  // //topHot: "",
  // viewCount: "",
  // link: "",
  // // category: null,
  imageSrc: defaultImageSrc,
  imageFile: null,
};
export default function MyEditor({ handleChange, ...props }) {
  const { addOrEdit, recordForEdit } = props;
const [values, setValues] = useState(initialFieldValues);
const [errors, setErrors] = useState({});
const { isVisible, setIsVisible } = props;
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("files", file);
            // let headers = new Headers();
            // headers.append("Origin", "http://localhost:3000");
            // fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
            //   method: "post",
            //   body: body
            //   // mode: "no-cors"
            // })
              // .then((res) => res.json())
              // .then((res) => {
              //   resolve({
              //     default: `${API_URL}/${res.filename}`
              //   });
              // })
              // .catch((err) => {
              //   reject(err);
              // });
          });
        });
      }
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
     
    };
  }

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
  
  return (
    <div className="App">
      
 <textarea name="ckeditor" id="input" class="form-control" rows="3" required="required">
   
      <CKEditor
              config={{
                extraPlugins: [uploadPlugin],
              
              }}
              editor={ClassicEditor}
              onReady={(editor) => {}}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
              onChange={(event, editor) => {
                handleChange(editor.getData());
              }}
              
              {...props}
            />
 </textarea>
 
      <CKEditor
        config={{
          extraPlugins: [uploadPlugin],
         
        }}
        editor={ClassicEditor}
        onReady={(editor) => {}}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
        onChange={(event, editor) => {
          handleChange(editor.getData());
        }}
        
        {...props}
      />
    </div>
  );
}
