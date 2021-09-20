package com.example.skyview.Controller;
import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.skyview.Model.OTPModel;
import com.example.skyview.Services.OTPService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OTPController 
{
	@Autowired
	OTPService service;
	
	@PostMapping(path="/resident/generateotp/{uId}")
	public String genearteOTP(@PathVariable String uId) throws AddressException, MessagingException
	{
		boolean ret = this.service.SendOtp(Long.parseLong(uId));
		
		if(ret==true)
		{
			return ("OTP has been sended Successfully, check Mail");
		}
		
		else
		{
			return ("Oops Something went Wrong");
		}
	}
	
	@PostMapping(path="/resident/validateotp")
	public boolean validateOTP(@RequestBody OTPModel requestedOTP) 
	{
		boolean ret = this.service.validateOTP(requestedOTP);
		
		if(ret==true)
		{
			return true;
		}
		
		else
		{
			return false;
		}
	}
	
}
