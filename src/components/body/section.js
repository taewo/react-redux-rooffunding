import React, { Component } from 'react';
import SectionFeature from './section_feature';

class Section extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section">
        <div className="btn_get_message">
          <div className="btn_get_message_button">
            투자정보 무료로 받아보기 (문자서비스)
          </div>
        </div>
        <div className="section_heading">
          <h1>
            루프펀딩이란
          </h1>
        </div>
        <div>
          <SectionFeature />
        </div>
      </div>
    );
  }
}

export default Section;
