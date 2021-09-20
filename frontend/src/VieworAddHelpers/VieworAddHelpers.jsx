import React, { Component } from 'react'
import "../VieworAddHelpers/Style.css";
import SesssionService from '../SessionManagement/SesssionService';

class VieworAddHelpers extends Component {
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
                    <div class="wrappervieworaddhelpers">
                        <div class="cardholder">
                            <div class="card">
                                <div class="imghldr">

                                </div>
                                <div class="txthlder">
                                    <p>
                                        Hey User, Now you can find the Daily helping hands like Drivers, Maids, Plumbers
                                        etc and can assign or resign them to Your Flat.
                                    </p>
                                </div>
                                <div class="btnhldr">
                                    <a href="/addnewhelp"><button id="rest">All Helps <i class="fa fa-plus" aria-hidden="true"></i></button></a>
                                    <a href="/myhelperslist"><button id="vwupt">My Helps <i class="fa fa-eye" aria-hidden="true"></i></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            }

        }
    }
}

export default VieworAddHelpers
