package com.example.skyview.Repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.skyview.Model.TodoModel;

@Repository
public interface TodoRepo extends JpaRepository<TodoModel, Long>
{
	@Query(value="SELECT COUNT(*) FROM `todo_info`", nativeQuery=true)
	int getTodolistSize();
}
