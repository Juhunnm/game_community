import React, {useState} from 'react';
import BoardTable from "./BoardTable";
import './YuriStyle.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Select} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const GameBoard = () => {

    const miniHeader = ["메이플스토리", "리니지", "아키에이지", "로스트아크","서든어택", "오딘", "게임8", "게임9"];
    const gameLogoImages = ["gameLogo/MapleStory.jpg", "gameLogo/Lineage.jpg", "gameLogo/ArcheAge.png", "gameLogo/LostArk.jpg"];
    const [showLogoImage, setShowLogoImage] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [textHeader, setTextHeader] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const navigate = useNavigate();

    //BoardTable
    const [data, setData] = useState([
        { id: 1, textHeader: '공지', textTitle: '글제목1-----', userName: '홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 2, textHeader: '정보', textTitle: '글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 3, textHeader: '잡담', textTitle: '글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 4, textHeader: '공지', textTitle: '글제목1-----', userName: '홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 5, textHeader: '정보', textTitle: '글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 6, textHeader: '잡담', textTitle: '글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 7, textHeader: '공지', textTitle: '글제목1-----', userName: '홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 8, textHeader: '정보', textTitle: '글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 9, textHeader: '잡담', textTitle: '글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 10, textHeader: '공지', textTitle: '글제목1-----', userName:'홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 11, textHeader: '정보', textTitle: '글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 12, textHeader: '잡담', textTitle: '글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2 }
    ]);

    //검색창
    const handleChange = (event) => {
        setSearchText(event.target.value);
    };
    const handleSearch =() => {
        console.log("검색어:", searchText);
    };

    //Select
    const handleSelectChange = (event) => {
        setTextHeader(event.target.value);
        setCurrentPage(1); //말머리 변경 시 게시글 페이징을 1(첫 페이지)로 이동
    };

    //Pagination
    const filteredData = textHeader && textHeader !== '전체' ? data.filter(item =>
        item.textHeader === textHeader) : data;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    }
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div>
            <div className="miniHeaderSpace">
                {miniHeader.map((gameName, index) => (
                    <div key={index}>
                        <button
                            className="miniHeaderButton"
                            onClick={() => setShowLogoImage(index)} //버튼 클릭 시 로고 이미지 변경
                        >
                            {gameName}
                        </button>
                    </div>
                ))}
            </div>
            {showLogoImage === null ? ( //showLogoImage가 null일 때 기본 로고
                <img
                    className="mainLogoImg"
                    src="gameLogo/MainLogo.png" //기본 로고
                    alt="Default Logo"
                />
            ): (
                <img
                    className="gameLogoImg"
                    src={gameLogoImages[showLogoImage]} //선택된 버튼의 로고
                    alt={miniHeader[showLogoImage]}
                />
            )}

            {showLogoImage !== null && ( //showLogoImage가 null이 아닐 때 게시판 표시
                <div>
                    <div className="boardcomponent">
                        <div className="boardTopSpace">
                            <div className="textHeader">
                                <FormControl sx={{m: 0}} size="small">
                                    <InputLabel id="demo-select-small-label"
                                                sx={{fontSize: '10px'}}
                                    >말머리</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={textHeader}
                                        label="말머리"
                                        onChange={handleSelectChange}
                                        sx={{
                                            minWidth: 75,
                                            fontSize: '12px',
                                            height: '30px'
                                        }}
                                    >
                                        <MenuItem value="전체" sx={{fontSize: '10px'}}>전체</MenuItem>
                                        <MenuItem value="공지" sx={{fontSize: '10px'}}>공지</MenuItem>
                                        <MenuItem value="정보" sx={{fontSize: '10px'}}>정보</MenuItem>
                                        <MenuItem value="잡담" sx={{fontSize: '10px'}}>잡담</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="searchBoxSpace">
                                <input className="searchBar"
                                       type="text"
                                       placeholder="검색어를 입력하세요."
                                       value={searchText}
                                       onChange={(event) => setSearchText(event.target.value)}
                                />
                                <button className="searchButton"
                                        onClick={() => console.log("검색어:", searchText)}
                                >
                                    검색
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="boardSpace">
                        <div className="borderBox">
                            <BoardTable data={currentItems} />
                        </div>
                    </div>
                    <div className="boardBottomLine">
                        <div className="bottomGuardLine">
                            <div className="pagingSpace">
                                <Stack spacing={2}>
                                    <Pagination
                                        count={totalPages}
                                        page={currentPage}
                                        onChange={handleChangePage}
                                    />
                                </Stack>
                            </div>
                            <div className="writeButtonSpace">
                                <button className="writeButton"
                                        onClick={() => navigate('/write')}>
                                    글쓰기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GameBoard;
