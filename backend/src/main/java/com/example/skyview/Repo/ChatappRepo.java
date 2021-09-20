package com.example.skyview.Repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.skyview.Model.ChatappModel;

@Repository
public interface ChatappRepo extends JpaRepository<ChatappModel, Long>
{

}
