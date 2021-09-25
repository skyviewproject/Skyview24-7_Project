package com.example.skyview.Repo;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.skyview.Model.HelpAssociationModel;

@Repository
public interface HelpAssociationRepo extends JpaRepository<HelpAssociationModel, Long>
{
	@Query(value="SELECT * FROM `helpassosication_info` WHERE `resident_id`= :residentId", nativeQuery=true)
	List<HelpAssociationModel> findByHelpersByResidentId(long residentId);
	
	@Query(value="SELECT * FROM `helpassosication_info` WHERE `helper_id`= :helperId", nativeQuery=true)
	List<HelpAssociationModel> findByHelpersbyHelpersId(long helperId);
	
	@Query(value="SELECT * FROM `helpassosication_info` WHERE `helper_id`= :helperId AND `resident_id`= :residentId", nativeQuery=true)
	List<HelpAssociationModel> findIfWorkingforMe(long residentId, long helperId);
	
	@Modifying
	@Transactional
	@Query(value="DELETE FROM `helpassosication_info` WHERE `helper_id`= :helperId AND `resident_id`= :residentId", nativeQuery=true)
	void resignHelper(long residentId, long helperId);
	
	@Modifying
	@Transactional
	@Query(value="DELETE FROM `helpassosication_info` WHERE`resident_id`= :residentId", nativeQuery=true)
	void removeHelperOfDeletedUser(long residentId);
}
