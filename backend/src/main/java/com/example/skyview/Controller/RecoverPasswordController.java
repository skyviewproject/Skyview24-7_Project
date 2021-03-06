package com.example.skyview.Controller;
import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.skyview.Model.OTPModel;
import com.example.skyview.Model.OauthModel;
import com.example.skyview.Repo.UserRepo;
import com.example.skyview.Services.MyUserDetailService;
import com.example.skyview.Services.OTPService;
import com.example.skyview.Services.UserServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RecoverPasswordController 
{
	@Autowired
	UserRepo repo;
	
	@Autowired
	MyUserDetailService service1;
	
	@Autowired
	OTPService service2;
	
	@Autowired
	UserServices service3;
	
	@PostMapping(path="/sendotp/{emailId}")
	public String genearteOTP(@PathVariable String emailId) throws AddressException, MessagingException
	{
		String val = repo.findMyUserIdandRole(emailId);
		String arr[] = val.split(",");
		String uId = arr[0];
		boolean ret = this.service2.SendOtp(Long.parseLong(uId));
		
		if(ret==true)
		{
			return ("OTP has been sended Successfully, check Mail");
		}
		
		else
		{
			return ("Oops Something went Wrong");
		}
	}
	
	@PostMapping(path="/matchotp/{emailId}")
	public boolean validateOTP(@PathVariable String emailId, @RequestBody OTPModel requestedOTP) 
	{
		String val = repo.findMyUserIdandRole(emailId);
		String arr[] = val.split(",");
		String uId = arr[0];
		requestedOTP.setUserId(Long.parseLong(uId));
		boolean ret = this.service2.validateOTP(requestedOTP);
		
		if(ret==true)
		{
			return true;
		}
		
		else
		{
			return false;
		}
	}
	
	@PutMapping(path="/restpassword")
	public String resetPassword(@RequestBody OauthModel model)
	{
		String emailId = model.getUsername();
		String password = model.getPassword();
		
		boolean ret = this.service3.UpdatePassword(emailId, password);
		
		if(ret==true)
		{
			return "Password Updated Successfully";
		}
		
		else
		{
			return "Opps Something went Wrong";
		}
	}
}
