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
@Table(name = "income_info")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"},
        allowGetters = true)
@Component
public class IncomeModel 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="income_id")
	private Long id;
	
	@Column(name="income_month")
	private String incomeMonth;
	
	@Column(name="income_amount")
	private int incomeAmount;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIncomeMonth() {
		return incomeMonth;
	}

	public void setIncomeMonth(String incomeMonth) {
		this.incomeMonth = incomeMonth;
	}

	public int getIncomeAmount() {
		return incomeAmount;
	}

	public void setIncomeAmount(int incomeAmount) {
		this.incomeAmount = incomeAmount;
	}
	
	
	
}
