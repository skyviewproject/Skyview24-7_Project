package com.example.skyview.Controller;

import com.example.skyview.Services.ChatappServices;
import com.example.skyview.Model.ChatappModel;
import com.example.skyview.Model.UserModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ChatappController 
{
   @Autowired
   ChatappServices service;
   
   @PostMapping(path = "/common/newchat/{id}")
   public void newChat(@PathVariable String id, @RequestBody ChatappModel ct)
   {
       this.service.addNewChat(Long.parseLong(id), ct);
   }

    @PostMapping(path = "/common/newchat/{uid}/{crfid}")
    public void replyChat(@PathVariable String uid, @PathVariable String crfid, @RequestBody ChatappModel ct)
    {
        this.service.addReplyChat(Long.parseLong(uid), Long.parseLong(crfid), ct);
    }

    @GetMapping(path = "/common/showallchat")
    public List<ChatappModel> showChat()
    {
        return this.service.showChat();
    }

    @GetMapping(path = "/common/getrefchat/{uid}")
    public String getRefChat(@PathVariable String uid)
    {
        return this.service.refChat(Long.parseLong(uid));
    }
    
    @GetMapping(path = "/common/getusersandroles")
    public List<List<String>> getUsersandRoles()
    {
    	return this.service.getAllUsersandRoles();
    }
}
