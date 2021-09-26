package com.example.skyview.Services;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.skyview.Model.ChatappModel;
import com.example.skyview.Model.UserModel;
import com.example.skyview.Repo.ChatappRepo;
import com.example.skyview.Repo.UserRepo;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;

@Service
public class ChatappServices 
{
	@Autowired
	ChatappRepo repo1;
	
	@Autowired
	UserRepo repo2;
	
	public void addNewChat(long uid, ChatappModel chat)
    {
        String username = repo2.findById(uid).get().getFullName();
        chat.setUsrChat(username);
        SimpleDateFormat time = new SimpleDateFormat("HH:mm:ss yyyy/MM/dd");
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        chat.setChatTime(String.valueOf(time.format(timestamp)));
        repo1.save(chat);
    }

    public void addReplyChat(long uid, long crfid, ChatappModel chat)
    {
        String username = repo2.findById(uid).get().getFullName();
        String ref = repo1.findById(crfid).get().getChatData();
        chat.setUsrChat(username);
        SimpleDateFormat time = new SimpleDateFormat("HH:mm:ss yyyy/MM/dd");
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        chat.setChatTime(String.valueOf(time.format(timestamp)));
        chat.setRefChat(ref);
        repo1.save(chat);
    }

    public String refChat(long id)
    {
        return repo1.findById(id).get().getChatData();
    }

    public List<ChatappModel> showChat()
    {
        return repo1.findAll();
    }
    
    public List<List<String>> getAllUsersandRoles()
    {
    	return repo2.getUserNameandRoleforChat();
    }
}
