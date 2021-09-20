package com.example.skyview.Model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.stereotype.Component;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "chat_info")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"},
        allowGetters = true)
@Component
public class ChatappModel 
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="chat_id")
    private long id;

    @Column(name="chat_data")
    private String chatData;

    @Column(name="chat_time")
    private String chatTime;

    @Column(name="chat_ref")
    private String refChat;

    @Column(name="chat_username")
    private String usrChat;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getChatData() {
        return chatData;
    }

    public void setChatData(String chatData) {
        this.chatData = chatData;
    }

    public String getChatTime() {
        return chatTime;
    }

    public void setChatTime(String chatTime) {
        this.chatTime = chatTime;
    }

    public String getRefChat() {
        return refChat;
    }

    public void setRefChat(String refChat) {
        this.refChat = refChat;
    }

    public String getUsrChat() {
        return usrChat;
    }

    public void setUsrChat(String usrChat) {
        this.usrChat = usrChat;
    }
}
