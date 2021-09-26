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
@Table(name = "mail_info")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"},
        allowGetters = true)
@Component
public class NotificationMailModel 
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="mail_id")
    private long id;
	
	@Column(name="mail_address")
	private String mailAddress;
	
	@Column(name="mail_header")
    private String mailHeader;
	
	@Column(name="mail_body")
    private String mailBody;
	
	@Column(name="mail_sendingtime")
    private String sendTime;
    
    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

    public String getMailHeader() {
        return mailHeader;
    }

    public void setMailHeader(String mailHeader) {
        this.mailHeader = mailHeader;
    }

    public String getMailBody() {
        return mailBody;
    }

    public void setMailBody(String mailBody) {
        this.mailBody = mailBody;
    }

    public String getMailAddress() {
        return mailAddress;
    }

    public void setMailAddress(String mailAddress) {
        this.mailAddress = mailAddress;
    }

	public String getSendTime() {
		return sendTime;
	}

	public void setSendTime(String sendTime) {
		this.sendTime = sendTime;
	}
    
    
}
