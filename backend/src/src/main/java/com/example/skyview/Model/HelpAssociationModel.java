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
@Table(name = "helpassosication_info")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"},
        allowGetters = true)
@Component
public class HelpAssociationModel 
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="helpassosication_id")
    private long id;
	
	@Column(name="helper_id")
	private long helperId;
	
	@Column(name="resident_id")
	private long residentId;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getHelperId() {
		return helperId;
	}

	public void setHelperId(long helperId) {
		this.helperId = helperId;
	}

	public long getResidentId() {
		return residentId;
	}

	public void setResidentId(long residentId) {
		this.residentId = residentId;
	}
	
	
}
