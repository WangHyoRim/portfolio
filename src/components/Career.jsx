import React, {useEffect,useRef} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Career = () => {
    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;
    
        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                markers: false,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });

        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top 56px",
                end: () => `+=${horizontal.offsetWidth}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            });
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section id="career" ref={horizontalRef}>
            <div className="career__inner">
                <div className="career__title">
                &nbsp;Career&nbsp; <em>나의 경력</em>
                </div>
                <div className="career__wrap">
                    <article className="career__item p1"ref={(el) => (sectionsRef.current[0] = el)}>
                        <span className="num">01.</span>
                        <h3 className="title">아르바이트</h3>
                        <p className="desc">
                        레스토랑 매니저
                            <ul>
                                <li>데이터베이스 관리</li>
                                    -레스토랑 매니저 업무는 주문, 재고, 고객 정보 등과 관련된 데이터를 효과적으로 관리해야 함<br></br>
                                    -데이터베이스 관리 시스템을 활용하여 실시간으로 데이터를 추적하고 업무 프로세스를 효율화시킴
                                    <li>고객 데이터 분석</li>
                                    -데이터베이스를 활용하여 고객 정보를 수집하고 분석하여 고객 요구를 이해하고 맞춤형 메뉴나 프로모션을 제공
                                    <li>품질 향상</li>
                                    -데이터베이스를 사용하여 음식 품질 관리와 고객 서비스를 모니터링하고 향상시킬 수 있음<br></br>
                                    -피드백 및 리뷰 데이터를 수집하여 개선점을 식별하고 조치
                            </ul>
                        </p>
                    </article>

                    <article className="career__item p2"ref={(el) => (sectionsRef.current[1] = el)}>
                        <span className="num">02.</span>
                        <h3 className="title">인턴</h3>
                        <p className="desc">
                            <ul>
                                <li>데이터 분석 및 인턴십</li>
                                -데이터 수집, 정제 및 분석<br></br>
                                -데이터 시각화 및 보고서 작성<br></br>
                                -머신러닝 또는 딥러닝 모델 개발<br></br>
                                -비즈니스 인텔리전스 및 예측 분석
                            </ul>
                        </p>
                        </article>

                    <article className="career__item p3"ref={(el) => (sectionsRef.current[2] = el)}>
                        <span className="num">03.</span>
                        <h3 className="title">사회봉사</h3>
                        <p className="desc">
                            <ul>
                                <li>코딩 교육 프로그램</li>
                                -학교, 도서관 또는 지역 사회 센터에서 코딩 교육 프로그램을 개설하여 어린이나 어른들에게 프로그래밍과 컴퓨터 과학을 가르침
                                <li>기술 교육 및 지원</li>
                                -노인, 디지털 이해도가 낮은 사람들, 또는 어려움을 겪는 집단을 대상으로 컴퓨터 및 인터넷 사용에 대한 교육과 지원을 제공
                                <li>데이터 분석 및 기술 지원</li>
                                -비영리 단체에 대해 데이터 분석 또는 기술 문제 해결을 도움<br></br>
                                -데이터를 분석하여 조직에 유용한 정보를 제공하거나 기술적인 문제를 해결하는 데 기여함
                            </ul>
                        </p>
                    </article>
                    <article className="career__item p4"ref={(el) => (sectionsRef.current[3] = el)}>
                        <span className="num">04.</span>
                        <h3 className="title">자격증 및 그외 스펙</h3>
                        <p className="desc">
                            <ul>
                                <li>2023.12&nbsp;&nbsp;&nbsp;&nbsp;네트워크 관리사 2급&nbsp;&nbsp;&nbsp;한국정보통신자격협회</li>
                                <li>2024.03&nbsp;&nbsp;&nbsp;리눅스 마스터 2급&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;한국정보통신진흥협회</li>
                                <li>2025.03&nbsp;&nbsp;&nbsp;정보처리기사 2급&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;한국산업인력공단</li><br></br><br></br>
                                <li>2024.03&nbsp;&nbsp;&nbsp;토익 870점&nbsp;&nbsp;&nbsp;한국토익위원회</li>
                            </ul>
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Career;