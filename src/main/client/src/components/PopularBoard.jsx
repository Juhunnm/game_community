import React from 'react';
import './YuriStyle.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faThumbsUp, faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                        <h3>이번 주 인기글 Top 3</h3>
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

                        </div>
                    </div>
                    <div className="part2">
                        <h5>- 추천 콘텐츠</h5>
                        <div className="youtubeBox">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularBoard;
