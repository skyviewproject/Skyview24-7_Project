package com.example.skyview.Controller;
import java.util.List;
import com.example.skyview.Model.OauthModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.common.exceptions.InvalidGrantException;
import org.springframework.web.HttpMediaTypeNotAcceptableException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.skyview.Model.UserModel;
import com.example.skyview.Services.OauthLoginService;


@RestController
public class LoginController 
{
	@Autowired
	OauthLoginService service;
	
	@PostMapping(path="/authandlogin")
	public String getUsers(@RequestBody OauthModel model)
	{
		String uname = model.getUsername();
		String psw = model.getPassword();
		return this.service.Oauth2LoginService(uname, psw);
	}
}
