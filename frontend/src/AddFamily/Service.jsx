import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";
class Service extends Component 
{ 
    registerNewFamily(Family)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
      
        var config = {
            headers: {
                authorization: "bearer " + token
                
            }
        }
        return restApi.post(main_url + "/resident/addfamilymember" , Family, config);
    }
}

export default Service
 