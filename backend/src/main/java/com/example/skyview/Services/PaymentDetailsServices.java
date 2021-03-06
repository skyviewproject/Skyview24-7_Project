package com.example.skyview.Services;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.skyview.Model.PaymentDetailsModel;
import com.example.skyview.Model.PaymentMethodModel;
import com.example.skyview.Model.ProcessPaymentModel;
import com.example.skyview.Model.UserModel;
import com.example.skyview.Repo.PaymentDetailsRepo;
import com.example.skyview.Repo.PaymentMethodRepo;
import com.example.skyview.Repo.UserRepo;

@Service
public class PaymentDetailsServices 
{
	@Autowired
	PaymentDetailsRepo repo1;

	@Autowired
	UserRepo repo2;
	
	@Autowired
	PaymentMethodRepo repo3;
	
	public boolean makePaymentbyUser(ProcessPaymentModel model) 
	{
		boolean flag=false;
		
		long userId = model.getProcessUserId();
		List<PaymentMethodModel> availmethods = repo3.findMyPaymentMethods(userId);
		int i=0,n=availmethods.size();
		
		if(n==0)
		{
			return false;
		}
		
		else
		{
			for(i=0;i<n;i++)
			{
				String a = availmethods.get(i).getMethodName();
				String b = model.getProcessPayMethod();
				String c = availmethods.get(i).getMethodDetails();
				String d = model.getProcessMethodDetails();
				if(a.equals(b)==true && c.equals(d)==true)
				{
					flag=true;
					break;
				}
				
				else
				{
					flag=false;
				}
			}
			
			if(flag==true)
			{
				PaymentDetailsModel history = new PaymentDetailsModel();
				history.setUserId(userId);
				history.setTotalAmount(model.getProcessTotalAmount());
				SimpleDateFormat time = new SimpleDateFormat("HH:mm:ss yyyy/MM/dd");
		        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		        history.setPayDate(time.format(timestamp));
				history.setPayMethod(model.getProcessPayMethod());
				history.setPayRefId(model.getInvoiceId());
				history.setRecipantDetails(model.getProcessRecipantDetails());
				repo1.save(history);
			}
			
			return flag;
		}
		
	}
	
	public boolean ifPaymentDoneforInvoice(long rId, long iId)
	{
		int n = repo1.findIfPaidForInvoice(rId, iId).size();
		
		if(n==0)
		{
			return false;
		}
		
		else
		{
			return true;
		}
	}
	
	public PaymentMethodModel ViewMethodDetails(long payId)
	{
		return repo3.findById(payId).get();
	}
	
	public boolean registerPaymentMethod(PaymentMethodModel method)
	{
		long uid = method.getUserId();
		String mtdnm = method.getMethodName();
		
		List<PaymentMethodModel> list = repo3.findPaymentMethod(uid, mtdnm);
		
		if(list.size() != 0)
		{
			return false;
		}
		
		else
		{
			repo3.save(method);
			return true;
		}
		
	}
	
	public boolean updatePaymentMethod(long payid, PaymentMethodModel prev)
	{
		PaymentMethodModel updated = repo3.findById(payid).get();
		updated.setMethodName(prev.getMethodName());
		updated.setMethodDetails(prev.getMethodDetails());
		repo3.save(updated);
		return true;
	}
	
	public boolean removePaymentMethod(long payid)
	{
		repo3.deleteById(payid);
		return true;
	}
	
	public List<PaymentMethodModel> findMyPayMethods(long uid)
	{
		return repo3.findMyPaymentMethods(uid);
	}
	
	public boolean ifPaymentMethodMatched(long uid, PaymentMethodModel given)
	{
		List<PaymentMethodModel> fetched = repo3.findMyPaymentMethods(uid);
		int i=0,n=fetched.size();
		boolean ret = false;
		
		if(n!=0)
		{
			for(i=0;i<n;i++)
			{
				PaymentMethodModel model = fetched.get(i);
				System.out.println(model.getMethodName() + " " + (given.getMethodName()) + " " + model.getMethodDetails() + " " + (given.getMethodDetails()));
				if(model.getMethodName().equalsIgnoreCase(given.getMethodName()) == true && model.getMethodDetails().equalsIgnoreCase(given.getMethodDetails()) == true)
				{
					ret = true;
					break;
				}
			}
		}
		
		return ret;
	}
	
	public List<List<String>> viewAllPaymentHistory()
	{
		List<PaymentDetailsModel> model = repo1.findAll();
		List<List<String>> list = new ArrayList<List<String>>();
		
		int i=0, n=model.size();
		
		for(i=0;i<n;i++)
		{
			UserModel user = repo2.findById(model.get(i).getUserId()).get();
			List<String> al = new ArrayList<String>();
			al.add(String.valueOf(model.get(i).getId()));
			al.add(user.getFullName());
			al.add(user.getUserFlatNo());
			al.add(String.valueOf(model.get(i).getTotalAmount()));
			al.add(model.get(i).getPayDate());
			al.add(model.get(i).getPaymentStatus());
			al.add(model.get(i).getVerifyDate());
			list.add(al);
		}
		return list;
		
	}
	
	public String checkIfPayVerified(long payId)
	{
		return repo1.checkIfVerified(payId);
	}
	
	public boolean VerifyPaymentbyAdmin(long id)
	{
		PaymentDetailsModel updated = repo1.findById(id).get();
		updated.setPaymentStatus("VERIFIED");
		SimpleDateFormat time = new SimpleDateFormat("HH:mm:ss yyyy/MM/dd");
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        updated.setVerifyDate(time.format(timestamp));
		repo1.save(updated);
		
		return true;
	}
	
	public List<PaymentDetailsModel> getMyPaymentHistory(long userId)
	{
		return repo1.findPaymentHistoryByResidentId(userId);
	}
	
}
