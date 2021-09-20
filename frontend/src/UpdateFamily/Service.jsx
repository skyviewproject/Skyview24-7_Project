import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{
    getFamilyDetails(id)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uid = userSession.getUserId();
    

        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/resident/familymemberdetails/" + id, config);
    }

    updateMyFamilyDetails(id, memberdata)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
       

        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.put(main_url + "/resident/updatefamily/" + id, memberdata, config);

    }
}

export default Service