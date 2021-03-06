import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{ 
    registerUser(user)
    {
        return restApi.post(main_url + "/signup", user);
    }

    checkIfuserisPresent(emailid)
    {
        return restApi.get(main_url + "/ifuserexists/"+ emailid);
    }

}


export default Service
