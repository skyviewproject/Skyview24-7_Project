package com.example.skyview.Controller;
import com.example.skyview.Services.HelpServices;
import com.example.skyview.Model.UserModel;
import com.example.skyview.Model.HelpModel;
import com.example.skyview.Model.HelpAssociationModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HelpController 
{
	@Autowired
	HelpServices service;
	
	@PostMapping(path="/admin/resgisterhelper")
	public String addNewWorker(@RequestBody HelpModel help)
	{
		boolean ret = this.service.registerNewHelper(help);
		
		if(ret==true)
		{
			return ("New Daily Helping Person Data has been Added Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@GetMapping(path="/admin/getalldailyhelps")
	public List<HelpModel> getAllhelpWorkersByAdmin()
	{
		return this.service.getAllHelpers();
	}
	
	@GetMapping(path="/resident/getalldailyhelps")
	public List<HelpModel> getAllhelpWorkersByResident()
	{
		return this.service.getAllHelpers();
	}
	
	@GetMapping(path="/admin/gethelpdetails/{id}")
	public HelpModel getHelpworkerDetailsById(@PathVariable String id)
	{
		return this.service.getHelperDetailsById(Long.parseLong(id));
	}
	
	@PutMapping(path="/admin/updatedailyhelp/{id}")
	public String updateProfiledetails(@PathVariable String id, @RequestBody HelpModel help)
	{
		boolean ret = this.service.updateHelper(Long.parseLong(id), help);
		
		if(ret==true)
		{
			return ("Detaills has been Updated Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
		
	}
	
	@DeleteMapping(path="/admin/removedailyhelp/{id}")
	public String removeUser(@PathVariable String id)
	{
		boolean ret = this.service.removeHelper(Long.parseLong(id));
		
		if(ret==true)
		{
			return ("Worker Data has been Deleted Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@PostMapping(path="/resident/assigntowork")
	public String assignNewWorker(@RequestBody HelpAssociationModel model)
	{
		boolean ret = this.service.assignHelper(model);
		
		if(ret==true)
		{
			return ("New Daily Helping Person has been Assigned Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	
	@DeleteMapping(path="/resident/resigndailyhelp/{hid}/{rid}")
	public String resignUser(@PathVariable String hid, @PathVariable String rid)
	{
		boolean ret = this.service.resignTheHelper(Long.parseLong(hid), Long.parseLong(rid));
		
		if(ret==true)
		{
			return ("Worker has been resigned Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@GetMapping(path="/resident/getmyworkers/{rid}")
	public List<List<String>> getMyHelpers(@PathVariable String rid)
	{
		return this.service.findHelperWithinFlat(Long.parseLong(rid));
	}
	
	@GetMapping(path="/resident/ifhelpisworkingforme/{rid}/{hid}")
	public boolean ifHelperforMe(@PathVariable String rid, @PathVariable String hid)
	{
		return this.service.isHelpWorkingforMe(Long.parseLong(rid), Long.parseLong(hid));
	}
	
	@GetMapping(path="/admin/getworkersplaces/{hid}")
	public List<List<String>> getHelperWithinFlat(@PathVariable String hid)
	{
		return this.service.findHelperWorkinginDifferntflats(Long.parseLong(hid));
	}
}
