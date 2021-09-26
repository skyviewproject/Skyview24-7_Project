package com.example.skyview.Controller;
import java.util.List;
import java.util.Optional;
import java.util.Properties;
import java.util.Random;

import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.example.skyview.Model.ChangePassword;
import com.example.skyview.Model.CheckUser;
import com.example.skyview.Model.OauthModel;
import com.example.skyview.Model.SendOTP;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.skyview.Model.UserModel;
import com.example.skyview.Model.VerifyOTP;
import com.example.skyview.Repo.UserRepo;
import com.example.skyview.Services.OauthLoginService;
import com.example.skyview.Services.SendEmailService;


@RestController
public class LoginController 
{
	int otp;
	@Autowired
	OauthLoginService service;
	@Autowired
	UserRepo userrepo;
	@Autowired
	SendEmailService emailService;
	
	@PostMapping(path="/authandlogin")
	public String getUsers(@RequestBody OauthModel model)
	{
		String uname = model.getUsername();
		String psw = model.getPassword();
		return this.service.Oauth2LoginService(uname, psw);
	}
	@PostMapping(path="/checkemailiduser")
	public boolean checkUser(@RequestBody CheckUser model)
	{
		Optional<UserModel> user = userrepo.findByEmailId(model.getEmail());
		 if(user.isPresent()==true)
	       {
	    	  return true;
	       }
		else return false;
	
		
	}
	@PostMapping(path="/sendotptouser")
	public boolean sendemail(@RequestBody SendOTP model)
	{
		Random random = new Random();
        otp=random.nextInt(999999 - 100000) + 100000;
       
        String body="Hello sir/mam , In skyview24*7 your one time password is "+String.valueOf(otp)+" . It will be valid for 3 minutes. Don't Share this with anybody";
        String topic="OTP for Forget password";
        emailService.sendEmail(model.getEmail(),body,topic);
        return true;
	}
	
	@PostMapping("/validateotp")
	public boolean validateotp(@RequestBody VerifyOTP model)
	{
		if(otp==model.getOtp())
        {
            otp=0;
            return true;
        }
		else return false;
	}
	@PostMapping("/changepassword")
	public boolean chagepassword(@RequestBody ChangePassword model)
	{
		UserModel user = userrepo.findByEmailId(model.getEmail()).orElseThrow();
		user.setUserPassword(new BCryptPasswordEncoder().encode(model.getPassword()));
		userrepo.save(user);
		return true;
		
	}
	
}

	