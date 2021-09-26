package com.example.skyview.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.skyview.Model.InvoiceModel;
import com.example.skyview.Services.InvoiceServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class InvoiceController 
{
	@Autowired
	InvoiceServices service;
	
	@PostMapping(path="/admin/addinvoice")
	public String newInvoice(@RequestBody InvoiceModel invoice)
	{
		boolean ret = this.service.addInvoice(invoice);
		
		if(ret==true)
		{
			return ("New Invoice has been Created Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@PutMapping(path="/admin/updateinvoice/{id}")
	public String changeInvoice(@PathVariable String id, @RequestBody InvoiceModel invoice)
	{
		boolean ret = this.service.updateInvoice(Long.parseLong(id), invoice);
		
		if(ret==true)
		{
			return ("Invoice Data has been Updated Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@GetMapping(path="/resident/viewmyinvoices/{ownerId}")
	public List<InvoiceModel> getMyInvoices(@PathVariable String ownerId)
	{
		return this.service.findMyInvoices(Long.parseLong(ownerId));
	}
	
	@GetMapping(path="/admin/viewallinvoices")
	public List<List<String>> getAllInvoices()
	{
		return this.service.viewAllInvoices();
	}
	
	@GetMapping(path="/admin/viewinvoicedetails/{id}")
	public InvoiceModel getInvoiceDetails(@PathVariable String id)
	{
		return this.service.viewInvoiceDetails(Long.parseLong(id));
	}
	
	@DeleteMapping(path="/admin/removeinvoice/{id}")
	public String deleteInvoice(@PathVariable String id)
	{
		boolean ret = this.service.removeInvoice(Long.parseLong(id));
		
		if(ret==true)
		{
			return ("Invoice Data has been Removed Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
}
