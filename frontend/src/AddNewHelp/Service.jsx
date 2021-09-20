import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{ 
    getMyAllDailyHelpList()
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uId = userSession.getUserId();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/resident/getalldailyhelps", config)
    }


    ifWorkinginFlat(hId)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uId = userSession.getUserId();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/resident/ifhelpisworkingforme/" + uId + "/" + hId, config);

    }

    assginHelptoWork(helpModel)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }
        return restApi.post(main_url + "/resident/assigntowork", helpModel, config);
    }
}

export default Service
