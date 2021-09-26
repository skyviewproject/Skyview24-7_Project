package com.example.skyview.Repo;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.skyview.Model.HelpModel;

@Repository
public interface HelpRepo extends JpaRepository<HelpModel, Long>
{
	
}
