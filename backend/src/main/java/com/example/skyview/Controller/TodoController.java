package com.example.skyview.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.skyview.Model.TodoModel;
import com.example.skyview.Services.TodoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TodoController 
{
	@Autowired
	TodoService service;
	
	
	@PostMapping(path="/supervisor/addtodo")
	public String addTodo(@RequestBody TodoModel todo) 
	{
 	   boolean ret = this.service.addTodo(todo);
 	   if(ret==true)
 	   {
 		   return("new Todo has been added succesfully");
 	   }
 	   
 	   else
	  {
		   return ("Opps Something Wrong happened");
	  }
    }
	
	@PutMapping(path="/supervisor/updatetodo/{todoId}")
	public String updateTodo(@PathVariable String todoId, @RequestBody TodoModel todo)
	{
		boolean ret = this.service.updateTodo(Long.parseLong(todoId), todo);
		
		if(ret==true)
		{
			return ("Your todo has been Updated Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
		
	}
	
	@GetMapping(path="/supervisor/getalltodo")
	public List<TodoModel> getAllTodos()
	{
		return this.service.getTodoList();
	}
	
	@GetMapping(path="/supervisor/gettodobyid/{todoId}")
	public TodoModel getTodoById(@PathVariable String todoId)
	{
		return this.service.getTodoById(Long.parseLong(todoId));
	}
	
	@PutMapping(path="/supervisor/donetodo/{todoId}")
	public String getCarDetails(@PathVariable String todoId)
	{
		boolean ret =  this.service.doneTodobyId(Long.parseLong(todoId));
		
		if(ret==true)
		{
			return ("Your todo has been Done Successfully");
		}
		
		else if(ret == false)
		{
			return ("Your todo is already Done");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
	
	@DeleteMapping(path="/supervisor/clearalltodo")
	public String removAllTodos()
	{
		boolean ret = this.service.removeAllTodo();
		
		if(ret==true)
		{
			return ("All todos have been Removed Successfully");
		}
		
		else if(ret==false)
		{
			return ("Todolist is already Empty");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
}
