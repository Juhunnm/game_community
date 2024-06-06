package com.java_app.game_community.mapper;

import com.java_app.game_community.vo.gameBoardVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface gameBoardMapper {
	public List<gameBoardVO> gameBoardList();
	
	public gameBoardVO gameBoardOne(int boardId);
	
	public void updateView(int boardId);
	
	public void insertBoard(gameBoardVO vo);
	
	public List<gameBoardVO> viewBoardList();
	
	public List<gameBoardVO> rankList();

	public void updateLike(int boardId);
}
