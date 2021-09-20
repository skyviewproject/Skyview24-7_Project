import React from 'react';
import restApi from 'axios';
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends React.Component
{
    
    sendChat(uId, chatData)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        restApi.post(main_url + "/common/newchat/" + uId, chatData, config);
    }

    replyChat(uId, cid, chatData)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        restApi.post(main_url + "/common/newchat/" + uId + "/" + cid, chatData, config);
    }

    showChat()
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uId = userSession.getUserId();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        var chat = restApi.get(main_url + "/common/showallchat", config);
        return chat;
    }

    getRefChat(cid)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uId = userSession.getUserId();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/common/getrefchat/" + cid, config);
    }

    getAllMembers()
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uId = userSession.getUserId();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/common/getusersandroles", config);
    }
}

export default Service

