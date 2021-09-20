import React, { Component } from 'react'
import "../AddOrViewPaymentMethod/Style.css";
import SesssionService from '../SessionManagement/SesssionService';

class AddorViewPaymentmethod extends Component {
    render() {
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
                    <div class="wrapperaddorupdatepaymethod">
                    <div class="cardholder">
                        <div class="card">
                            <div class="imghldr">

                            </div>
                            <div class="txthlder">
                                <p>
                                    Hey User, Add your Payment Methods, once added you can pay easily with
                                    those, if You can Update or Remove one Payment Method.
                                </p>
                            </div>
                            <div class="btnhldr">
                                <a href="/addpayment"><button id="rest">Add New Method <i class="fa fa-plus" aria-hidden="true"></i></button></a>
                                <a href="/mypaymentmethods"><button id="vwupt">View Method <i class="fa fa-eye" aria-hidden="true"></i></button></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        }
    }
}

export default AddorViewPaymentmethod
