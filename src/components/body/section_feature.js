import React, { Component } from 'react';

class SectionFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: '부동산 소액 투자',
          text: `부동산 투자는 수억원이 필요하다고 생각하시나요?
            루프펀딩은 건축자금을 다수의 투자자들로부터 모집하여
            투자자들은 소액으로도 부동산 관련 투자가 가능합니다
            최소 투자금액 10만원부터!
            지금 바로 부동산 투자를 시작하세요.`,
        },
        {
          title: '저금리 시대 속 고수익 투자',
          text: `은행 예금 금리 1%대 시대를 맞이해
            마땅한 고수익 투자처를 찾고 계신가요?
            루프펀딩은 부동산 프로젝트에 대출 형태로 투자하여
            연 10% 이상의 수익을 제공합니다.`,
        },
        {
          title: '리스크가 낮은 담보부 투자',
          text: `고수익인 만큼 리스크가 걱정되시나요?
            루프펀딩은 투자자들의 안정성을 위해 투자한
            부동산의 근저당권을 설정합니다.
            투자한 부동산 프로젝트에 차질이 생길 경우
            경매절차 등을 통해 원금 회수가 가능합니다.`,
        },
        {
          title: '고정 월수입 창출',
          text: `매월 고정 수입이 발생하는 건물주가 부러우신가요?
            루프펀딩은 부동산 투자를 통해 발생한 수익을
            매월 투자자의 계좌로 입금해 드립니다.`,
        },
      ],
    };
  }

  renderSectionFeature() {
    if(this.state.data) {
      console.log(1, this.state.data);
      return this.state.data.map((data, index) => {
        return (
          <li key={index} className='section_feature1'>
            0{index+1}.
            <h2>
              {data.title}
            </h2>
            {data.text}
          </li>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderSectionFeature()}
        </ul>
      </div>
    );
  }
}

export default SectionFeature;
