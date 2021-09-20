import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{ 
    getMyAllTickets()
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uId = userSession.getUserId();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/resident/viewmytickets/" + uId,config)
    }
}
export default Service