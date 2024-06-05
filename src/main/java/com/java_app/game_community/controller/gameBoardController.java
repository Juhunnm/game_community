package com.java_app.game_community.controller;

import com.java_app.game_community.service.gameBoardService;
import com.java_app.game_community.service.replyService;
import com.java_app.game_community.vo.gameBoardVO;
import com.java_app.game_community.vo.replyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class gameBoardController {
	@Autowired
	private gameBoardService gbs;
	
	@Autowired
	private replyService rs;
	
	@GetMapping(value="/gameBoard") // 게시판 리스트 --각 게임별 게시판
	public List<gameBoardVO> gameBoardList(){
		return gbs.gameBoardList();
	}
	
	@GetMapping(value="/gameBoard/{boardId}") //pk 검색에 따른 게시판 댓글 포함--게시판 상세 페이지
    public Map<String, Object> gameBoardOne(@PathVariable("boardId") int boardId) {
        gbs.updateView(boardId);

        gameBoardVO gameBoard = gbs.gameBoardOne(boardId);
        List<replyVO> replies = rs.replyList(boardId);

        Map<String, Object> response = new HashMap<>();
        response.put("gameBoard", gameBoard);
        response.put("replies", replies);

        return response;
    }
	
	@PostMapping(value="/gameBoard/insertBoard") // 게시판 생성 --글쓰기 페이지
	public String insertBoard(@RequestBody gameBoardVO vo) {
		gbs.insertBoard(vo);
		return "success";
	}
	
	@GetMapping(value="/viewBoardList") // 조회수 순 게시판 리스트 --인기게시판 인기글
	public List<gameBoardVO> viewBoardList(){
		return gbs.gameBoardList();
	}
	
	@GetMapping(value="/rankList") // 게시판 게임 종류별 조회수 합 내림차순 정렬 -- 인기게시판 인기 순위
	public List<gameBoardVO> rankList(){
		return gbs.rankList();
	}
	
	@PostMapping(value="/gameBoard/{boardId}/insertReply")
	public String insertReply(@PathVariable("boardId") int boardId, @RequestBody replyVO vo) {
		vo.setBoardId(boardId);
		rs.insertReply(vo);
		return "success";
	}

	@PutMapping(value = "gameBoard/{boardId}/updateLike")
	public String updateLike(@PathVariable("boardId") int boardId){
		gbs.updateLike(boardId);
		return "success";
	}
}
