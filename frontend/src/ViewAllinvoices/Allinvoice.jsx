import React, { Component } from 'react'
import backendService from "./Service";
import "../ViewAllinvoices/Style.css";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class Allinvoice extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             Invoices: [],
        }

        //this.checkIfPaymentdone = this.checkIfPaymentdone.bind(this);
        this.deleteInvoicefromDB = this.deleteInvoicefromDB.bind(this);
    }

    componentDidMount()
    {
        const api = new backendService();
        api.getAllInvoices().then((res) => 
        {
            this.setState(
                {
                    Invoices: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })
    }

    deleteInvoicefromDB(iId)
    {
        swal({
            title: "Are you sure?",
            text: "Resigning Help from Your Flat",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((deleted) => {
            if (deleted) 
            {
                const api = new backendService();
                api.removeInvoice(iId).then((res) =>
                {
                    if(res.status == 200)
                    {
                        swal("Payment Method Removed Successfully!", {
                            icon: "success",
                          });
                          
                        window.location.href = "/invoicelistforadmin";
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
            } else {
              swal("Deleting Help Aborted!");
            }
          });
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
            if(user.getUserRole() !== "ROLE_ADMIN")
            {
                window.location.href = "/forbidden"
            }

            else
            {
                return (
                    <div class="wrapperAllInvoiceList">
                        <h2><i class="fa fa-list" aria-hidden="true"></i> View All Invoices</h2>
                        <div class="listholder">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Invoice Id</th>
                                        <th>Resident Name</th>
                                        <th>Flat No</th>
                                        <th>Invoice Reason</th>                               
                                        <th>Invoice Amount(Rs.)</th>
                                        <th>Invoice Duedate</th>
                                        <th>Update Invoice</th>
                                        <th>Remove Invoice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.Invoices.map(
                                            allinvoices =>
                                            <tr>
                                                <td>{allinvoices[0]}</td>
                                                <td>{allinvoices[1]}</td>
                                                <td>{allinvoices[2]}</td>
                                                <td>{allinvoices[5]}</td>
                                                <td>{allinvoices[6]}</td>
                                                <td>{allinvoices[4]}</td>
                                                <td><a href={"/updateinvoicebyadmin/" + allinvoices[0]}><button id="vewbtn">View/Update <i class="fa fa-eye" aria-hidden="true"></i></button></a></td>
                                                <td><button id="dltbtn" onClick={() => this.deleteInvoicefromDB(allinvoices[0])}>Remove Invoice <i class="fa fa-trash" aria-hidden="true" ></i></button></td>
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

export default Allinvoice

