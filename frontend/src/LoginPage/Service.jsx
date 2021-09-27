import React, { Component } from 'react'
import restApi from 'axios';
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{
    loginService(uname, psw)
    {
        var form_data = {
            "username": uname,
            "password": psw
        }
       return restApi.post(main_url + '/authandlogin', form_data);
        
    }


    getUserdataAfterLogin(emailId)
    {
       var userSession = new SesssionService();
        var token = userSession.getUserSession();

        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/common/getmyidandrole/" + emailId, config);

    }

    checkIfuserisPresent(emailid)
    {
        return restApi.get(main_url + "/ifuserexists/"+ emailid);
    }

    sendOTP(emailId)
    {
        return restApi.post(main_url + "/sendotp/" + emailId, null);
    }

    verifyOTP(emailId, otpmodel)
    {
        return restApi.post(main_url + "/matchotp/" + emailId, otpmodel);
    }

    resetPassword(emailId, password)
    {
        var user = {
            "username": emailId,
	        "password": password
	
        }


        return restApi.put(main_url + "/restpassword" , user);
    }

}

export default Service