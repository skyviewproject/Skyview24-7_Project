import React, { Component } from 'react'
import "../AddorViewFamily/Style.css";
import SesssionService from '../SessionManagement/SesssionService';

class AddorUpdateFamilyPage extends Component {
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
                    <div class="wrapperaddorupdatefamily">
                        <div class="cardholder">
                            <div class="card">
                                <div class="imghldr">
        
                                </div>
                                <div class="txthlder">
                                    <p>
                                        Hey User, Now you can add Your Family members yo this System
                                        also, view and Update the details of your Family Members.
                                    </p>
                                </div>
                                <div class="btnhldr">
                                    <a href="/addfamilymember"><button id="rest">Add Family <i class="fa fa-plus" aria-hidden="true"></i></button></a>
                                    <a href="/myfamilymembers"><button id="vwupt">View/Update Family <i class="fa fa-eye" aria-hidden="true"></i></button></a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default AddorUpdateFamilyPage
