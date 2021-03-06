package com.example.skyview.Controller;
import com.example.skyview.Services.ChatappServices;
import com.example.skyview.Services.MyUserDetailService;
import com.example.skyview.Services.UserServices;
import com.example.skyview.Model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController 
{
	@Autowired
	UserServices service;
	
	@Autowired
	MyUserDetailService myusrsvs;
	
	@PostMapping(path="/signup")
	public String signupUser(@RequestBody UserModel user)
	{
		boolean ret = this.service.addUser(user);
		
		if(ret==true)
		{
			return ("New User Data has been Added Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@GetMapping(path="/admin/getallusers")
	public List<UserModel> getUsers()
	{
		return this.service.findAllUser();
	}
	

	@GetMapping(path="/admin/getuserdetails/{id}")
	public UserModel getUserDetails(@PathVariable String id)
	{
		return this.service.findUserbyId(Long.parseLong(id));
	}
	
	@GetMapping(path="/common/profile/{id}")
	public UserModel getMyprofile(@PathVariable String id)
	{
		return this.service.findUserbyId(Long.parseLong(id));
	}
	
	@PutMapping(path="/common/updateprofile/{id}")
	public String updateProfiledetails(@PathVariable String id, @RequestBody UserModel user)
	{
		boolean ret = this.service.updateProfilebyUser(Long.parseLong(id), user);
		
		if(ret==true)
		{
			return ("Your Profile has been Updated Successfully");
		}
		
		else if(ret==false)
		{
			return ("Not Allowed");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
		
	}
	
	@PutMapping(path="/admin/updateuserdata/{id}")
	public String updateUserData(@PathVariable String id, @RequestBody UserModel user)
	{
		boolean ret = this.service.updateProfilebyAdmin(Long.parseLong(id), user);
		
		if(ret==true)
		{
			return ("User Data has been Updated Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
		
	}
	
	@DeleteMapping(path="/admin/removeuser/{id}")
	public String removeUser(@PathVariable String id)
	{
		boolean ret = this.service.deleteUser(Long.parseLong(id));
		
		if(ret==true)
		{
			return ("User Data has been Deleted Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@GetMapping(path="/common/getmyidandrole/{emailId}")
	public String findUserIdwithUserRole(@PathVariable String emailId)
	{
		return this.myusrsvs.findMyUserIdandRole(emailId);
	}
	
	@GetMapping(path="/ifuserexists/{emailId}")
	public boolean ifUserAlreadyExists(@PathVariable String emailId)
	{
		boolean det = this.myusrsvs.IsUserPresent(emailId);
		return det;
	}
}
