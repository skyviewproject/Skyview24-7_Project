package com.example.skyview.Services;
import java.util.List;
import java.util.regex.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.skyview.Model.UserModel;
import com.example.skyview.Repo.*;

@Service
public class UserServices 
{
	@Autowired
	UserRepo repo1;
	
	@Autowired
	CarDetailsRepo repo2;
	
	@Autowired
	FamilyMembersRepo repo3;
	
	@Autowired
	HelpAssociationRepo repo4;
	
	@Autowired
	PaymentDetailsRepo repo5;
	
	@Autowired
	PaymentMethodRepo repo6;
	
	@Autowired
	InvoiceRepo repo7;
	
	@Autowired
	MyUserDetailService Service;
	
	public boolean addUser(UserModel user)
	{
		user.setUserPassword(new BCryptPasswordEncoder().encode(user.getUserPassword()));
		repo1.save(user);
		return true;
	}
	
	public List<UserModel> findAllUser()
	{
		return repo1.findAll();
	}

	public UserModel findUserbyId(long id) 
	{
		return repo1.findById(id).get();
	}
	
	public boolean updateProfilebyUser(long id, UserModel prev)
	{
		if(!this.Service.ifUserLoggedIn(id))
		{
			return false;
		}
		
		else
		{
			UserModel updated = repo1.findById(id).get();
			
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
			
			
			repo1.save(updated);
			return true;
		}
	}
	
	public boolean updateProfilebyAdmin(long id, UserModel prev)
	{

		UserModel updated = repo1.findById(id).get();	
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
		repo1.save(updated);
		return true;
	}
	
	public boolean deleteUser(long id)
	{
		repo7.removeInvoicesOfDeletedUser(id);
		repo6.removePaymentsOfDeletedUser(id);
		repo5.removePaymentDetailsOfDeletedUser(id);
		repo4.removeHelperOfDeletedUser(id);
		repo3.removeFamilyOfDeletedUser(id);
		repo2.removeCarsOfDeletedUser(id);
		repo1.deleteById(id);
		return true;
	}
	
	public boolean UpdatePassword(String emailId, String password)
	{
		password = new BCryptPasswordEncoder().encode(password);
		repo1.updatePassword(emailId, password);
		return true;
	}
}
