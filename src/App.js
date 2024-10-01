import React from 'react';
import './App.css';

function App() {
  // 부드러운 스크롤을 위한 함수
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* 헤더 */}
      <header className="header">
        <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/images/logo1.png`} alt="Goldilocks Logo" className="logo" />
        </div>
        <nav>
          <ul className="menu">
            <li onClick={() => scrollToSection('about-us')}>About Us</li>
            <li onClick={() => scrollToSection('vision')}>Vision</li>
            <li onClick={() => scrollToSection('mission')}>Mission</li>
            <li onClick={() => scrollToSection('history')}>History</li>
            <li onClick={() => scrollToSection('services')}>Services</li>
            <li onClick={() => scrollToSection('team')}>Team</li>
            <li onClick={() => scrollToSection('devops')}>DevOps</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </nav>
      </header>

      {/* 첫 번째 페이지 (배너) */}
      <section className="banner">
        <div className="banner-content">
          <h1>GOLDILOCKS</h1>
          <h2>Corporate</h2>
        </div>
      </section>

      {/* About Us 섹션 */}
      <section id="about-us" className="about-us">
        <div className="about-content">
          {/* About Us 제목 */}
          <div className="about-header">
            <h1 className="about-title">
              About <span className="highlight">Us</span>
            </h1>
          </div>

          {/* About Us 본문 */}
          <div className="about-body">
            <div className="text-section">
              <div className="about-text">
                <p>
                  <strong>**GOLDILOCKS Co., Ltd.**</strong>는 <strong>2021년</strong> 설립된 물류 및 IT 솔루션 전문 기업으로, <strong>중국-베트남 국경운송</strong>에 특화된 서비스와 최첨단 <strong>물류 관리 시스템</strong>을 제공하고 있습니다. 우리는 물류 산업의 복잡한 문제를 해결하고, 고객이 보다 효율적이고 체계적으로 업무를 처리할 수 있도록 돕고 있습니다.
                </p>
                <p>
                  특히, <strong>Cocodot 플랫폼</strong>을 통해 실시간 데이터 관리, 운송 추적, 자동화된 배차 시스템 등을 도입하여 고객의 물류 운영을 혁신적으로 변화시키고 있습니다. 또한, 국경 운송뿐만 아니라 <strong>무역 및 수출입 에이전트</strong>로서, 글로벌 시장에서의 성장을 돕는 다양한 서비스를 제공하고 있습니다.
                </p>
                <p>
                  <strong>삼성 SDS</strong>를 비롯한 대형 고객사들과의 협업을 통해 신뢰성과 효율성을 인정받았으며, 끊임없는 기술 혁신으로 글로벌 시장에서 물류 솔루션의 선두주자로 자리매김하기 위해 노력하고 있습니다.
                </p>
                <p>
                  <strong>우리의 목표는 물류와 기술을 융합하여 고객의 성장을 지원하는 믿음직한 파트너로서의 역할을 수행하는 것입니다.</strong>
                </p>
              </div>
            </div>

            {/* 이미지 섹션 */}
            <div className="image-section">
              <div className="image-box">
                <img src={`${process.env.PUBLIC_URL}/images/aboutus1.jpg`} alt="이미지 1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 섹션 */}
      <section id="vision" className="vision">
        <div className="vision-content">
          <div className="vision-left">
            <h1 className="vision-title">Our <span className="highlight">Vision</span></h1>

            <ul className="vision-list">
              <li>
                <div className="circle">1</div>
                <div>
                  <h3>글로벌 물류 네트워크 확장</h3>
                  <p>
                    GOLDILOCKS는 <strong>중국·베트남</strong>을 비롯한 동남아시아 국경 운송 서비스를 성공적으로 운영한 경험을 바탕으로, 
                    <strong>미국 및 유럽</strong> 등 글로벌 시장으로 물류 네트워크를 확장하는 것을 목표로 하고 있습니다. 글로벌 파트너십을 강화하여 전 세계 물류를 통합적으로 관리하고, 
                    고객에게 <strong>더 빠르고 효율적인 물류 솔루션</strong>을 제공할 것입니다.
                  </p>
                </div>
              </li>
              <li>
                <div className="circle">2</div>
                <div>
                  <h3>물류 자동화 및 혁신적인 IT 솔루션 리더</h3>
                  <p>
                    우리는 <strong>Cocodot 플랫폼</strong>을 통해 물류 업계에서 <strong>자동화와 데이터 기반 의사결정</strong>을 선도하는 기업이 되는 것을 목표로 합니다. 
                    실시간 운송 추적, 자동 배차 시스템, 데이터 통합 관리 등 혁신적인 IT 솔루션을 지속적으로 개발하여, 
                    고객이 <strong>물류 운영의 투명성과 효율성</strong>을 극대화할 수 있도록 돕겠습니다.
                  </p>
                </div>
              </li>
              <li>
                <div className="circle">3</div>
                <div>
                  <h3>지속 가능한 물류 서비스</h3>
                  <p>
                    GOLDILOCKS는 환경 친화적인 ESG(환경·사회·지배구조) 경영을 통해, <strong>탄소 배출 절감과 효율적인 자원 관리</strong>를 실천하는 
                    지속 가능한 물류 솔루션을 제공합니다. 물류 경로 최적화, 에너지 효율적인 운송 방식을 도입하여, 
                    고객과 함께 <strong>환경에 기여하는 책임 있는 비즈니스</strong>를 실현하는 것이 우리의 목표입니다.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="vision-images">
            <div className="image-box">
              <img src={`${process.env.PUBLIC_URL}/images/vision3.png`} alt="이미지 1" />
            </div>
            <div className="image-box">
              <img src={`${process.env.PUBLIC_URL}/images/vision4.png`} alt="이미지 2" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission 섹션 */}
<section id="mission" className="mission">
  <div className="mission-content">
    {/* Mission 텍스트 */}
    <div className="mission-left">
      <h1 className="mission-title">
        Our <span>Mission</span> {/* Our은 검정색, Mission은 오렌지색 */}
      </h1>
      {/* Mission 리스트는 그대로 유지 */}
      <ul className="mission-list">
        <li>
          <div className="circle">1</div>
          <div>
            <h3>고객 중심의 물류 솔루션 제공</h3>
            <p>우리는 고객의 요구를 최우선으로 생각하며, 맞춤형 물류 솔루션을 제공하는 것을 목표로 합니다. 각 고객의 비즈니스 특성에 맞춰 효율적이고 신뢰할 수 있는 운송 관리 서비스를 통해, 고객의 물류 운영을 최적화하고 경쟁력을 강화할 수 있도록 지원합니다.</p>
          </div>
        </li>
              <li>
                <div className="circle">2</div>
                <div>
                  <h3>기술을 통해 물류 혁신 선도</h3>
                  <p>
                    우리는 IT 솔루션을 기반으로 물류 산업에서 자동화와 데이터 통합을 촉진합니다. 
                    <strong>Cocodot 플랫폼</strong>을 통해 실시간 물류 추적 및 관리가 가능하며, 
                    고객에게 보다 신속하고 정확한 서비스를 제공합니다.
                  </p>
                </div>
              </li>
              <li>
                <div className="circle">3</div>
                <div>
                  <h3>고객과의 신뢰 구축</h3>
                  <p>
                    우리는 신속하고 정확한 대응을 통해 고객과의 장기적인 파트너십을 구축하는 것을 목표로 합니다. 
                    항상 고객의 요구에 부응하며, 고객이 물류의 모든 단계에서 신뢰할 수 있는 서비스를 제공하는 것이 우리의 최우선 과제입니다.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* 이미지 섹션 */}
          <div className="mission-images">
            <div className="image-box">
              <img src={`${process.env.PUBLIC_URL}/images/mission1.png`} alt="Mission 이미지 1" />
            </div>
            <div className="image-box">
              <img src={`${process.env.PUBLIC_URL}/images/mission2.png`} alt="Mission 이미지 2" />
            </div>
          </div>
        </div>
      </section>


      {/* History 섹션 */}
      <section id="history" className="history">
  <h2 className="history-title">
    Our <span>History</span> {/* Our은 검정색, History는 오렌지색 */}
  </h2>

  {/* History 타임라인 박스 */}
  <div className="history-content">
    <div className="history-box">
      <h3><strong>2021</strong></h3>
      <p><strong>“GOLDILOCKS Co., Ltd. 설립”</strong><br />우리는 중국-베트남 국경 운송 서비스를 제공하며 사업을 시작했습니다. 빠르고 효율적인 물류 솔루션을 통해 파트너들과 신뢰를 쌓았습니다.</p>
    </div>

    <div className="history-box">
      <h3><strong>2022</strong></h3>
      <p><strong>“중/베 국경 Infra Agent 등록/계약”</strong><br />중국-베트남 간 물류 네트워크를 확장하였으며, 물류 운영의 안정성을 더욱 강화하였습니다.</p>
    </div>

    <div className="history-box">
      <h3><strong>2023</strong></h3>
      <p><strong>“Goldilocks China 법인 설립”</strong><br />중국 시장을 본격화하며, 고객들에게 신속하고 혁신적인 서비스를 제공할 수 있는 기틀을 마련하였습니다.</p>
    </div>

    <div className="history-box">
      <h3><strong>2024</strong></h3>
      <p><strong>“물류 시스템 Cocodot 런칭”</strong><br />실시간 데이터 관리 및 자동화 솔루션 제공, 고객의 물류 효율성을 극대화하였습니다.</p>
      <p><strong>“삼성SDS LSP 계약”</strong><br />실시간 데이터 관리 시스템 제공</p>
    </div>
  </div>

  {/* History 이미지 */}
  <div className="history-images">
    <div className="history-image-box">
      <img src={`${process.env.PUBLIC_URL}/images/history1.png`} alt="History Image 1" />
    </div>
    <div className="history-image-box">
      <img src={`${process.env.PUBLIC_URL}/images/history2.png`} alt="History Image 2" />
    </div>
  </div>
</section>

      {/* Service section */}
      <section id="services" className="services">
  <h2 className="service-title">Our <span>Service</span></h2>
  <p className="quote">"창의성은 새로운 것을 생각하는 것이고, 혁신은 그것을 실행하는 것이다." - Theodore Levitt</p>
  <p className="service-description">우리는 창의적인 아이디어와 함께 실행력으로 변화를 이끌어냅니다.</p>

 <div className="spacer-box"></div> {/* 빈 박스 추가 */}

  <div className="service-cards">
    <div className="service-card logistics">
    <img src={`${process.env.PUBLIC_URL}/images/logistics-icon.png`} alt="Trade Agency" className="service-icon" />
      <h3>Logistics</h3>
      <p>GOLDILOCKS는 동남아 국경을 중심으로 운송 솔루션을 제공합니다. FTL(Full Truckload) 및 LTL(Less-than-Truckload) 운송 서비스를 통해 고객의 화물을 안전하고 신속하게 처리하며, 효율적인 물류를 관리하고 맞춤형 운송 체계를 지원합니다.</p>
    </div>

    <div className="service-card devops">
    <img src={`${process.env.PUBLIC_URL}/images/devops-icon.png`} alt="Trade Agency" className="service-icon" />
      <h3>DevOps</h3>
      <p>GOLDILOCKS는 IT 개발자들을 통해 고객 업무를 자동화할 수 있는 시스템을 개발하고 있습니다. 삼성SDS와 같은 대형 기업에 도입된 “COCODOT”은 데이터 기반 자동화를 경험할 수 있습니다.</p>
    </div>

    <div className="service-card trade-agency">
    <img src={`${process.env.PUBLIC_URL}/images/trade-icon.png`} alt="Trade Agency" className="service-icon" />
      <h3>Trade Agency</h3>
      <p>GOLDILOCKS는 고객이 글로벌 시장에서 경쟁력을 강화하고 성장할 수 있도록, 맞춤형 무역 및 수출입 솔루션을 제공합니다. 글로벌 네트워크와 전문적 파트너십을 통해 다양한 물류 솔루션을 제공하며, 글로벌 물류 및 무역 전문가들이 함께합니다.</p>
    </div>
  </div>
</section>
<section id = "team" className="team-section">
        <h2 className="team-title">Meet Our <span>Team</span></h2>
        <div className="spacer-box1"></div> {/* 빈 박스 추가 */}

        <div className="team-cards">
          <div className="team-card">
          <img src={`${process.env.PUBLIC_URL}/images/hanoi-office.png`} alt="Vietnam(Hanoi)" className="team-image" />
            <div className="team-location">
              Vietnam(Hanoi) - 2021
            </div>
          </div>

          <div className="team-card">
          <img src={`${process.env.PUBLIC_URL}/images/suzhou-office.png`} alt="China(Shanghai)" className="team-image" />
            <div className="team-location">
              China(Shanghai) - 2023
            </div>
          </div>

          <div className="team-card">
          <img src={`${process.env.PUBLIC_URL}/images/la-office.png`} alt="Singapore" className="team-image" />
            <div className="team-location">
            United States(LA) - 2025
            </div>
          </div>

          <div className="team-card">
          <img src={`${process.env.PUBLIC_URL}/images/somewhere.png`} alt="United States(LA)" className="team-image" />
            <div className="team-location">
              Somewhere - 2027
            </div>
          </div>
        </div>
      </section>
    {/* DevOps Section */}
    
    <section id="devops" className="devops-section">
        <div className="devops-content">
          <div className="devops-left">
            <h2 className="devops-title">Our Latest <span>Work</span></h2>
            <p className="devops-text">
              Cocodot은 GOLDILOCKS에서 개발한 물류 관리 자동화 플랫폼으로, 물류 프로세스의 가시성을 높이고 효율성을 극대화하는 혁신적인 솔루션입니다. 이 플랫폼은 특히 국경 운송 관리에 특화되어 있으며, 실시간 데이터 추적, 자동화된 배차 시스템, 고객 맞춤형 대시보드 등의 기능을 통해 물류 운영을 최적화합니다.
            </p>
            <p className="devops-text">
              Cocodot은 단순한 물류 관리 도구를 넘어, 물류 산업의 혁신적 리더로서 자동화와 디지털화를 이끄는 플랫폼입니다. 효율성과 가시성을 통해 고객의 물류 운영을 한 단계 더 발전시킵니다.
            </p>

            <div className="devops-stats">
              <div className="stat-box">
                <div className="stat-icon">🚚</div>
                <div className="stat-number">3+ K</div>
                <div className="stat-label">Shipping</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">👥</div>
                <div className="stat-number">200+</div>
                <div className="stat-label">Driver</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🔍</div>
                <div className="stat-number">Traking BOT</div>
                <div className="stat-label">Cocodot</div>
              </div>
            </div>
          </div>

          <div className="devops-right">
            <img src={`${process.env.PUBLIC_URL}/images/dashboard.png`} alt="Dashboard" className="devops-image" />
            <img src={`${process.env.PUBLIC_URL}/images/report.png`} alt="Report" className="devops-image" />
            <img src={`${process.env.PUBLIC_URL}/images/map.png`} alt="Map" className="devops-image" />
            <img src={`${process.env.PUBLIC_URL}/images/progress.png`} alt="Progress" className="devops-image" />
          </div>
        </div>
      </section>
    {/* Contact Section */}
    <section id="contact" className="contact-section">
        <div className="contact-left">
          <h2 className="contact-title">Our <span>Contact</span></h2>
          
          <div className="contact-details">
            <div className="detail-box">
              <span className="icon">📞</span>
              <p>+84-90-223-6575 / +84-96-382-1110</p>
            </div>
            <div className="detail-box">
              <span className="icon">🌐</span>
              <p>WWW.GOLDILOCKSZ.COM</p>
            </div>
            <div className="detail-box">
              <span className="icon">✉️</span>
              <p>jace@goldilocksz.com / cs.lee@goldilocksz.com</p>
            </div>
            <div className="detail-box">
              <span className="icon">📍</span>
              <p>Unit 1201, Keangnam Hanoi Landmark Tower, Plot E6,<br></br> Me Tri, Nam Tu Liem District, Hanoi</p>
            </div>
          </div>

          <div className="contact-qr">
          <img src={`${process.env.PUBLIC_URL}/images/QR_code.png`} alt="QR Code" className="qr-image" />
            <p>kakaotalk</p>
          </div>
        </div>

        <div className="contact-right">
        <img src={`${process.env.PUBLIC_URL}/images/service-menu.png`} alt="New Menu" className="contact-image large" />
        
        </div>
      </section>
    </div>
  );
}

export default App;
