import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{ 
    getAllUsers()
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/admin/getallusers" , config);
    }

    removeUser(uId)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.delete(main_url + "/admin/removeuser/" + uId , config);
    }
}

export default Service