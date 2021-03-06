package com.example.skyview.Controller;

import java.io.IOException;
import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.skyview.Model.TicketsModel;
import com.example.skyview.Services.TicketsServices;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TicketsController 
{
	@Autowired
	TicketsServices service;
	
   @PostMapping(path="/resident/addTicket/{userId}")
   public String addTicket(@PathVariable String userId, @RequestBody TicketsModel ticket ) 
   {
	   boolean ret = this.service.addTicket(Long.parseLong(userId), ticket);
	   if(ret==true)
	   {
		   return("new ticket has been added succesfully");
	   }
	   else
		{
			return ("Opps Something Wrong happened");
		}
   }
   
   @PutMapping(path="/supervisor/vieworsolveissue/{ticketId}")
	public String updateticketdetails(@PathVariable String ticketId) throws AddressException, NumberFormatException, MessagingException, IOException
	{
		boolean ret= this.service.updateTicketbySupervisor(Long.parseLong(ticketId));
		
		if(ret==true)
		{
			return ("Your ticket has been Updated Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
		
	}
	
	@GetMapping(path="/supervisor/getticketdetails/{id}")
	public TicketsModel viewTicketDetails(@PathVariable long ticketId)
	{
		return this.service.findTicketbyId(ticketId);
	}
	
	@GetMapping(path="/supervisor/getalltickets")
	public List<TicketsModel> getAllTickes()
	{
		return this.service.findAllTickets();
	}
	
	@GetMapping(path="/resident/viewmytickets/{ownerId}")
	public List<TicketsModel> getMyTickets(@PathVariable String ownerId)
	{
		return this.service.findMyTickets(Long.parseLong(ownerId));
	}
	
	@GetMapping(path="/supervisior/ifticketverified/{ticketId}")
	public String ifTicketResolved(@PathVariable String ticketId)
	{
		return this.service.ifSolved(Long.parseLong(ticketId));
	}
	

}