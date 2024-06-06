package com.java_app.game_community.service;

import com.java_app.game_community.mapper.replyMapper;
import com.java_app.game_community.vo.replyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class replyService {
	@Autowired
	replyMapper rm;
	
	public List<replyVO> replyList(int boardId){
		return rm.replyList(boardId);
	}
	
	public void insertReply(replyVO vo) {
		rm.insertReply(vo);
	}
}
