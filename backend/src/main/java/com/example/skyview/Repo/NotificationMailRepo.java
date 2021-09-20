package com.example.skyview.Repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.skyview.Model.NotificationMailModel;

@Repository
public interface NotificationMailRepo extends JpaRepository<NotificationMailModel, Long>
{

}
