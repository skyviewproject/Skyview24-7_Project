package com.example.skyview.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.skyview.Model.PaymentDetailsModel;
import com.example.skyview.Model.PaymentMethodModel;
import com.example.skyview.Model.ProcessPaymentModel;
import com.example.skyview.Services.PaymentDetailsServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PaymentDetailsController 
{
	@Autowired
	PaymentDetailsServices service;
	
	@PostMapping(path="/resident/addpaymentmethod")
	public String registerPaymentMethod(@RequestBody PaymentMethodModel method)
	{
		boolean ret = this.service.registerPaymentMethod(method);
		
		if(ret==true)
		{
			return ("New Payment Method has been Added Successfully, You can Use it");
		}
		
		else if(ret==false)
		{
			return ("Payment Method already Available, if required you can Update it");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
		
	}
	
	@PutMapping(path="/resident/updatepaymentmethod/{payid}")
	public String modifyPaymentMethod(@PathVariable String payid, @RequestBody PaymentMethodModel model)
	{
		boolean ret = this.service.updatePaymentMethod(Long.parseLong(payid), model);
		
		if(ret==true)
		{
			return ("Payment Method has been Updateded Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@GetMapping(path="/resident/getpaymentdetails/{payId}")
	public PaymentMethodModel getPaymentMethodDetails(@PathVariable String payId)
	{
		return this.service.ViewMethodDetails(Long.parseLong(payId));
	}
	
	@GetMapping(path="/resident/getmypaymentmethod/{userId}")
	public List<PaymentMethodModel> getMyPaymentMethods(@PathVariable String userId)
	{
		return this.service.findMyPayMethods(Long.parseLong(userId));
	}
	
	@PostMapping(path="/resident/makepayment")
	public String newpayment(@RequestBody ProcessPaymentModel model)
	{
		boolean ret = this.service.makePaymentbyUser(model);
		
		if(ret==true)
		{
			return ("Payment has been done Successfully, just wait for Sometime to be Verified by the Admin Panel");
		}
		
		else if(ret==false)
		{
			return ("Payment not done. Please Check the Credentials you have entered");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@PutMapping(path="/admin/confirmandverifypayment/{pId}")
	public String VerifypaymentByAdmin(@PathVariable String pId)
	{
		boolean ret = this.service.VerifyPaymentbyAdmin(Long.parseLong(pId));
		
		if(ret==true)
		{
			return ("Payment has been Verified Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@GetMapping(path="/admin/viewallpaymenthistory")
	public List<List<String>> getAllpayments()
	{
		return this.service.viewAllPaymentHistory();
	}
	
	@DeleteMapping(path="/resident/removepaymentmethod/{payId}")
	public String removeMyPaymentMethod(@PathVariable String payId)
	{
		boolean ret = this.service.removePaymentMethod(Long.parseLong(payId));
		
		if(ret==true)
		{
			return ("Payment Method has been Removed Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@GetMapping(path="/resident/viewpayhistory/{userId}")
	public List<PaymentDetailsModel> findMyPayHistory(@PathVariable String userId)
	{
		return this.service.getMyPaymentHistory(Long.parseLong(userId));
	}
	
	@GetMapping(path="/resident/ifpaymentisdone/{rId}/{iId}")
	public boolean checkIfPaymentisDone(@PathVariable String rId, @PathVariable String iId)
	{
		return this.service.ifPaymentDoneforInvoice(Long.parseLong(rId), Long.parseLong(iId));
	}
	
	@GetMapping(path="/admin/ifpaymentdone/{pId}")
	public String ifPaymentAldreadyVerified(@PathVariable String pId)
	{
		return this.service.checkIfPayVerified(Long.parseLong(pId));
	}
	
	@PostMapping(path="/resident/ismethodvalid/{uId}")
	public boolean IsPaymentMethodValid(@PathVariable String uId, @RequestBody PaymentMethodModel model)
	{
		return this.service.ifPaymentMethodMatched(Long.parseLong(uId), model);
	}
	
}
