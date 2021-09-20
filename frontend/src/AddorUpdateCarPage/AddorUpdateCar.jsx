import React, { Component } from 'react';
import "../AddorUpdateCarPage/Style.css";
import SesssionService from '../SessionManagement/SesssionService';

class AddorUpdateCar extends Component 
{
    render() 
    {
        const user = new SesssionService();

        if(user.getUserSession()==null)
        {
            window.location.href = "/unauthorized"
        }

        else
        {
            if(user.getUserRole() !== "ROLE_RESIDENT")
            {
                window.location.href = "/forbidden"
            }

            else
            {
                return (
                    <div class="wrapperaddorupdatecar">
                        <div class="cardholder">
                            <div class="card">
                                <div class="imghldr">

                                </div>
                                <div class="txthlder">
                                    <p>
                                        Hey User, Now you can register upto 4 Vehicles, Maintain and Delete 
                                        easily without any hectic from this site.
                                    </p>
                                </div>
                                <div class="btnhldr">
                                    <a href="/addnewcar"><button id="rest">Register New Car <i class="fa fa-plus" aria-hidden="true"></i></button></a>
                                    <a href="/mycarlist"><button id="vwupt">View/Update Car <i class="fa fa-eye" aria-hidden="true"></i></button></a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default AddorUpdateCar
