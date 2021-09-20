import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";
class Service extends Component 
{ 
    registerNewCAR(car)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uid=userSession.getUserId();
            console.log(car)
        var config = {
            headers: {
                authorization: "bearer " + token
                
            }
        }
        return restApi.post(main_url + "/resident/addcar/" + uid, car, config);
    }
}

export default Service
 