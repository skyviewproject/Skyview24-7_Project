import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{ 
    getAllTickets()
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/supervisor/getalltickets" , config);
    }

    checkIfTicketisSolved(tId)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/supervisior/ifticketverified/" + tId , config);
    }

    resolveTicket(tId)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.put(main_url + "/supervisor/vieworsolveissue/" + tId, null, config);
    }
}

export default Service