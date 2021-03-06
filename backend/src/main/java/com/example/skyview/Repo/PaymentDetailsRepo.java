package com.example.skyview.Repo;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.skyview.Model.PaymentDetailsModel;

@Repository
public interface PaymentDetailsRepo extends JpaRepository<PaymentDetailsModel, Long>
{
	@Query(value="SELECT * FROM `payhistory_info` WHERE `payment_userid`= :residentId", nativeQuery=true)
	List<PaymentDetailsModel> findPaymentHistoryByResidentId(long residentId);
	
	@Query(value="SELECT * FROM `payhistory_info` WHERE `payment_userid`= :residentId AND `payment_refid`= :invoiceId", nativeQuery=true)
	List<PaymentDetailsModel> findIfPaidForInvoice(long residentId, long invoiceId);
	
	@Query(value="SELECT `payment_status` FROM `payhistory_info` WHERE `payment_id`= :payId", nativeQuery=true)
	String checkIfVerified(long payId);
	
	@Modifying
	@Transactional
	@Query(value="DELETE FROM `payhistory_info` WHERE `payment_userid`= :residentId", nativeQuery=true)
	void removePaymentDetailsOfDeletedUser(long residentId);
}
