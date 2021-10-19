import { EditorState, convertToRaw } from "draft-js";
import React, { Component, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const initialFieldValues = {
  id: 0,
  name: "",
  email: "",
  phone: "",
  content: "",
};

export default class Baiviet extends Component {
  //const [values, setValues] = useState(initialFieldValues);

  // handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };

  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  render() {
    const { editorState } = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
      <div className="container">
        <div className="wrapper">
          <h1 style={{ textAlign: "center" }}>Contact Us Form</h1>
          <div class="row">
            {/* 1. */}
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                <label>ID</label>
                <input
                  type="text"
                  name="id"
                  //value={values.id}
                  //onChange={handleInputChange}
                  placeholder="id"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  //value={values.name}
                  //onChange={handleInputChange}
                  placeholder="Enter Name"
                  className="form-control"
                  required
                />
              </div>
            </div>
            {/* 2. */}
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  //value={values.email}
                  //onChange={handleInputChange}
                  placeholder="Enter email"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone number</label>
                <input
                  type="number"
                  name="phone"
                  //value={values.phone}
                  //onChange={handleInputChange}
                  placeholder="Enter Phone"
                  className="form-control"
                  required
                />
              </div>
            </div>
            {/* 3. */}
            <div className="form-group">
              <label>Messages</label>

              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
              />
              <textarea
                cols="25"
                rows="14"
                type="text"
                //value={this.state.messages}
                //onChange={this.handleChange}
                className="form-control"
                placeholder="Enter Messages"
                value={draftToHtml(
                  convertToRaw(editorState.getCurrentContent())
                )}
              />
            </div>
            <div>
              <input
                type="submit"
                name="submit"
                className="btn btn-secondary"
                required
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default Baiviet;
