package com.example.skyview.Model;
import java.util.Date;
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
@Table(name = "otp_info")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"},
        allowGetters = true)
@Component
public class OTPModel 
{

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="otp_id")
    private long id;

	@Column(name = "otp_generatedfor")
	private long userId;
	
	@Column(name = "otp_value")
    private String otpValue;
     
    @Column(name = "otp_generatetime")
    private Date otpGeneratetime;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getOtpValue() {
		return otpValue;
	}

	public void setOtpValue(String otpValue) {
		this.otpValue = otpValue;
	}

	public Date getOtpGeneratetime() {
		return otpGeneratetime;
	}

	public void setOtpGeneratetime(Date otpGeneratetime) {
		this.otpGeneratetime = otpGeneratetime;
	}

    
}
