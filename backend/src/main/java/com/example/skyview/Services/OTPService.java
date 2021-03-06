package com.example.skyview.Services;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import org.springframework.stereotype.Service;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.skyview.Model.OTPModel;
import com.example.skyview.Repo.OTPRepo;
import net.bytebuddy.utility.RandomString;

@Service
public class OTPService 
{
	@Autowired
	OTPRepo repo;
	
	public boolean SendOtp(long uId) throws AddressException, MessagingException 
	{
		OTPModel model = new OTPModel();
		model.setOtpGeneratetime(new Date());
		int min = 100000;  
		int max = 999999;  	
		double a = Math.random()*(max-min+1)+min;   
		int b = (int)(Math.random()*(max-min+1)+min); 
		
		String value = String.valueOf(b);
		model.setOtpValue(value);
		model.setUserId(uId);
		repo.save(model);
		
		Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("skyviewproject247@gmail.com", "mwnnwzfkobvzvbta");
            }
        });

        Message msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress("skyviewproject247@gmail.com", false));

        msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse("skyviewproject247@gmail.com"));
        msg.setContent(value, "text/plain");
        msg.setSubject("OTP from SKYVIEW24*7");
        Transport.send(msg);
		return true;
	}
	
	
	public boolean validateOTP(OTPModel requestedOTP)
	{
		boolean ret = false;
		long userId = requestedOTP.getUserId();
		
		if(repo.findTheOTP(userId).size()==0)
		{
			ret = false;
		}
		
		else
		{
			OTPModel generatedOTP = repo.findTheOTP(userId).get(0);
			
			long currentTime = System.currentTimeMillis();
			String requestedVal = requestedOTP.getOtpValue();
			String generatedVal = generatedOTP.getOtpValue();
			
	        long otpGeneratedAt = generatedOTP.getOtpGeneratetime().getTime();
	        long validityTime = 3 * 60 * 1000;
	        
			if((currentTime > otpGeneratedAt + validityTime) || (requestedVal.equals(generatedVal)==false))
			{
				ret = false;
			}	
			
			else
			{
				ret = true;
			}
			
			long OTPId = generatedOTP.getId();
			repo.deleteById(OTPId);
		}
		
		return ret;
	}
}
