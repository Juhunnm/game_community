package com.java_app.game_community.service;

import com.java_app.game_community.mapper.gameBoardMapper;
import com.java_app.game_community.vo.gameBoardVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class gameBoardService {
	@Autowired
	private gameBoardMapper gm;
	
	public List<gameBoardVO> gameBoardList(){
		return gm.gameBoardList();
	}
	
	public gameBoardVO gameBoardOne(int boardId) {
		return gm.gameBoardOne(boardId);
	}
	
	public void updateView(int boardId) {
        System.out.println("조회수 증가 서비스 통과");
        gm.updateView(boardId);
    }
	
	public void insertBoard(gameBoardVO vo) {
		gm.insertBoard(vo);
	}
	public List<gameBoardVO> viewBoardList(){
		return gm.viewBoardList();
	}
	
	public List<gameBoardVO> rankList(){
		return gm.rankList();
	}

	public void updateLike(int boardId){ gm.updateLike(boardId); }
}
