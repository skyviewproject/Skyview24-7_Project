package com.example.skyview.Services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.skyview.Model.CarDetailsModel;
import com.example.skyview.Repo.CarDetailsRepo;

@Service
public class CarDetailsServices 
{
	@Autowired
	CarDetailsRepo repo;
	
	public boolean addcar(long userId, CarDetailsModel car) 
	{
		if(repo.findMyCarsById(userId).size()<4)
		{
			repo.save(car);
			return true;
		}
		
		else
		{
			return false;
		}
		
		
	}

	public boolean updateCar( long car_id, CarDetailsModel prev) 
	{
		CarDetailsModel updated =repo.findById(car_id).get();
		updated.setCarNo(prev.getCarNo());
		updated.setCarType(prev.getCarType());
		updated.setCarBrand(prev.getCarBrand());
		repo.save(updated);
		return true;
	}
	
	public List<CarDetailsModel> findAllCar()
	{
		return repo.findAll();
	}
	
	public List<CarDetailsModel> findMyCars(long ownerId)
	{
		return repo.findMyCarsById(ownerId);
	}
	
	public CarDetailsModel findCarbyId(long carId) 
	{
		return repo.findById(carId).get();
	}
	
	public boolean removeCar(long carId) 
	{
		repo.deleteById(carId);
		return true;
	}
}