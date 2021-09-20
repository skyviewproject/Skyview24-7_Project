package com.example.skyview.Services;
import java.util.List;
import java.util.regex.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.skyview.Model.UserModel;
import com.example.skyview.Repo.UserRepo;

@Service
public class UserServices 
{
	@Autowired
	UserRepo repo;
	
	public boolean addUser(UserModel user)
	{
		user.setUserPassword(new BCryptPasswordEncoder().encode(user.getUserPassword()));
		repo.save(user);
		return true;
	}
	
	public List<UserModel> findAllUser()
	{
		return repo.findAll();
	}

	public UserModel findUserbyId(long id) 
	{
		return repo.findById(id).get();
	}
	
	public boolean updateProfilebyUser(long id, UserModel prev)
	{
		UserModel updated = repo.findById(id).get();
		
		updated.setFullName(prev.getFullName());
		updated.setEmailId(prev.getEmailId());
		updated.setUserGender(prev.getUserGender());
		updated.setMobileNo(prev.getMobileNo());
		updated.setUserAge(prev.getUserAge());
		updated.setUserOccupation(prev.getUserOccupation());
		updated.setUserPassword(new BCryptPasswordEncoder().encode(prev.getUserPassword()));
		
		repo.save(updated);
		return true;
	}
	
	public boolean updateProfilebyAdmin(long id, UserModel prev)
	{

		UserModel updated = repo.findById(id).get();	
		updated.setFullName(prev.getFullName());
		updated.setEmailId(prev.getEmailId());
		updated.setUserGender(prev.getUserGender());
		updated.setMobileNo(prev.getMobileNo());
		updated.setUserAge(prev.getUserAge());
		updated.setUserOccupation(prev.getUserOccupation());
		
		Pattern BCRYPT_PATTERN = Pattern.compile("\\A\\$2a?\\$\\d\\d\\$[./0-9A-Za-z]{53}");
		String stringToCheck = prev.getUserPassword();
		
		if (BCRYPT_PATTERN.matcher(stringToCheck).matches()==true) {
			updated.setUserPassword(prev.getUserPassword());
		}
		else
		{
			updated.setUserPassword(new BCryptPasswordEncoder().encode(prev.getUserPassword()));
		}
		
		updated.setUserFlatNo(prev.getUserFlatNo());
		updated.setBlockNo(prev.getBlockNo());
		updated.setUserRole(prev.getUserRole());
		updated.setVerified(prev.isActive());
		updated.setActive(prev.isVerified());
		repo.save(updated);
		return true;
	}
	
	public boolean deleteUser(long id)
	{
		repo.deleteById(id);
		return true;
	}
	
}
