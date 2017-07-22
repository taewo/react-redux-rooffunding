import React, { Component } from 'react';

class HeaderButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: [
        {txt: '투자하기'},
        {txt: '대출받기'},
        {txt: '회사소개'},
        {txt: '서비스안내'},
        {txt: '루프소식'},
      ],
      logInOut : [
        {txt: '로그인'},
        {txt: '회원가입'},
      ]
    }
  }

  alertHello() {
    alert('까꿍');
  }

  renderHeaderMenu() {
    if(this.state.buttonText) {
      console.log(1, this.state.buttonText)
      return this.state.buttonText.map((data, index) => {
        return (
          <li key={index} className="header_button_txt" onClick={this.alertHello}>
              {data.txt}
          </li>
        )
      })
    }
  }

  renderLogInOutButton(){
    if(this.state.logInOut) {
      console.log(2, this.state.logInOut)
      return this.state.logInOut.map((data, index) => {
        return (
          <li key={index} className="header_loginout_txt">
            {data.txt}
          </li>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <div className="header_menu">
          <ul>
            {this.renderHeaderMenu()}
          </ul>
        </div>
        <div className="header_logInOut">
          <ul>
            {this.renderLogInOutButton()}
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderButton;
