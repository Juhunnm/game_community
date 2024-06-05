package com.java_app.game_community.mapper;

import com.java_app.game_community.vo.replyVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface replyMapper {
	public List<replyVO> replyList(int boardId);
	
	public void insertReply(replyVO vo);
}
