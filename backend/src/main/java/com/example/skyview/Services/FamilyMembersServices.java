package com.example.skyview.Services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.skyview.Model.FamilyMembersModel;
import com.example.skyview.Repo.FamilyMembersRepo;

@Service
public class FamilyMembersServices 
{
	@Autowired
	FamilyMembersRepo repo;
	
	public boolean addFamilyMember(FamilyMembersModel user)
	{
		repo.save(user);
		return true;
	}
	
	public List<FamilyMembersModel> findAllFamilyMembers()
	{
		return repo.findAll();
	}
	
	public List<FamilyMembersModel> findMyFamilyMembers(long ownerId)
	{
		return repo.findByOwnersId(ownerId);
	}

	public FamilyMembersModel findFamilyMemberbyId(long id) 
	{
		return repo.findById(id).get();
	}
	
	public boolean updateFamilyMember(long id, FamilyMembersModel prev)
	{
		FamilyMembersModel updated = repo.findById(id).get();
		
		updated.setEmailId(prev.getEmailId());
		updated.setMobileNo(prev.getMobileNo());
		updated.setRelation(prev.getRelation());
		updated.setMemberName(prev.getMemberName());
		updated.setMemberAge(prev.getMemberAge());
		
		repo.save(updated);
		return true;
	}
	
	
	public boolean deleteFamilyMember(long id)
	{
		repo.deleteById(id);
		return true;
	}
}
