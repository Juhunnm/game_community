
const gameBoardData = {
    "메이플스토리": [
        { id: 1, textHeader: '공지', textTitle: '메이플스토리 글제목1-----', userName: '홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33, contents: "메이플스토리 본문"},
        { id: 2, textHeader: '정보', textTitle: '메이플스토리 글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 3, textHeader: '잡담', textTitle: '메이플스토리 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 4, textHeader: '공지', textTitle: '메이플스토리 글제목1-----', userName: '홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 5, textHeader: '정보', textTitle: '메이플스토리 글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 6, textHeader: '잡담', textTitle: '메이플스토리 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 7, textHeader: '공지', textTitle: '메이플스토리 글제목1-----', userName: '홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 8, textHeader: '정보', textTitle: '메이플스토리 글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 9, textHeader: '잡담', textTitle: '메이플스토리 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 10, textHeader: '공지', textTitle: '메이플스토리 글제목1-----', userName:'홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 11, textHeader: '정보', textTitle: '메이플스토리 글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 12, textHeader: '잡담', textTitle: '메이플스토리 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2 }
    ],
    "리니지": [
        { id: 13, textHeader: '공지', textTitle: '리니지 글제목1-----', userName: '이순신', timeToWrite: '2024-05-01', textViewNumber: 232, textLikesNumber: 43, contents: "리니지 본문"},
        { id: 14, textHeader: '정보', textTitle: '리니지 글제목2-----', userName: '강감찬', timeToWrite: '2024-05-09', textViewNumber: 189, textLikesNumber: 30},
        { id: 15, textHeader: '잡담', textTitle: '리니지 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 16, textHeader: '공지', textTitle: '리니지 글제목1-----', userName: '홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 17, textHeader: '정보', textTitle: '리니지 글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 18, textHeader: '잡담', textTitle: '리니지 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 19, textHeader: '공지', textTitle: '리니지 글제목1-----', userName: '홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 20, textHeader: '정보', textTitle: '리니지 글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 21, textHeader: '잡담', textTitle: '리니지 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 22, textHeader: '공지', textTitle: '리니지 글제목1-----', userName:'홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 23, textHeader: '정보', textTitle: '리니지 글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 24, textHeader: '잡담', textTitle: '리니지 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2 }
    ],
    "아키에이지": [
        { id: 25, textHeader: '공지', textTitle: '아키에이지 글제목1-----', userName: '홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33, contents: "아키에에지 본문"},
        { id: 26, textHeader: '정보', textTitle: '아키에이지 글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 27, textHeader: '잡담', textTitle: '아키에이지 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 28, textHeader: '공지', textTitle: '아키에이지 글제목1-----', userName: '홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 29, textHeader: '정보', textTitle: '아키에이지 글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 30, textHeader: '잡담', textTitle: '아키에이지 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 31, textHeader: '공지', textTitle: '아키에이지 글제목1-----', userName: '홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 32, textHeader: '정보', textTitle: '아키에이지 글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 33, textHeader: '잡담', textTitle: '아키에이지 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 34, textHeader: '공지', textTitle: '아키에이지 글제목1-----', userName:'홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 35, textHeader: '정보', textTitle: '아키에이지 글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 36, textHeader: '잡담', textTitle: '아키에이지 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2 }
    ],
    "로스트아크": [
        { id: 37, textHeader: '공지', textTitle: '로스트아크 글제목1-----', userName: '이순신', timeToWrite: '2024-05-01', textViewNumber: 232, textLikesNumber: 43, contents: "로스트아크 본문"},
        { id: 38, textHeader: '정보', textTitle: '로스트아크 글제목2-----', userName: '강감찬', timeToWrite: '2024-05-09', textViewNumber: 189, textLikesNumber: 30},
        { id: 39, textHeader: '잡담', textTitle: '로스트아크 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 40, textHeader: '공지', textTitle: '로스트아크 글제목1-----', userName: '홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 41, textHeader: '정보', textTitle: '로스트아크 글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 42, textHeader: '잡담', textTitle: '로스트아크 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 43, textHeader: '공지', textTitle: '로스트아크 글제목1-----', userName: '홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 44, textHeader: '정보', textTitle: '로스트아크 글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 45, textHeader: '잡담', textTitle: '로스트아크 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2},
        { id: 46, textHeader: '공지', textTitle: '로스트아크 글제목1-----', userName:'홍길동', timeToWrite: '2024-05-01', textViewNumber: 132, textLikesNumber: 33},
        { id: 47, textHeader: '정보', textTitle: '로스트아크 글제목2-----', userName: '김철수', timeToWrite: '2024-05-09', textViewNumber: 89, textLikesNumber: 20},
        { id: 48, textHeader: '잡담', textTitle: '로스트아크 글제목3-----', userName: '임한별', timeToWrite: '2024-05-13', textViewNumber: 22, textLikesNumber: 2 }
    ]
};

export default gameBoardData;