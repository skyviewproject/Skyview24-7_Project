import React, { Component } from 'react'
import "../Myinvoice/Style.css";
import backendService from "./Service";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class MyInvoicePage extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             DeuInvoices: [],
             PaymentHistory: []
        }

        this.checkIfPaymentdone = this.checkIfPaymentdone.bind(this);
    }

    componentDidMount()
    {
        const api = new backendService();
        api.getMyAllInvoices().then((res) => 
        {
            this.setState(
                {
                    DeuInvoices: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })

        api.getMyPaidInvoicesList().then((res) => 
        {
            this.setState(
                {
                    PaymentHistory: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })
    }

    checkIfPaymentdone(iId)
    {

        const api = new backendService();
        api.checkIfPaymentisDoneforInvoice(iId).then((res) => 
        {
           if(res.data == true)
           {
                swal({
                    title: "Stop!",
                    text: "You have already paid for this Invoice, if not contact Admin",
                    icon: "error",
                });
           }

           else
           {
               window.location.href = "/makepayment/" + iId;
           }
        })
        .catch((error) =>
        {
            if(error != undefined)
            {
                swal({
                    title: "Error",
                    text: `${error}`,
                    icon: "error",
                });
            }
        })

    }
    
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
                    <div class="wrapperMyInvoiceList">
                        <h2><i class="fa fa-list" aria-hidden="true"></i> My All Invoices</h2>
                        <div class="listholder">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Invoice Id</th>
                                        <th>Invoice Reason</th>                               
                                        <th>Invoice Amount(Rs.)</th>
                                        <th>Invoice Duedate</th>
                                        <th>Make Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.DeuInvoices.map(
                                            due =>
                                            <tr>
                                                <td>{due.id}</td>
                                                <td>{due.invoiceReason}</td>
                                                <td>{due.totalAmount}</td>
                                                <td>{due.dueDate}</td>   
                                                <td><button id="vewbtn" onClick={() => this.checkIfPaymentdone(due.id)}>Pay Now <i class="fa fa-cc-discover" aria-hidden="true"></i></button></td>
                                            </tr>
                                        )
                                    }
                                
                                </tbody>
                            </table>

                        </div>

                        <h2><i class="fa fa-list" aria-hidden="true"></i> Payment History of this Month</h2>
                        <div class="listholder">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Pay_History Id</th>
                                        <th>Paid At</th>                               
                                        <th>Paid Amount(Rs.)</th>
                                        <th>Recipant Details</th>
                                        <th>Status</th>
                                        <th>Verified At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.PaymentHistory.map(
                                            history =>
                                            <tr>
                                                <td>{history.id}</td>
                                                <td>{history.payDate}</td>
                                                <td>{history.totalAmount}</td>
                                                <td>{history.recipantDetails}</td>
                                                <td>{history.paymentStatus}</td>
                                                <td>{history.verifyDate}</td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            
                            </table>

                        </div>
                    </div>
                )
            }
        }
    }
}

export default MyInvoicePage
