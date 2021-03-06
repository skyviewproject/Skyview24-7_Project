package com.example.skyview.Repo;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.skyview.Model.InvoiceModel;

@Repository
public interface InvoiceRepo extends JpaRepository<InvoiceModel, Long>
{
	@Query(value="SELECT * FROM `invoice_info` WHERE `invoice_ownerid`= :residentId", nativeQuery=true)
	List<InvoiceModel> findInvoicesByResidentId(long residentId);
	
	@Modifying
	@Transactional
	@Query(value="DELETE FROM `invoice_info` WHERE `invoice_ownerid`= :residentId", nativeQuery=true)
	void removeInvoicesOfDeletedUser(long residentId);
	
}
