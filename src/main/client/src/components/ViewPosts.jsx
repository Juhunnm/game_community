import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faThumbsUp, faBookmark } from '@fortawesome/free-solid-svg-icons';
import './YuriStyle.css';
import gameBoardData from './gameBoardData'; //게임 게시판 데이터 파일


const ViewPosts = () => {

    const {id } = useParams();

    const post = {
        id,
        textHeader: '잡담',
        textTitle: '글 제목',
        userName: '홍길동',
        timeToWrite: '2024/04/06',
        textViewNumber: 1002,
        textLikesNumber: 47,
        contents: '본문\n.\n.\n.\n'
    };

    //댓글 목록 관리
    const [comments, setComments] = useState([]);
    //입력된 댓글 관리
    const [commentText, setCommentText] = useState('');
    //작성자 닉네임 관리
    const [commentNickname, setCommentNickname] = useState('');
    //댓글란에 댓글 입력
    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    };
    //닉네임 입력
    const handleNicknameChange = (event) => {
        setCommentNickname(event.target.value);
    };
    //댓글 제출 버튼 클릭시 내용을 comments에 추가
    const handleCommentSubmit = () => {
        if (commentText.trim() && commentNickname.trim()) {
            const newComment = {
                nickname: commentNickname,
                text: commentText,
            };
            setComments([...comments, newComment]);
            setCommentText('');
            setCommentNickname('');
        }
    };
    //북마크 추가 알림
    const handleBookmarkClick = () => {
        alert('북마크에 추가되었습니다.');
    };
    //추천 클릭 알림
    const handleLikeClick = () => {
        alert('이 글을 추천했습니다.');
    };

    return (
        <div>
            <div className="viewComponent">
                <div className="container1">
                    <div className="postContainer">
                        <div className="postTopLine">
                            <div className="postHead">{post.textHeader}</div>
                            <div className="postTitle">{post.textTitle}</div>
                            <div className="postInfo">
                                <span className="post-nickname">{post.userName}</span>
                                <span className="post-date">{post.timeToWrite}</span>
                                <span className="post-views"><FontAwesomeIcon icon={faEye}/> {post.textViewNumber}</span>
                                <span className="post-likes"><FontAwesomeIcon icon={faThumbsUp}/> {post.textLikesNumber}</span>
                            </div>
                        </div>
                        <div className="postContents">
                            <div className="postContentsText">{post.contents}</div>
                        </div>
                        <div className="actionContainer">
                            <div className="actionLine">
                                <button className="bookmarkButton" onClick={handleBookmarkClick}>
                                    <FontAwesomeIcon icon={faBookmark}/> 북마크</button>
                                <button className="likeButton" onClick={handleLikeClick}>
                                    <FontAwesomeIcon icon={faThumbsUp}/> 추천</button>
                            </div>
                        </div>
                    </div>
                    <div className="commentContainer">
                        <div className="commentTitle">댓글</div>
                        <div className="commentBox"> {/*게시글 본문 가져오기*/}
                            {comments.map((comment, index) => (
                                <div key={index} className="commentLine">
                                    <div className="userNickname">{comment.nickname}</div>
                                    <div className="commentTextBox">{comment.text}</div>
                                </div>
                            ))}
                            <input
                                className="writeNicknameBox"
                                type="text"
                                placeholder="닉네임"
                                value={commentNickname}
                                onChange={handleNicknameChange}
                            />
                            <div className="writeCommentLine">
                                <input className="writeCommentBox"
                                       type="text" placeholder="댓글 내용을 입력하세요"
                                       value={commentText}
                                       onChange={handleCommentChange}
                                />
                                <button className="CommentSubmitButton"
                                        onClick={handleCommentSubmit}
                                >입력
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container2">
                    <button className="previousPost">이전 글 /</button>
                    <button className="nextPost">다음 글 /</button>
                </div>
            </div>
        </div>
    )
};

export default ViewPosts;