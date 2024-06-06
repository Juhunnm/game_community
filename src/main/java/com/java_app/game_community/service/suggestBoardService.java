package com.java_app.game_community.service;

import com.java_app.game_community.mapper.suggestBoardMapper;
import com.java_app.game_community.vo.suggestBoardVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class suggestBoardService {
	
	@Autowired
	private suggestBoardMapper sm;
	
	public List<suggestBoardVO> suggestBoardList(){
		return sm.suggestBoardList();
	}
	
	public suggestBoardVO suggestBoardOne(int suggestId) {
		return sm.suggestBoardOne(suggestId);
	}
	
	public void insertsBoard(suggestBoardVO vo) {
		sm.insertsBoard(vo);
	}
}
