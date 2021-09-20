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
@Table(name = "payhistory_info")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"},
        allowGetters = true)
@Component
public class PaymentDetailsModel 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="payment_id")
	private Long id;
	
	@Column(name="payment_userid")
	private long userId;
	
	@Column(name="paid_amount_rupees") 
	private int totalAmount;
	
	@Column(name="payment_doneon")
	private String payDate;
	
	@Column(name="payment_status")
	private String paymentStatus="NOT_VERIFIED";
	
	@Column(name="payment_method")
	private String payMethod;
	
	@Column(name="recipant_details")
	private String recipantDetails;
	
	@Column(name="payment_verifiedon")
	private String verifyDate;
	
	@Column(name="payment_refid")
	private long payRefId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public int getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(int totalAmount) {
		this.totalAmount = totalAmount;
	}

	public String getPayDate() {
		return payDate;
	}

	public void setPayDate(String payDate) {
		this.payDate = payDate;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public String getPayMethod() {
		return payMethod;
	}

	public void setPayMethod(String payMethod) {
		this.payMethod = payMethod;
	}

	public String getRecipantDetails() {
		return recipantDetails;
	}

	public void setRecipantDetails(String recipantDetails) {
		this.recipantDetails = recipantDetails;
	}

	public String getVerifyDate() {
		return verifyDate;
	}

	public void setVerifyDate(String verifyDate) {
		this.verifyDate = verifyDate;
	}

	public long getPayRefId() {
		return payRefId;
	}

	public void setPayRefId(long payRefId) {
		this.payRefId = payRefId;
	}

	
	
}
