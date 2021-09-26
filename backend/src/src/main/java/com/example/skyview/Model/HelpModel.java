package com.example.skyview.Model;

import java.util.List;

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
@Table(name = "dailyhelp_info")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"},
        allowGetters = true)
@Component
public class HelpModel 
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="help_id")
    private long id;
	
	@Column(name="help_name")
    private String helpName;

    @Column(name="help_contact")
    private String helpContact;
    
    @Column(name="help_age")
    private String helpAge;
    
    @Column(name="help_gender")
    private String helpGender;

    @Column(name="help_type")
    private String helpType;
    
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getHelpName() {
		return helpName;
	}

	public void setHelpName(String helpName) {
		this.helpName = helpName;
	}

	public String getHelpContact() {
		return helpContact;
	}

	public void setHelpContact(String helpContact) {
		this.helpContact = helpContact;
	}

	public String getHelpAge() {
		return helpAge;
	}

	public void setHelpAge(String helpAge) {
		this.helpAge = helpAge;
	}

	public String getHelpGender() {
		return helpGender;
	}

	public void setHelpGender(String helpGender) {
		this.helpGender = helpGender;
	}

	public String getHelpType() {
		return helpType;
	}

	public void setHelpType(String helpType) {
		this.helpType = helpType;
	}
}
