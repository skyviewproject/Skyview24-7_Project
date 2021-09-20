package com.example.skyview.Controller;
import com.example.skyview.Model.NotificationMailModel;
import com.example.skyview.Services.NotificationMailServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class NotificationMailController 
{
	
	@Autowired
	NotificationMailServices service;
	
	@PostMapping(path = "/admin/sendmail")
    public String sendMail(@RequestBody NotificationMailModel mail) throws MessagingException, IOException 
	{
        return this.service.sendMail(mail);
    }
	
	@GetMapping(path="/admin/viewallmails")
	public List<NotificationMailModel> getMails()
	{
		return this.service.viewAllSendedMails();
	}

}
