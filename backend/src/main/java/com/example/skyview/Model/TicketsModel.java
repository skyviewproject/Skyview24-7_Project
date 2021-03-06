package com.example.skyview.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "ticket_info")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"},
        allowGetters = true)
@Component
public class TicketsModel 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ticket_id")
	private long id;
	
	@Column(name="ticket_risername")
	private String raiserName;
	
	@Column(name="ticket_riserflatno")
	private String raiserFlatno;
	
	@Column(name="ticket_topic")
	private String ticketTopic;
	
	@Column(name="ticket_details")
	private String ticketDetails;
	
	@Column(name="ticket_issuedate")
	private String ticketIssuedate;
	
	@Column(name="ticket_solvedate")
	private String ticketSolveddate;
	
	
	@Column(name="ticket_status")
	private String ticketStatus="PENDING";

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getRaiserName() {
		return raiserName;
	}

	public void setRaiserName(String raiserName) {
		this.raiserName = raiserName;
	}

	public String getRaiserFlatno() {
		return raiserFlatno;
	}

	public void setRaiserFlatno(String raiserFlatno) {
		this.raiserFlatno = raiserFlatno;
	}

	public String getTicketTopic() {
		return ticketTopic;
	}

	public void setTicketTopic(String ticketTopic) {
		this.ticketTopic = ticketTopic;
	}

	public String getTicketDetails() {
		return ticketDetails;
	}

	public void setTicketDetails(String ticketDetails) {
		this.ticketDetails = ticketDetails;
	}

	public String getTicketIssuedate() {
		return ticketIssuedate;
	}

	public void setTicketIssuedate(String ticketIssuedate) {
		this.ticketIssuedate = ticketIssuedate;
	}

	public String getTicketStatus() {
		return ticketStatus;
	}

	public void setTicketStatus(String ticketStatus) {
		this.ticketStatus = ticketStatus;
	}

	public String getTicketSolveddate() {
		return ticketSolveddate;
	}

	public void setTicketSolveddate(String ticketSolveddate) {
		this.ticketSolveddate = ticketSolveddate;
	}
	
}
