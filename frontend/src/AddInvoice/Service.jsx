import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{ 
    registerNewInvoice(invoice)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();

        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }
        return restApi.post(main_url + "/admin/addinvoice", invoice, config);
    }
}

export default Service
