import React from "react";
import ReactDOM from "react-dom";
import RtfToMarkdown from './containers/RtfToMarkdown';

// import ReactQuill styles
import 'react-quill/dist/quill.snow.css';
// Import Main styles for this application
import "../scss/style.scss";

ReactDOM.render(
  <RtfToMarkdown />,
  document.getElementById("root")
);