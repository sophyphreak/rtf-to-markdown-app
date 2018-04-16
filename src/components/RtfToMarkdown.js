import React from 'react';
import ReactQuill from 'react-quill';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ClippyIcon } from 'react-octicons';
import html2markdown from 'html2markdown';
import { 
  Button, 
  Col,
  Input, 
  Row 
} from 'reactstrap';

import modules from './modules/modules';

export default class RtfToMarkdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(text) {
    this.setState({ text });
  };
  render() {
    return (
      <Row className="animated fadeIn">
        <Col xs="12" sm="6">
          <ReactQuill
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Please type or paste your listing here"
            modules={modules}
          />
        </Col>
        <Col xs="12" sm="6">
          <Input
            type="textarea"
            className="ql-editor--textarea"
            value={html2markdown(this.state.text)}
            readOnly={true}
          />
          {
            this.state.text.length > 11 &&
            <CopyToClipboard 
              className="animated fadeIn"
              text={html2markdown(this.state.text)}
            >
              <button><ClippyIcon /></button>
            </CopyToClipboard>
          }
        </Col>
      </Row>
    );
  }
}