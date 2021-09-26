package com.example.skyview.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.skyview.Model.FamilyMembersModel;
import com.example.skyview.Services.FamilyMembersServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FamilyMembersController 
{
	@Autowired
	FamilyMembersServices service;
	
	@PostMapping(path="/resident/addfamilymember")
	public String newFamilyMember(@RequestBody FamilyMembersModel member)
	{
		boolean ret = this.service.addFamilyMember(member);
		
		if(ret==true)
		{
			return ("New Member has been Added Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@PutMapping(path="/resident/updatefamily/{id}")
	public String changeFamilyMember(@PathVariable String id, @RequestBody FamilyMembersModel member)
	{
		boolean ret = this.service.updateFamilyMember(Long.parseLong(id), member);
		
		if(ret==true)
		{
			return ("Family Members details has been Updated Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@GetMapping(path="/admin/viewallfamilymembers")
	public List<FamilyMembersModel> getFamilyMembers()
	{
		return this.service.findAllFamilyMembers();
	}
	
	@GetMapping(path="/resident/viewmyfamilymembers/{ownerId}")
	public List<FamilyMembersModel> getMyFamilyMembers(@PathVariable String ownerId)
	{
		return this.service.findMyFamilyMembers(Long.parseLong(ownerId));
	}
	
	@GetMapping(path="/resident/familymemberdetails/{id}")
	public FamilyMembersModel getFamilyMemberDetails(@PathVariable String id)
	{
		return this.service.findFamilyMemberbyId(Long.parseLong(id));
	}
	
	@DeleteMapping(path="/resident/removemember/{id}")
	public String removeFamilyMember(@PathVariable String id)
	{
		boolean ret = this.service.deleteFamilyMember(Long.parseLong(id));
		
		if(ret==true)
		{
			return ("New Invoice has been Created Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
}
