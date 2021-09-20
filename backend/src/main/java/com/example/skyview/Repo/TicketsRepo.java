package com.example.skyview.Repo;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.skyview.Model.TicketsModel;

@Repository
public interface TicketsRepo extends JpaRepository<TicketsModel,Long> 
{
	@Query(value="SELECT * FROM `ticket_info` WHERE `ticket_riserflatno` = :flatNo AND `ticket_risername` = :ownerName", nativeQuery=true)
	List<TicketsModel> findMyTicketsId(String flatNo, String ownerName);
	
	@Query(value="SELECT `ticket_status` FROM `ticket_info` WHERE `ticket_id`= :ticketId", nativeQuery=true)
	String findIfTicketSolved(long ticketId);
}