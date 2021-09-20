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
@Table(name = "invoice_info")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"},
        allowGetters = true)
@Component
public class InvoiceModel 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="invoice_id")
	private Long id;
	
	@Column(name="invoice_ownerid")
	private long ownerUserid;
	
	@Column(name="invoice_amount_rupees") 
	private int totalAmount;
	
	@Column(name="invoice_duedate")
	private String dueDate;
	
	@Column(name="invoice_reason")
	private String invoiceReason;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getInvoiceReason() {
		return invoiceReason;
	}

	public void setInvoiceReason(String invoiceReason) {
		this.invoiceReason = invoiceReason;
	}

	public long getOwnerUserid() {
		return ownerUserid;
	}

	public void setOwnerUserid(long ownerUserid) {
		this.ownerUserid = ownerUserid;
	}

	public int getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(int totalAmount) {
		this.totalAmount = totalAmount;
	}

	public String getDueDate() {
		return dueDate;
	}

	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}

	
}
