import React, { Component } from 'react';

class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="body">
        <div className="heading_title">
          <span>
            이미 많은 분들이 시작하셨습니다.
          </span>
          <h1>
            수익률의 클래스가 다른, 루프펀딩
          </h1>
        </div>
        <div className="heading_img_out">
          <div className="heading_img_in">
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
