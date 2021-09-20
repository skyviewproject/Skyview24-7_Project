import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{ 
    verifyPaymentMethod(method)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uId = userSession.getUserId();

        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.post(main_url + "/resident/ismethodvalid/" + uId, method, config);
    }

    sendOTP()
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uId = userSession.getUserId();

        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.post(main_url + "/resident/generateotp/" + uId, null, config);
    }

    verifyOTP(otpmodel)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uId = userSession.getUserId();

        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.post(main_url + "/resident/validateotp", otpmodel, config);
    }

    makePaymentforInvoice(payment)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();

        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.post(main_url + "/resident/makepayment", payment, config);
    }
}

export default Service
