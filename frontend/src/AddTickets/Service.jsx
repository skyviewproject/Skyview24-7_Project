import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";
class Service extends Component 
{ 
    registerNewTicket(Ticket)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uid=userSession.getUserId();
            console.log(Ticket)
        var config = {
            headers: {
                authorization: "bearer " + token
                
            }
        }
        return restApi.post(main_url + "/resident/addTicket/" + uid, Ticket, config);
    }
}

export default Service
 