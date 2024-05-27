import React from 'react';
import './YuriStyle.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faThumbsUp, faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const PopularBoard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slideContent = [
        {
            title: "글제목 1",
            userName: "홍길동",
            date: "2024/04/01",
            views: 104,
            likes: 18,
        },
        {
            title: "글제목 2",
            userName: "이네모",
            date: "2024/04/02",
            views: 200,
            likes: 50,
        },
        {
            title: "글제목 3",
            userName: "박세모",
            date: "2024/04/03",
            views: 300,
            likes: 75,
        },
        {
            title: "글제목 4",
            userName: "홍길동",
            date: "2024/04/01",
            views: 104,
            likes: 18,
        },
        {
            title: "글제목 5",
            userName: "이네모",
            date: "2024/04/02",
            views: 200,
            likes: 50,
        },
        {
            title: "글제목 6",
            userName: "박세모",
            date: "2024/04/03",
            views: 300,
            likes: 75,
        },
        {
            title: "글제목 7",
            userName: "홍길동",
            date: "2024/04/01",
            views: 104,
            likes: 18,
        },
        {
            title: "글제목 8",
            userName: "이네모",
            date: "2024/04/02",
            views: 200,
            likes: 50,
        },
        {
            title: "글제목 9",
            userName: "박세모",
            date: "2024/04/03",
            views: 300,
            likes: 75,
        }
    ];
    //슬라이드 그룹 ( 1 슬라이드 = 3 게시글)
    const groupContent = [];
    for (let i = 0; i < slideContent.length; i += 3) {
        groupContent.push(slideContent.slice(i, i + 3));
    }

    return (
        <div>
            <div className="topSpace">
                <div className="collectionOfPosts">
                    <div className="postName">
                        <h3>이번 주 인기글 Top 9</h3>
                    </div>
                    <Slider {...settings}>
                        {groupContent.map((group, index) => (
                            <div key={index} className="slide-item">
                                {group.map((content, contentIndex) => (
                                    <div key={contentIndex} className="content-row">
                                        <div className="content-cell">{content.title}</div>
                                        <div className="content-cell">{content.userName}</div>
                                        <div className="content-cell">{content.date}</div>
                                        <div className="content-cell">
                                            <FontAwesomeIcon icon={faEye} style={{marginRight: '5px'}}/>
                                            {content.views}
                                        </div>
                                        <div className="content-cell">
                                            <FontAwesomeIcon icon={faThumbsUp} style={{marginRight: '5px'}}/>
                                            {content.likes}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="middleSpace">
                <h3>GG 인기 순위</h3>
                <div className="popularTable">
                    <table className="popularTableBox">
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>인기 게시판</th>
                            <th>인기 검색어</th>
                            <th>PC 게임</th>
                            <th>모바일 게임</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>메이플스토리</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>리그오브레전드</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bottomSpace">
                <div className="contentsBox">
                    <div className="part1">
                        <h5>- 주요 기사</h5>
                        <div className="newsBox">
                            <div className="news">
                                <img className="gameNewsImg"
                                     src="https://cdn.gamemeca.com/data_center/285/051/20240524183828.jpg"
                                     alt="gameNewsImg1"/>
                                <div className="newsTextBox">
                                    <a className="gameNewsTitle"
                                       href="https://www.gamemeca.com/view.php?gid=1749246"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        오버워치 챔피언스 첫 국제 대회, 6월 1일 개막
                                    </a>
                                    <a className="gameNewsText">오버워치 챔피언스 시리즈(Overwatch Champions Series, OWCS)의 첫 국제
                                        대회인 ‘2024 OWCS 댈러스 메이저(The 2024 OWCS Dallas Major)’가 오는 6월 1일(토) 미국 댈러스 케이 베일리
                                        허치슨 컨벤션 센터(Kay Bailey Hutchison Convention Center)에서 개막한다.
                                        2024.05.24 19:09
                                    </a>
                                </div>
                            </div>
                            <div className="news">
                                <img className="gameNewsImg"
                                     src="https://cdn.gamemeca.com/data_center/285/040/20240524175312.jpg"
                                     alt="gameNewsImg1"/>
                                <div className="newsTextBox">
                                    <a className="gameNewsTitle"
                                       href="https://www.gamemeca.com/view.php?gid=1749246"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        중세 프랑스 배경 엑스컴 ‘크라운 워’ 정식 출시
                                    </a>
                                    <a className="gameNewsText">H2 인터렉티브는 아티팩트 스튜디오가 개발한 전략게임 ‘크라운 워: 더 블랙 프린스
                                        (Crown Wars: The Black Prince, 이하 크라운 워)’ PC, PS5 한국어판을
                                        24일 다이렉트 게임즈 및 플레이스테이션 스토어 등을 통해 정식 출시했다.
                                        2024.05.24 17:58
                                    </a>
                                </div>
                            </div>
                            <div className="news">
                                <img className="gameNewsImg"
                                     src="https://cdn.gamemeca.com/data_center/285/009/20240524162836.jpg"
                                     alt="gameNewsImg1"/>
                                <div className="newsTextBox">
                                    <a className="gameNewsTitle"
                                       href="https://www.gamemeca.com/view.php?gid=1749246"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        [오늘의 스팀] 워해머 40K 스페이스 마린 2 온다
                                    </a>
                                    <a className="gameNewsText">워해머 관련 게임 쇼케이스 ‘워해머 스컬즈'가 23일 열렸다.
                                        그 중 기대작 ‘워해머 40,000: 스페이스 마린 2(Warhammer 40,000: Space Marine 2, 이하 스페이스 마린 2)’가
                                        새 트레일러 공개와 함께 사전 판매를 시작했고, 스팀 전 세계 최고 판매 7위에 올랐다.
                                        2024.05.24 17:48
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="part2">
                        <h5>- 추천 콘텐츠</h5>
                        <div className="youtubeBox">
                            <div className="videoLine1">
                                <div className="video">
                                    <iframe
                                        src="https://www.youtube.com/embed/MBa_CT1ICss"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="video">
                                    <iframe
                                        src="https://www.youtube.com/embed/drAh3WPC4nw"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="videoLine2">
                                <div className="video">
                                    <iframe
                                        src="https://www.youtube.com/embed/c9tOzVICs1Y"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="video">
                                    <iframe
                                        src="https://www.youtube.com/embed/dfRmo386vPI"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularBoard;