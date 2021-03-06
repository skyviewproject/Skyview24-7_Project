package com.example.skyview.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.skyview.Model.IncomeModel;
import com.example.skyview.Services.IncomeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class IncomeController 
{
	@Autowired
	IncomeService service;

	@PutMapping(path="/supervisor/setincome")
	public String setIncomeForMonth(@RequestBody IncomeModel income)
	{
		boolean ret = this.service.updateIncomeForMonth(income);
		
		if(ret==true)
		{
			return ("Income for this Month has been Added Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@GetMapping(path="/supervisor/getincomes")
	public List<IncomeModel> getAllIncomes()
	{
		return this.service.getAllIncomes();
	}
	
	@GetMapping(path="/supervisor/getincometillmonth/{month}")
	public int getTotalIncomeTillMonth(@PathVariable String month)
	{
		return this.service.incomeTillMonth(month);
	}
	
	@GetMapping(path="/supervisor/getincomeofmonth/{month}")
	public int getNetIncome(@PathVariable String month)
	{
		return this.service.netIncomeOftheMonth(month);
	}

	@GetMapping(path="/supervisor/ifincomeincreasedordecreased/{month}")
	public int getIncomeIncreasedOrDecreased(@PathVariable String month)
	{
		return this.service.incomeIncreasedOrDecreased(month);
	}
}
