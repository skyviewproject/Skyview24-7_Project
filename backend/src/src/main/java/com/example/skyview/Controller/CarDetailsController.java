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
import com.example.skyview.Model.CarDetailsModel;
import com.example.skyview.Services.CarDetailsServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CarDetailsController 
{

	@Autowired
	CarDetailsServices service;
	
	@PostMapping(path="/resident/addcar/{uid}")
	public String addCar(@PathVariable String uid, @RequestBody CarDetailsModel car ) 
	{
 	   boolean ret = this.service.addcar(Long.parseLong(uid), car);
 	   if(ret==true)
 	   {
 		   return("new car has been added succesfully");
 	   }
 	   
 	   else if(ret==false)
 	   {
 		  return("Max 3 vehicles are Allowed and you have already resistered 3 vehicle details");
 	   }
 	   
 	   else
	  {
		   return ("Opps Something Wrong happened");
	  }
    }
	
	@PutMapping(path="/resident/updatecar/{carId}")
	public String updatecardetails(@PathVariable String carId, @RequestBody CarDetailsModel car)
	{
		boolean ret = this.service.updateCar(Long.parseLong(carId), car);
		
		if(ret==true)
		{
			return ("Your Car Details has been Updated Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
		
	}
	
	@GetMapping(path="/admin/getallcars")
	public List<CarDetailsModel> getAllCars()
	{
		return this.service.findAllCar();
	}
	
	@GetMapping(path="/resident/getallcars/{ownerId}")
	public List<CarDetailsModel> getMyCars(@PathVariable String ownerId)
	{
		return this.service.findMyCars(Long.parseLong(ownerId));
	}
	
	@GetMapping(path="/resident/getcardetails/{carId}")
	public CarDetailsModel getCarDetails(@PathVariable String carId)
	{
		return this.service.findCarbyId(Long.parseLong(carId));
	}
	
	@DeleteMapping(path="/resident/removecar/{carId}")
	public String removeCar(@PathVariable String carId)
	{
		boolean ret = this.service.removeCar(Long.parseLong(carId));
		
		if(ret==true)
		{
			return ("Car has been Removed Successfully");
		}
		
		else
		{
			return ("Opps Something Wrong happened");
		}
	}
}