import React from "react";

const Project = () => {
    return (
        <section id="project">
            <div className="project__inner">
                <h2 className="project__title">&nbsp;Project&nbsp;<em>프로젝트</em></h2>
                <div className="project__wrap">
                    <article className="project__item s1">
                        <span className="num">1. </span>
                        <div className="text">
                            <div>아두이노를 활용한 복불복 권투 오락기: 'GamBoxer'</div>
                        </div>
                        <div className="image">
                            <img src="/image/project1.png" alt="project1" />
                        </div>
                        <h3 className="content">
                        <ul>
                            <li>개요</li>
                            -아두이노를 이용하여 실제 버튼 액션을 통한 경우의 수 기반 복불복 게임 만들기
                            <li>나의 역할</li>
                            -아두이노 회로 구현 및 발표자료 제작
                            <li>강조할점</li>
                            -해당 오락기를 수업시간에 배운 내용 안에서 다양한 센서와 부품들을 사용하여 구현 및 코딩<br></br>
                            -상업적, 오락적 두가지 측면을 염두하여 개발함
                            <li>성과</li>
                            -아두이노와 관련된 하드웨어 및 소프트웨어 개발 스킬을 습득하고, 팀원들과의 협력 및 의사소통 능력을 향상시킴<br></br>
                            -프로젝트 중에는 기기 동작 문제나 코드 버그와 같은 문제 해결을 통해 문제 해결 능력을 향상
                        </ul>
                        </h3>
                        
                        <div className="info">
                            <span>아두이노 프로젝트</span>
                            <span>production period : two weeks</span>
                        </div>
                    </article>
                    <article className="project__item s2">
                        <span className="num">2.</span>
                        <div className="text">
                            <div>가게부앱</div>
                        </div>
                        <div className="image">
                            <img src="/image/project2.png" alt="project2" />
                        </div>
                        <h3 className="content">
                        <ul>
                            <li>개요</li>
                            -개인 및 가정의 재무 상황을 관리하고 추적하는데 도움을 주는 애플리케이션을 제작하는 것을 목표
                            <li>나의 역할</li>
                            -기능 개선 및 유지보수로서 새로운 기능 추가, 오류 수정, 보안 업데이트 등을 수행하여 앱의 지속적인 개선을 담당
                            <li>강조할점</li>
                            -앱을 사용하는 사용자의 경험을 개선하기 위해 직관적이고 사용하기 쉬운 사용자 인터페이스를 설계함<br></br>
                            -또한 개인 금융 정보는 민감한 정보이므로 데이터 보안을 강조해야함
                            <li>성과</li>
                            -앱의 데이터 보안 및 개인 정보 보호에 대한 높은 신뢰도를 구축하여 사용자들의 개인 정보를 안전하게 보호함<br></br>
                            -이를 통해 사용자들의 보다 효율적인 금융 관리를 도움
                        </ul>
                        </h3>
                        
                        <div className="info">
                            <span>앱 개발 프로젝트</span>
                            <span>production period : two weeks</span>
                        </div>
                    </article>
                    <article className="project__item s3">
                        <span className="num">3.</span>
                        <div className="text">
                            <div>도서관 관리 시스템</div>
                        </div>
                        <div className="image">
                            <img src="/image/project3.png" alt="project3" />
                        </div>
                        <h3 className="content">
                        <ul>
                            <li>개요</li>
                            -도서관 관리를 위한 데이터베이스 기반의 통합 관리 시스템을 구축하는 것을 목표로 주문 처리, 재고 관리, 고객 관리 데이터 분석 등 다양한 기능을 제공하여 도서관의 효율성을 향상시키고 고객 서비스를 개선
                            <li>나의 역할</li>
                            -데이터베이스에서 추출한 판매 데이터를 분석하기 위한 쿼리 및 스크립트를 작성<br></br>
                            -데이터 분석 팀에 필요한 데이터를 제공하고 리포트 및 대시보드 작업을 지원
                            <li>강조할점</li>
                            -주문 처리 및 고객 서비스 개선하기 위해 데이터베이스를 사용하여 주문 처리 및 고객 관리를 자동화하고 개선하여 효율성을 높임
                            <li>성과</li>
                            -데이터베이스 시스템을 사용하여 도서관 운영을 효율화하고 주문 처리 및 재고 관리를 개선
                            </ul>
                        </h3>
                        
                        <div className="info">
                            <span>데이터베이스 프로젝트</span>
                            <span>production period : three weeks</span>
                        </div>
                    </article>
                    <article className="project__item s4">
                        <span className="num">4.</span>
                        <div className="text">
                            <div>AI 자율주행 시뮬레이션 구현</div>
                        </div>
                        <div className="image">
                            <img src="/image/project4.png" alt="project4" />
                        </div>
                        <h3 className="content">
                        <ul>
                            <li>개요</li>
                            -인공지능과 자율주행 기술을 활용하여 가상 환경에서 자율주행 차량의 시뮬레이션을 구현
                            <li>나의 역할</li>
                            -테스트 및 디버깅함으로써 시뮬레이션 환경에서의 자율주행 시나리오를 실행<br></br>
                            -알고리즘의 동작을 검증하며 발생하는 문제를 해결
                            <li>강조할점</li>
                            -AI 자율주행 시뮬레이션 구현함으로써 AI 기술과 자율주행 기술을 통합하여 실제 도로 환경을 모방한 시뮬레이션을 구현함
                            <li>성과</li>
                            -AI 자율주행 시뮬레이션을 성공적으로 구현<br></br>
                            -다양한 시나리오에서 효과적으로 사용할 수 있도록 구축
                        </ul>
                        </h3>
                        
                        <div className="info">
                            <span>AI 자율주행 프로젝트</span>
                            <span>production period : two months</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Project;