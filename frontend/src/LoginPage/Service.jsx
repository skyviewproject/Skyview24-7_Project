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

}

export default Service