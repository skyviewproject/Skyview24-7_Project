import React, { Component } from 'react'
import "../AddorViewInvoice/Style.css";
import SesssionService from '../SessionManagement/SesssionService';

class AddorviewInvoice extends Component {
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
                return(
                    <div class="wrapperaddorupdateInvoice">
                        <div class="cardholder">
                            <div class="card">
                                <div class="imghldr">

                                </div>
                                <div class="txthlder">
                                    <p>
                                        Hey Admin you can Add new Invoices, Update and Remove invoices, after adding
                                        Residents can Pay the respective charges, You can verify Payment also.
                                    </p>
                                </div>
                                <div class="btnhldr">
                                    <a href="/addnewinvoicebyadmin"><button id="rest">Add Invoices <i class="fa fa-plus" aria-hidden="true"></i></button></a>
                                    <a href="/invoicelistforadmin"><button id="vwupt">View Invoices <i class="fa fa-eye" aria-hidden="true"></i></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default AddorviewInvoice

