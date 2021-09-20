import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{ 
    getMyAllMembers()
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uid = userSession.getUserId();
    
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/resident/viewmyfamilymembers/" + uid, config)
    }
    removeMyMember(id)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uId = userSession.getUserId();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.delete(main_url + "/resident/removemember/" + id, config);
    }



}
export default Service