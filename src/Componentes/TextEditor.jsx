import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import  "./textEditor.css"

function TextEditor() {
  const [value, setValue] = useState('');

  return (
    <div className="quill">
    <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
}

export default TextEditor