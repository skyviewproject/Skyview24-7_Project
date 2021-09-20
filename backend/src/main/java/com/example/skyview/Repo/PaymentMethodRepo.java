package com.example.skyview.Repo;
import com.example.skyview.Model.PaymentMethodModel;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentMethodRepo extends JpaRepository<PaymentMethodModel, Long>
{
	@Query(value="SELECT * FROM `paymethod_info` WHERE `payment_userid`= :userId AND `method_name` = :methodName", nativeQuery=true)
	List<PaymentMethodModel> findPaymentMethod(long userId, String methodName);
	
	@Query(value="SELECT * FROM `paymethod_info` WHERE `payment_userid`= :userId", nativeQuery=true)
	List<PaymentMethodModel> findMyPaymentMethods(long userId);
	
}
