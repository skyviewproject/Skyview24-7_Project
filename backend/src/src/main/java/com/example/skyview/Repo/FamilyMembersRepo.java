package com.example.skyview.Repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.skyview.Model.FamilyMembersModel;

@Repository
public interface FamilyMembersRepo extends JpaRepository<FamilyMembersModel, Long>
{
	@Query(value="SELECT * FROM `family_info` WHERE `owner_id`= :ownerId", nativeQuery=true)
	List<FamilyMembersModel> findByOwnersId(long ownerId);
}
