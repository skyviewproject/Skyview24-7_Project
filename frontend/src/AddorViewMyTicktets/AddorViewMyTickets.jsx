import React, { Component } from 'react';
import "../AddorViewMyTicktets/Style.css"
import SesssionService from '../SessionManagement/SesssionService';

class AddorViewMyTickets extends Component 
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
                    <div class="wrapperaddorviewtickets">
                        <div class="cardholder">
                            <div class="card">
                                <div class="imghldr">
        
                                </div>
                                <div class="txthlder">
                                    <p>
                                        Hey User, Now you can add Your complain into this System
                                        also, view and Update the details of your complaint.
                                    </p>
                                </div>
                                <div class="btnhldr">
                                    <a href="/addtickets"> <button id="rest">Add Ticket <i class="fa fa-plus" aria-hidden="true"></i></button></a>    
                                    <a href="/mytickets"> <button id="vwupt">View Ticket <i class="fa fa-eye" aria-hidden="true"></i></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default AddorViewMyTickets
