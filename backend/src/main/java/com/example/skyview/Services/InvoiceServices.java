package com.example.skyview.Services;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.skyview.Model.InvoiceModel;
import com.example.skyview.Model.UserModel;
import com.example.skyview.Repo.InvoiceRepo;
import com.example.skyview.Repo.UserRepo;

@Service
public class InvoiceServices 
{
	@Autowired
	InvoiceRepo repo1;
	
	@Autowired
	UserRepo repo2;
	
	public boolean addInvoice(InvoiceModel invoice)
	{
		repo1.save(invoice);
		return true;
	}
	
	public List<List<String>> viewAllInvoices()
	{
		List<InvoiceModel> model = repo1.findAll();
		List<List<String>> list = new ArrayList<List<String>>();
		
		int i=0, n=model.size();
		
		for(i=0;i<n;i++)
		{
			UserModel user = repo2.findById(model.get(i).getOwnerUserid()).get();
			List<String> al = new ArrayList<String>();
			al.add(String.valueOf(model.get(i).getId()));
			al.add(user.getFullName());
			al.add(user.getUserFlatNo());
			al.add(user.getBlockNo());
			al.add(model.get(i).getDueDate());
			al.add(model.get(i).getInvoiceReason());
			al.add(String.valueOf(model.get(i).getTotalAmount()));
			list.add(al);
		}
		return list;
		
	}
	
	public List<InvoiceModel> findMyInvoices(long ownerId)
	{
		return repo1.findInvoicesByResidentId(ownerId);
	}
	
	public InvoiceModel viewInvoiceDetails(long id)
	{
		return repo1.findById(id).get();
	}
	
	public boolean updateInvoice(long id, InvoiceModel prev)
	{
		InvoiceModel updated = repo1.findById(id).get();
		updated.setOwnerUserid(prev.getOwnerUserid());
		updated.setDueDate(prev.getDueDate());
		updated.setTotalAmount(prev.getTotalAmount());
		updated.setInvoiceReason(prev.getInvoiceReason());
		repo1.save(updated);
		
		return true;
	}
	
	public boolean removeInvoice(long id)
	{
		repo1.deleteById(id);
		return true;
	}
}
