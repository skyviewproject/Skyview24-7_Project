package com.example.skyview.Repo;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.skyview.Model.TicketsModel;
import com.example.skyview.Model.UserModel;

@Repository
public interface UserRepo extends JpaRepository<UserModel, Long>
{
	Optional<UserModel> findByEmailId(String emailId);
	
	@Query(value="SELECT `user_id`, `user_role` FROM `user_info` WHERE `user_email` = :emailId", nativeQuery=true)
	String findMyUserIdandRole(String emailId);
	
	@Query(value="SELECT `user_name`, `user_role` FROM `user_info` order by `user_name`", nativeQuery=true)
	List<List<String>> getUserNameandRoleforChat();
	
	@Query(value="SELECT * FROM `user_info` WHERE `user_email` = :emailId", nativeQuery=true)
	List<UserModel> ifUserPresentorNot(String emailId);
	
	@Modifying
	@Transactional
	@Query(value="UPDATE `user_info` SET `user_password` = :password WHERE `user_email` = :emailId", nativeQuery=true)
	void updatePassword(String emailId, String password);
}
