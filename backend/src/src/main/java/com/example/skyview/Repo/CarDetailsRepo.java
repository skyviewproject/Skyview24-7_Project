package com.example.skyview.Repo;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.skyview.Model.CarDetailsModel;

@Repository
public interface CarDetailsRepo extends JpaRepository<CarDetailsModel,Long>
{
	@Query(value="SELECT * FROM `cardetails_info` WHERE `user_id`= :ownerId", nativeQuery=true)
	List<CarDetailsModel> findMyCarsById(long ownerId);
}
