import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{ 
    getMyAllCars()
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uId = userSession.getUserId();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/resident/getallcars/" + uId, config)
    }
    removeMyCar(carId)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        var uId = userSession.getUserId();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.delete(main_url + "/resident/removecar/" + carId, config);
    }



}
export default Service