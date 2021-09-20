import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{ 
    getInvoiceDetails(iId)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();

        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }
        return restApi.get(main_url + "/admin/viewinvoicedetails/" + iId, config);
    }

    updateInvoiceDetails(iId, invoice)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();

        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }
        return restApi.put(main_url + "/admin/updateinvoice/" + iId, invoice, config);
    }
}

export default Service
