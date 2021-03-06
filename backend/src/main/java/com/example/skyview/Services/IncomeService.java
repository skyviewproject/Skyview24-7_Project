package com.example.skyview.Services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.skyview.Model.IncomeModel;
import com.example.skyview.Repo.IncomeRepo;

@Service
public class IncomeService 
{
	@Autowired
	IncomeRepo repo;
	
	public boolean updateIncomeForMonth(IncomeModel prev)
	{
		String m = prev.getIncomeMonth();
		int a = prev.getIncomeAmount();
		repo.setIncomeOfTheMonth(a, m);
		return true;
	}
	
	public List<IncomeModel> getAllIncomes()
	{
		return repo.findAll();
	}
	
	public int incomeTillMonth(String month)
	{
		int income = 0;
		List<IncomeModel> model = repo.findAll();
		int i=0,n=model.size(),temp=0;
		
		for(i=0;i<n;i++)
		{
			temp+= model.get(i).getIncomeAmount();
			if(model.get(i).getIncomeMonth().equalsIgnoreCase(month) == true)
			{
				break;
			}
		}
		income = temp;
		
		return income;
	}
	
	public int netIncomeOftheMonth(String month)
	{
		return repo.getIncomeOfTheMonth(month);
	}
	
	public int incomeIncreasedOrDecreased(String month)
	{
		int income = 0;
		List<IncomeModel> model = repo.findAll();
		int i=0,n=model.size(),temp=0;
		
		for(i=0;i<n;i++)
		{
			if(model.get(i).getIncomeMonth().equalsIgnoreCase(month) == true)
			{
				income = model.get(i).getIncomeAmount();
				break;
			}
			
			else
			{
				temp+= model.get(i).getIncomeAmount();
			}
		}
		
		if(income == 0 || temp==0)
		{
			return 0;
		}
		
		else
		{
			return income - (temp/(i+1));
		}
	}
}
