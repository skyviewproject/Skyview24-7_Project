import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{ 
    getUserDetailsbyId(uId)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();

        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/admin/getuserdetails/" + uId, config);
    }

    updateUserDetails(userId, userData)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();

        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.put(main_url + "/admin/updateuserdata/" + userId, userData, config);

    }
}

export default Service
