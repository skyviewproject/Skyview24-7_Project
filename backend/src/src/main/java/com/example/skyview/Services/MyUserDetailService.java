package com.example.skyview.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.example.skyview.Model.UserModel;
import com.example.skyview.Repo.UserRepo;
import com.example.skyview.Security.MyUserDetails;

@Service
public class MyUserDetailService implements UserDetailsService
{
	@Autowired
	UserRepo repo;
	
	@Override
	public UserDetails loadUserByUsername(String emailId) throws UsernameNotFoundException 
	{
	   Optional<UserModel> user = repo.findByEmailId(emailId);

       user.orElseThrow(() -> new UsernameNotFoundException("Sorry User is Not Registered"));
       
       if(user.isPresent()==true)
       {
    	   System.out.println("USER is Present");
       }
       
       else
       {
    	   System.out.println("No USER is Present");
       }

       return (UserDetails) user.map(MyUserDetails::new).get();
	       
	}
	
	public String findMyUserIdandRole(String emailId)
	{
		return repo.findMyUserIdandRole(emailId);
	}
	
	public boolean IsUserPresent(String emailId)
	{
	   List<UserModel> user = repo.ifUserPresentorNot(emailId);
	   System.out.println(user.size());
       if(user.size()==0)
       {
    	   return false;
       }
       
       else
       {
    	  return true;
       }

	}
	
}
