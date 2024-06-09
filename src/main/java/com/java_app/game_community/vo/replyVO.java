package com.java_app.game_community.vo;

public class replyVO {
	private int replyId;
	private int boardId;
	private String replycontent;
	private String userName;


	public String getUserName(){return userName;}
	public void setUserName(String userName){this.userName = userName;}
	public int getReplyId() {
		return replyId;
	}
	public void setReplyId(int replyId) {
		this.replyId = replyId;
	}
	public int getBoardId() {
		return boardId;
	}
	public void setBoardId(int boardId) {
		this.boardId = boardId;
	}
	public String getReplycontent() {
		return replycontent;
	}
	public void setReplycontent(String replycontent) {
		this.replycontent = replycontent;
	}
	
	
}
