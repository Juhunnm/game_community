import React from 'react'

const GameBoard = () => {
    const miniHeader = ["메이플스토리", "리니지", "아키에이지", "로스트아크", "서든어택", "오딘", "게임8", "게임9"];
    const gameLogoImages = ["gameLogo/MapleStory.jpg", "gameLogo/Lineage.jpg", "gameLogo/ArcheAge.png", "gameLogo/LostArk.jpg"];
    const [showLogoImage, setShowLogoImage] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [textHeader, setTextHeader] = useState('전체');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const navigate = useNavigate();
    const [data, setData] = useState([]); // 게시판 데이터
    const [filteredData, setFilteredData] = useState([]); // 필터링된 데이터

    // 데이터 필터링 (검색 & 말머리)
    const filterData = (searchText, textHeader, data) => {
        return data.filter(item => {
            const matchesSearchText = item.textTitle.includes(searchText) || item.userName.includes(searchText);
            const matchesTextHeader = textHeader === '전체' || item.textHeader === textHeader;
            return matchesSearchText && matchesTextHeader;
        });
    };

    // 검색 처리
    const handleSearch = () => {
        const filtered = filterData(searchText, textHeader, data);
        setFilteredData(filtered);
        setCurrentPage(1); // 검색 후 페이지를 첫 페이지로 설정
    };

    // 말머리 선택 버튼 - Select
    const handleSelectChange = (event) => {
        setTextHeader(event.target.value);
        const filtered = filterData(searchText, event.target.value, data);
        setFilteredData(filtered);
        setCurrentPage(1); // 말머리 변경 시 게시글 페이징을 1(첫 페이지)로 이동
    };

    // miniHeaderButton 클릭 시 호출되는 함수
    const handleMiniHeaderClick = (index) => {
        setShowLogoImage(index);
        const boardData = gameBoardData[miniHeader[index]] || [];
        setData(boardData); // 선택된 게임의 게시판 데이터 설정
        setFilteredData(boardData); // 필터링된 데이터 초기화
        setSearchText(''); // 검색어 초기화
        setTextHeader('전체'); // 말머리 초기화
        setCurrentPage(1); // 페이지 초기화
    };

    // 페이징 - Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    }
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // 게시판 게시글 빈 공간 채워 정렬 유지 (한 페이지 - 10개 항목 유지)
    const fillBoardItems = [
        ...currentItems,
        ...Array.from({ length: itemsPerPage - currentItems.length }, (_, index) => ({
            id: `empty-${index}`,
            textHeader: null,
            textTitle: '',
            userName: '',
            timeToWrite: '',
            textViewNumber: '',
            textLikesNumber: ''
        }))
    ];

    return (
        <div>
            <div className="miniHeaderSpace">
                {miniHeader.map((gameName, index) => (
                    <div key={index}>
                        <button
                            className="miniHeaderButton"
                            onClick={() => handleMiniHeaderClick(index)} // 버튼 클릭 시 로고 이미지 & 게시판 변경
                        >
                            {gameName}
                        </button>
                    </div>
                ))}
            </div>
            {showLogoImage === null ? ( // showLogoImage가 null일 때 기본 로고
                <img
                    className="mainLogoImg"
                    src="gameLogo/MainLogo.png" // 기본 로고
                    alt="Default Logo"
                />
            ) : (
                <img
                    className="gameLogoImg"
                    src={gameLogoImages[showLogoImage]} // 선택된 버튼의 로고
                    alt={miniHeader[showLogoImage]}
                />
            )}

            {showLogoImage !== null && ( // showLogoImage가 null이 아닐 때 게시판 표시
                <div>
                    <div className="boardcomponent">
                        <div className="boardTopSpace">
                            <div className="textHeader">
                                <FormControl sx={{ m: 0 }} size="small">
                                    <InputLabel id="demo-select-small-label"
                                                sx={{ fontSize: '10px' }}
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
                                        <MenuItem value="전체" sx={{ fontSize: '10px' }}>전체</MenuItem>
                                        <MenuItem value="공지" sx={{ fontSize: '10px' }}>공지</MenuItem>
                                        <MenuItem value="정보" sx={{ fontSize: '10px' }}>정보</MenuItem>
                                        <MenuItem value="잡담" sx={{ fontSize: '10px' }}>잡담</MenuItem>
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
                                        onClick={handleSearch}
                                >
                                    검색
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="boardSpace">
                        <div className="borderBox">
                            {filteredData.length === 0 ? (
                                <div className="noResults">해당하는 검색 결과가 없습니다.</div>
                            ) : (
                                <BoardTable data={fillBoardItems} />
                            )}
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

export default GameBoard
