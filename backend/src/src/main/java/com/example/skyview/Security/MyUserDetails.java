package com.example.skyview.Security;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.skyview.Model.UserModel;

public class  MyUserDetails implements UserDetails
{
	private String emailID;
	private String password;
	private boolean isNonExp;
	private boolean isVefd;
	private List<GrantedAuthority> authorities;
	
	public MyUserDetails(UserModel user) 
    {
       this.emailID = user.getEmailId();
       this.password = user.getUserPassword();
       this.isNonExp = user.isActive();
       this.isVefd = user.isVerified();
       this.authorities = Arrays.stream(user.getUserRole().split(","))
                   .map(SimpleGrantedAuthority::new)
                   .collect(Collectors.toList());
    }
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() 
	{
		return authorities;
	}
	
	@Override
	public String getPassword() 
	{
		return password;
	}
	
	@Override
	public String getUsername() 
	{
		 return emailID;
	}
	
	@Override
	public boolean isAccountNonExpired() {
		return isNonExp;
	}
	
	@Override
	public boolean isAccountNonLocked() 
	{
		return true;
	}
	
	@Override
	public boolean isCredentialsNonExpired() 
	{
		return true;
	}
	
	@Override
	public boolean isEnabled() 
	{
		return isVefd;
	}
	
}