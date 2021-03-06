package com.example.skyview.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
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
       
       return (UserDetails) user.map(MyUserDetails::new).get();
	       
	}
	
	public String findMyUserIdandRole(String emailId)
	{
		return repo.findMyUserIdandRole(emailId);
	}
	
	 public boolean ifUserLoggedIn(long requested)
     {
        boolean ret = false;
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String s = repo.findMyUserIdandRole(String.valueOf(auth.getPrincipal()));
        String a[] = s.split(",");
        long active = Long.parseLong(a[0]);
        //System.out.println(requested + " " + active);
        
        if(requested == active)
        {
            ret = true;
        }

        return ret;
     }
	
	public boolean IsUserPresent(String emailId)
	{
	   List<UserModel> user = repo.ifUserPresentorNot(emailId);
	   
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
