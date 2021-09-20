package com.example.skyview.Repo;
import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.skyview.Model.OTPModel;

@Repository
public interface OTPRepo extends JpaRepository<OTPModel, Long>
{
	@Query(value="SELECT * FROM `otp_info` WHERE `otp_generatedfor`= :residentId", nativeQuery=true)
	List<OTPModel> findTheOTP(long residentId);
}
