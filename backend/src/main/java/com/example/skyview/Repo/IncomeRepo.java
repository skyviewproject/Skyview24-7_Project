package com.example.skyview.Repo;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.skyview.Model.IncomeModel;

@Repository
public interface IncomeRepo extends JpaRepository<IncomeModel, Long>
{
	@Query(value="SELECT `income_amount` FROM `income_info` WHERE `income_month`= :incomeMonth", nativeQuery=true)
	int getIncomeOfTheMonth(String incomeMonth);
	
	@Modifying
	@Transactional
	@Query(value="UPDATE `income_info` SET `income_amount`= :incomeMoney WHERE `income_month`= :incomeMonth", nativeQuery=true)
	void setIncomeOfTheMonth(int incomeMoney, String incomeMonth);
}
