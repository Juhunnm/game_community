package com.java_app.game_community.vo;

import java.util.Date;

public class gameBoardVO {
	private int boardId;
	private String textHeader;
	private String textTitle;
	private String userName;
	private Date timeToWrite;
	private int textViewNumber;
	private int textLikesNumber;
	private String content;
	private String gameType;
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getGameType() {
		return gameType;
	}
	public void setGameType(String gameType) {
		this.gameType = gameType;
	}
	public int getBoardId() {
		return boardId;
	}
	public void setBoardId(int boardId) {
		this.boardId = boardId;
	}
	public String getTextHeader() {
		return textHeader;
	}
	public void setTextHeader(String textHeader) {
		this.textHeader = textHeader;
	}
	public String getTextTitle() {
		return textTitle;
	}
	public void setTextTitle(String textTitle) {
		this.textTitle = textTitle;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Date getTimeToWrite() {
		return timeToWrite;
	}
	public void setTimeToWrite(Date timeToWrite) {
		this.timeToWrite = timeToWrite;
	}
	public int getTextViewNumber() {
		return textViewNumber;
	}
	public void setTextViewNumber(int textViewNumber) {
		this.textViewNumber = textViewNumber;
	}
	public int getTextLikesNumber() {
		return textLikesNumber;
	}
	public void setTextLikesNumber(int textLikesNumber) {
		this.textLikesNumber = textLikesNumber;
	}
	
	

}
