package com.java_app.game_community.mapper;

import com.java_app.game_community.vo.suggestBoardVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface suggestBoardMapper {
	public List<suggestBoardVO> suggestBoardList();
	
	public suggestBoardVO suggestBoardOne(int suggestId);
	
	
	public void insertsBoard(suggestBoardVO vo);
	
}
