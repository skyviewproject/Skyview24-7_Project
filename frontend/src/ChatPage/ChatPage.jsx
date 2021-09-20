import React, { Component } from 'react'
import backEnd from "./Service";
import SesssionService from '../SessionManagement/SesssionService';
import "../ChatPage/Style.css";
class ChatPage extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             chatData: '',
             userId: new SesssionService().getUserId(),
             chatList: [],
             chatType: 'New',
             refId: '',
             refChat: '',
             membersList: []

        }

        this.takeChatData = this.takeChatData.bind(this);
        this.sendChatToDB = this.sendChatToDB.bind(this);
        this.cancleReply = this.cancleReply.bind(this);
        this.makeReply = this.makeReply.bind(this);
        this.getChatFromDB = this.getChatFromDB.bind(this);

    }

    componentDidMount()
    {
        const api = new backEnd();
        api.getAllMembers().then((res) =>
        {
            this.setState({membersList: res.data});
        });

        setInterval(this.getChatFromDB, 1000);

    }

    getChatFromDB()
    {
        const api = new backEnd();
        api.showChat().then((res) => 
        {
            this.setState({chatList: res.data});
        });
    }

    takeChatData(event){this.setState({chatData: event.target.value});}

    makeReply(cid)
    {
        const api = new backEnd();
        console.log(cid);
        api.getRefChat(cid).then((res) => {
            this.setState(
                {
                    chatType: 'Reply',
                    refId: cid,
                    refChat: res.data,
                }
            );

            console.log(res);
        });

        var a = document.querySelector(".wrapperchat .sendchat form .refcht ");
        var b = document.querySelector(".wrapperchat .sendchat form  .mncht #mnip");
        a.style.display = "block";
        a.style.opacity = "1";
        a.style.pointerEvents = "all";
        b.style.borderTopLeftRadius = "0";
        b.style.borderTopRightRadius = "0";
    }

    cancleReply()
    {
        this.setState(
            {
                chatType: 'New',
                refId: '',
                refChat: '',
            }
        );

        var a = document.querySelector(".wrapperchat .sendchat form .refcht ");
        var b = document.querySelector(".wrapperchat .sendchat form  .mncht #mnip");
        a.style.display = "none";
        a.style.opacity = "0";
        a.style.pointerEvents = "none";
        b.style.borderTopLeftRadius = "50px";
        b.style.borderTopRightRadius = "50px";
    }

    sendChatToDB(event)
    {
        event.preventDefault();
        const api = new backEnd();

        let chat = 
        {
            chatData: this.state.chatData,
            usrChat: this.state.userId,
            refChat: this.state.refChat
        }

        if(this.state.chatType === 'New')
        {
            api.sendChat(this.state.userId, chat);
        }

        else
        {
            api.replyChat(this.state.userId, this.state.refId, chat);
        }

        this.setState(
            {
                chatData: '',
                chatType: 'New',
                refId: '',
                refChat: '',
            }
        );

        var a = document.querySelector(".wrapperchat .sendchat form .refcht ");
        var b = document.querySelector(".wrapperchat .sendchat form  .mncht #mnip");
        a.style.display = "none";
        a.style.opacity = "0";
        a.style.pointerEvents = "none";
        b.style.borderTopLeftRadius = "50px";
        b.style.borderTopRightRadius = "50px";
    }
    render() 
    {
        
        return (
            <div class="wrapperchat">
            <div class="showchat">
                <div class="members">
                    <h3><i class="fa fa-users" aria-hidden="true"></i> Members</h3>
                    <div class="holdmem">
                        {
                            
                            this.state.membersList.map(
                                user => 
                              
                                    <div  class="usrholder">
                                        <div class="dp">
                                            <h2>{user[0].charAt(0)}</h2>
                                        </div>

                                        <div class="usr">
                                            <h5> {user[0]} </h5>   
                                            <p> {user[1]}</p>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                </div>

                <div class="chtara">
                    {
                        this.state.chatList.map(
                            chat => 
                            
                                <div class="chtbdy" onClick={() => this.makeReply(chat.id)} key={chat.id}>
                                    <h5 id="refct">{chat.refChat}</h5>
                                    <h5>{chat.usrChat } <i class="fa fa-long-arrow-right" aria-hidden="true"></i> {chat.chatData}</h5>
                                    <h6>{chat.chatTime}</h6>
                                    
                                </div>
                        )
                    }
                </div>

            </div>

            <div class="sendchat">
                <form>
                    <div class="refcht">
                        <input type="text" id="refip" name="refip" value={this.state.refChat} disabled/>
                        <i class="fa fa-arrow-left" aria-hidden="true" onClick={this.cancleReply}></i>
                    </div>

                    <div class="mncht">
                        <input type="text" id="mnip" name="mnip" placeholder="Start Chatting with Others" onChange={this.takeChatData} value={this.state.chatData}/>
                        <button onClick={this.sendChatToDB} ><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default ChatPage
