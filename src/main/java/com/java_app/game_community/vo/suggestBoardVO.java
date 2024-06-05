package com.java_app.game_community.vo;

import java.util.Date;

public class suggestBoardVO {
	private int suggestId;
	private String sTextHeader;
	private String sTextTitle;
	private String sTitle;
	private String sContent;
	private Date stimeToWrite;
	
	
	public int getSuggestId() {
		return suggestId;
	}
	public void setSuggestId(int suggestId) {
		this.suggestId = suggestId;
	}
	public String getsTextHeader() {
		return sTextHeader;
	}
	public void setsTextHeader(String sTextHeader) {
		this.sTextHeader = sTextHeader;
	}
	public String getsTextTitle() {
		return sTextTitle;
	}
	public void setsTextTitle(String sTextTitle) {
		this.sTextTitle = sTextTitle;
	}
	public String getsTitle() {
		return sTitle;
	}
	public void setsTitle(String sTitle) {
		this.sTitle = sTitle;
	}
	public String getsContent() {
		return sContent;
	}
	public void setsContent(String sContent) {
		this.sContent = sContent;
	}
	public Date getStimeToWrite() {
		return stimeToWrite;
	}
	public void setStimeToWrite(Date stimeToWrite) {
		this.stimeToWrite = stimeToWrite;
	}
	
	
}
