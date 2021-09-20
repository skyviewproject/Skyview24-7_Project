package com.example.skyview.Services;
import com.example.skyview.Model.NotificationMailModel;
import com.example.skyview.Repo.NotificationMailRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Properties;

@Service
public class NotificationMailServices 
{
	@Autowired
	NotificationMailRepo repo;
	
	public String sendMail(NotificationMailModel mail) throws AddressException, MessagingException, IOException 
	{
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

        String receiverAddress = mail.getMailAddress();
        String subject = mail.getMailHeader();
        String mailBody = mail.getMailBody();

        Message msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress("skyviewproject247@gmail.com", false));

        msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(receiverAddress));
        msg.setSubject(subject);
        msg.setContent(mailBody, "text/plain");

        Transport.send(msg);
        
        SimpleDateFormat time = new SimpleDateFormat("HH:mm:ss yyyy/MM/dd");
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        mail.setSendTime(String.valueOf(time.format(timestamp)));
        repo.save(mail);
        
        return ("Notification Mail has been sended Successfully");
    }
	
	public List<NotificationMailModel> viewAllSendedMails()
	{
		return repo.findAll();
	}
}
