package com.example.skyview.Services;
import java.net.http.HttpResponse;
import java.util.Arrays;
import java.util.Base64;
import java.util.Collections;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
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
        
        formData.add("grant_type","password");
        formData.add("username",uname);
        formData.add("password", psw);
        
		HttpHeaders header = new HttpHeaders();
		header.setAccept(Collections.singletonList(MediaType.APPLICATION_FORM_URLENCODED));
		header.set("Accept", MediaType.APPLICATION_JSON_VALUE);
		header.set("Authorization", authHeader);
		
		HttpEntity<MultiValueMap<String, String>> data = new HttpEntity<>(formData, header);
		JSONObject ret = new JSONObject();
		
		try
		{
			ResponseEntity<String> response = rest.exchange(url, HttpMethod.POST, data, String.class);
			JSONObject temp = new JSONObject(response.getBody());
			
			ret.put("isAuthenticated", true);
			ret.put("bearerToken", temp.get("access_token"));
			ret.put("errorMessage", "NULL");
		}
		
		catch(Exception e)
		{
			String s = e.getMessage().substring(6, e.getMessage().length());
			JSONArray temp = new JSONArray(s);
			
			ret.put("isAuthenticated", false);
			ret.put("bearerToken", "NULL");
			ret.put("errorMessage",temp.get(0));
		}
		
		
		return ret.toString();
	}

}
