import React, { Component } from 'react'
import "../AddorMaintainHelps/Style.css";
import SesssionService from '../SessionManagement/SesssionService';

class AddorMaintainHelps extends Component {
    
    render() {
        const user = new SesssionService();

        if(user.getUserSession()==null)
        {
            window.location.href = "/unauthorized"
        }

        else
        {
            if(user.getUserRole() !== "ROLE_ADMIN")
            {
                window.location.href = "/forbidden"
            }

            else
            {
                return (
                    <div class="wrapperaddorupdatehelp">
                        <div class="cardholder">
                            <div class="card">
                                <div class="imghldr">

                                </div>
                                <div class="txthlder">
                                    <p>
                                        Hey Admin, add new Helps for the Users, if needed you can update them, delete them
                                        and once added User can assign to Work
                                    </p>
                                </div>
                                <div class="btnhldr">
                                    <a href="/registerhelpbyadmin"> <button id="rest">Register New Help <i class="fa fa-plus" aria-hidden="true"></i></button></a>
                                    <a href="/allhelpsforadmin"> <button id="vwupt">View/Update Help <i class="fa fa-eye" aria-hidden="true"></i></button></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default AddorMaintainHelps
