import React, { Component } from 'react'
import restApi from "axios";
import SesssionService from '../SessionManagement/SesssionService';
const main_url = "http://localhost:8085";

class Service extends Component 
{
    addIncomeForMonth(income)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.put(main_url + "/supervisor/setincome",income, config);
    }

    getAllIncomes()
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/supervisor/getincomes", config);
    }

    getIncomeTillMonth(month)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/supervisor/getincometillmonth/" + month, config);
    }

    getIncomeOfMonth(month)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/supervisor/getincomeofmonth/" + month, config);
    }

    ifIncomeIncrOrDecr(month)
    {
        var userSession = new SesssionService();
        var token = userSession.getUserSession();
        
        var config = {
            headers: {
                authorization: "bearer " + token
            }
        }

        return restApi.get(main_url + "/supervisor/ifincomeincreasedordecreased/" + month, config);
    }
}

export default Service