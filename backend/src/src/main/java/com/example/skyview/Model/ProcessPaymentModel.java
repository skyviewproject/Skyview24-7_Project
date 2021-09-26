package com.example.skyview.Model;
import org.springframework.stereotype.Component;

@Component
public class ProcessPaymentModel 
{
	private long processUserId;
	private long invoiceId;
	private String processMethodDetails;
	private int processTotalAmount;
	private String processPayMethod;
	private String processRecipantDetails;
	
	public long getProcessUserId() {
		return processUserId;
	}
	public void setProcessUserId(long processUserId) {
		this.processUserId = processUserId;
	}
	
	public long getInvoiceId() {
		return invoiceId;
	}
	public void setInvoiceId(long invoiceId) {
		this.invoiceId = invoiceId;
	}
	public String getProcessMethodDetails() {
		return processMethodDetails;
	}
	public void setProcessMethodDetails(String processMethodDetails) {
		this.processMethodDetails = processMethodDetails;
	}
	public int getProcessTotalAmount() {
		return processTotalAmount;
	}
	public void setProcessTotalAmount(int processTotalAmount) {
		this.processTotalAmount = processTotalAmount;
	}
	public String getProcessPayMethod() {
		return processPayMethod;
	}
	public void setProcessPayMethod(String processPayMethod) {
		this.processPayMethod = processPayMethod;
	}
	public String getProcessRecipantDetails() {
		return processRecipantDetails;
	}
	public void setProcessRecipantDetails(String processRecipantDetails) {
		this.processRecipantDetails = processRecipantDetails;
	}
	
	
}
