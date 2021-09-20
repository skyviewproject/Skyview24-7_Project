package com.example.skyview.Services;

import java.io.IOException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.skyview.Model.NotificationMailModel;
import com.example.skyview.Model.TicketsModel;
import com.example.skyview.Model.UserModel;
import com.example.skyview.Repo.TicketsRepo;
import com.example.skyview.Repo.UserRepo;
@Service
public class TicketsServices 
{

	@Autowired
	TicketsRepo repo1;
	
	@Autowired
	UserRepo repo2;
	
	@Autowired
	NotificationMailServices mailService;
	
	public boolean addTicket(long id, TicketsModel ticket) 
	{
		ticket.setRaiserName(repo2.findById(id).get().getFullName());
		ticket.setRaiserFlatno(repo2.findById(id).get().getUserFlatNo());
		SimpleDateFormat time = new SimpleDateFormat("HH:mm:ss yyyy/MM/dd");
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        ticket.setTicketIssuedate(String.valueOf(time.format(timestamp)));
        repo1.save(ticket);
		return true;
		
	}
	
	public boolean updateTicketbySupervisor(long ticketId) throws AddressException, MessagingException, IOException 
	{
		TicketsModel updated =repo1.findById(ticketId).get();
		updated.setTicketStatus("SOLVED");
		SimpleDateFormat time = new SimpleDateFormat("HH:mm:ss yyyy/MM/dd");
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        updated.setTicketSolveddate(String.valueOf(time.format(timestamp)));
		repo1.save(updated);
		
		NotificationMailModel mail = new NotificationMailModel();
		mail.setMailBody("Hi " + updated.getRaiserName() + " Please note that Ticket rised at " + updated.getTicketIssuedate() + " on "+ updated.getTicketTopic() +" has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7");
		mail.setMailHeader("Ticket Solved Confirmation");
		mail.setMailAddress("skyviewproject247@gmail.com");
		
		this.mailService.sendMail(mail);
		
		return true;
		
	}
	
	public TicketsModel findTicketbyId(long ticketId) 
	{
		return repo1.findById(ticketId).get();
		
	}
	
	public List<TicketsModel> findAllTickets()
	{
		return repo1.findAll();
	}
	
	public List<TicketsModel> findMyTickets(long ownerId)
	{
		String flat = repo2.findById(ownerId).get().getUserFlatNo();
		String name = repo2.findById(ownerId).get().getFullName();
		
		return repo1.findMyTicketsId(flat, name);
	}
	
	public String ifSolved(long ticketId)
	{
		return repo1.findIfTicketSolved(ticketId);
	}
}