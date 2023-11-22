import React from "react";

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">&nbsp;Skill&nbsp;<em>스킬</em></h2>
                <div className="skill__wrap">
                    <article className="skill__item s1">
                        <span className="num">1.</span>
                        <div className="text">
                            <div>C언어</div>
                        </div>
                        <div className="image">
                            <img src="https://wanghyorim.github.io/portfolio/image/skill1.png" alt="skill1" />
                        </div>
                        <h3 className="content">
                        <ul>
                            <li>정의</li>
                            -유닉스 운영 체제에서 사용하기 위해 개발한 프로그래밍 언어
                            <li>학습</li>
                            -C언어를 사용하여 데이터 구조, 알고리즘, 메모리 관리, 그리고 하드웨어와의 상호작용을 배우며 기술적 지식 향상시킴<br></br>
                            -C 언어의 직접적인 메모리 조작 능력은 효율적인 코드 작성과 성능 최적화에 많은 도움을 줌
                            <li>응용</li>
                            -운영체제 커널 개발 프로젝트에서는 C 언어를 사용하여 운영체제의 핵심 구성요소를 구현<br></br>
                            -임베디드 시스템 프로젝트에서는 C 언어로 마이크로컨트롤러를 프로그래밍하여 실제 하드웨어 제어를 담당함
                            </ul>
                        </h3>
                        
                        <div className="info">
                            <span>C언어 스킬</span>
                            <span>study period : four years</span>
                        </div>
                    </article>
                    <article className="skill__item s2">
                        <span className="num">2.</span>
                        <div className="text">
                            <div>웹프로그래밍</div>
                        </div>
                        <div className="image">
                            <img src="https://wanghyorim.github.io/portfolio/image/skill2.png" alt="skill2" />
                        </div>
                        <h3 className="content">
                        <ul>
                            <li>정의</li>
                            -웹상에서 각종 자료들을 보여줄 수 있도록 웹프로그래밍 언어를 이용하여 프로그램을 설계하고 작성
                            <li>학습</li>
                            -프론트엔드 개발에서는 HTML, CSS, JavaScript를 사용하여 사용자 친화적이고 시각적으로 매력적인 웹사이트를 구축<br></br>
                            -백엔드 개발에서는 Node.js와 Express를 활용하여 서버를 구축하고 데이터베이스를 관리<br></br>
                            -사용자 데이터와 컨텐츠를 동적으로 다룸
                            <li>응용</li>
                            -스마트폰 앱과 연동되는 웹 기반 플랫폼을 개발하여 대학의 학생 회원들을 위한 온라인 커뮤니티를 구축하고 운영<br></br>
                            -웹프로그래밍을 활용하여 비영리 단체와 협력하여 온라인 기부 플랫폼을 개발하고, 기부 모금을 증대시키는데 일조함
                            </ul>
                        </h3>
                        
                        <div className="info">
                            <span>웹프로그래밍 스킬</span>
                            <span>study period : two years</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Skill;