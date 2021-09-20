import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{ 
    getMyAllPaymentMethod()
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uId = userSession.getUserId();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/resident/getmypaymentmethod/" + uId, config)
    }

    removeMyPaymentMethod(payId)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uId = userSession.getUserId();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.delete(main_url + "/resident/removepaymentmethod/" + payId, config);
    }
}

export default Service