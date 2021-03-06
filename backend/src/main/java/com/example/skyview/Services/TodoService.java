package com.example.skyview.Services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.skyview.Model.TodoModel;
import com.example.skyview.Repo.TodoRepo;

@Service
public class TodoService 
{
	@Autowired
	TodoRepo repo;
	
	public boolean addTodo(TodoModel model)
	{
		repo.save(model);
		return true;
	}
	
	public boolean updateTodo(long tId, TodoModel prev)
	{
		TodoModel updated = repo.findById(tId).get();
		updated.setTodoName(prev.getTodoName());
		repo.save(updated);
		
		return true;
	}
	
	public TodoModel getTodoById(long tId)
	{
		return repo.findById(tId).get();
	}
	
	public List<TodoModel> getTodoList()
	{
		return repo.findAll();
	}
	
	public boolean doneTodobyId(long tId)
	{
		TodoModel updated = repo.findById(tId).get();
		
		if(updated.isTodoStatus() == true)
		{
			return false;
		}
		
		else
		{
			updated.setTodoStatus(true);
			repo.save(updated);
			
			return true;
		}
		
	}
	
	public boolean removeAllTodo()
	{
		if(repo.getTodolistSize() == 0)
		{
			return false;
		}
		
		else
		{
			repo.deleteAll();
			return true;
		}
	}

}
