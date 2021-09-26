package com.example.skyview.Services;
import java.util.Arrays;
import java.util.Base64;
import java.util.Collections;
import java.util.List;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
public class OauthLoginService 
{
	public String Oauth2LoginService(String uname, String psw)
	{
		RestTemplate rest = new RestTemplate();
		String url = "http://localhost:8085/oauth/token";
        String authHeader = "Basic " + "U2t5VmlldzI0KjdfQ2xpZW50SWQ6c2syeSp2aTRldzdfc2VjcmV0";
        
        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
        
        //System.out.println(uname + " " + psw);
        
        formData.add("grant_type","password");
        formData.add("username",uname);
        formData.add("password", psw);
        
		HttpHeaders header = new HttpHeaders();
		header.setAccept(Collections.singletonList(MediaType.APPLICATION_FORM_URLENCODED));
		header.set("Authorization", authHeader);
		
		HttpEntity<MultiValueMap<String, String>> data = new HttpEntity<>(formData, header);	
		ResponseEntity<String> response = rest.exchange(url, HttpMethod.POST, data, String.class);
		System.out.println(response.getHeaders());
		
		/*System.out.println(response.getBody());
		System.out.println(response.getStatusCodeValue());*/
		
		return response.getBody();
	}

}