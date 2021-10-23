import React, { useState } from "react";
import TaskForm from "./component_baiviet/TaskForm_baiviet";

export default function BaiViet(props) {
  const [editor, setEditor] = useState(null);
  return (
    <>
      <TaskForm
        handleChange={(data) => {
          setEditor(data);
        }}
        data={editor}
        {...props}
      />
    </>
  );
}
