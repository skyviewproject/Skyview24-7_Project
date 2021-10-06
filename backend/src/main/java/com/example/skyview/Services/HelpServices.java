package com.example.skyview.Services;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.skyview.Model.HelpModel;
import com.example.skyview.Model.HelpAssociationModel;
import com.example.skyview.Repo.HelpAssociationRepo;
import com.example.skyview.Repo.HelpRepo;
import com.example.skyview.Repo.UserRepo;

@Service
public class HelpServices 
{
	@Autowired
	HelpRepo repo1;
	
	@Autowired
	HelpAssociationRepo repo2;
	
	@Autowired
	UserRepo repo3;
	
	public boolean registerNewHelper(HelpModel help)
	{
		repo1.save(help);
		return true;
	}
	
	public List<HelpModel> getAllHelpers()
	{
		return repo1.findAll();
	}
	
	public HelpModel getHelperDetailsById(long helperId)
	{
		return repo1.findById(helperId).get();
	}
	
	public boolean updateHelper(long helperId, HelpModel prev)
	{
		HelpModel updated = repo1.findById(helperId).get();
		updated.setHelpName(prev.getHelpName());
		updated.setHelpGender(prev.getHelpGender());
		updated.setHelpContact(prev.getHelpContact());
		updated.setHelpAge(prev.getHelpAge());
		updated.setHelpType(prev.getHelpType());
		repo1.save(updated);
		
		return true;
		
	}
	
	public boolean removeHelper(long helperId)
	{
		repo1.deleteById(helperId);
		return true;
	}
	
	public boolean assignHelper(HelpAssociationModel model)
	{
		repo2.save(model);
		return true;
	}
	
	public boolean resignTheHelper(long helperId, long residentId)
	{
		repo2.resignHelper(residentId, helperId);
		return true;
	}
	
	public List<List<String>> findHelperWorkinginDifferntflats(long helperId)
	{
		List<List<String>> list = new ArrayList<List<String>>();
		if(repo1.findById(helperId).isEmpty() != true)
		{
			int i=0,n=0;
			List<HelpAssociationModel> model = repo2.findByHelpersbyHelpersId(helperId);
			n = model.size();
			
			for(i=0;i<n;i++)
			{
				List<String> al = new ArrayList<String>();
				long residentId = model.get(i).getResidentId();
				al.add(String.valueOf(repo1.findById(helperId).get().getId()));
				al.add(repo3.findById(residentId).get().getFullName());
				al.add(repo3.findById(residentId).get().getUserFlatNo());
				al.add(repo3.findById(residentId).get().getBlockNo());
				al.add(repo1.findById(helperId).get().getHelpName());
				al.add(repo1.findById(helperId).get().getHelpType());
				al.add(repo1.findById(helperId).get().getHelpContact());
				
				list.add(al);
			}
		
		}
		
		
		return list;
	}
	
	public List<List<String>> findHelperWithinFlat(long residentId)
	{
		List<List<String>> list = new ArrayList<List<String>>();
		int i=0,n=0;
		List<HelpAssociationModel> model = repo2.findByHelpersByResidentId(residentId);
		n = model.size();
		
		for(i=0;i<n;i++)
		{
			List<String> al = new ArrayList<String>();
			long helperId = model.get(i).getHelperId();
			al.add(String.valueOf(repo1.findById(helperId).get().getId()));
			al.add(repo3.findById(residentId).get().getFullName());
			al.add(repo3.findById(residentId).get().getUserFlatNo());
			al.add(repo3.findById(residentId).get().getBlockNo());
			al.add(repo1.findById(helperId).get().getHelpName());
			al.add(repo1.findById(helperId).get().getHelpType());
			al.add(repo1.findById(helperId).get().getHelpContact());
			
			list.add(al);
		}
		
		
		return list;
	}
	
	public boolean isHelpWorkingforMe(long rId, long hId)
	{
		List<HelpAssociationModel> model = repo2.findIfWorkingforMe(rId, hId);
		
		if(model.size()==0)
		{
			return false;
		}
		
		else
		{
			return true;
		}
	}
}
