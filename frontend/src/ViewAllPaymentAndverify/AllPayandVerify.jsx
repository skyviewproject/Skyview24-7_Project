import React, { Component } from 'react'
import backendService from "./Service";
import "../ViewAllPaymentAndverify/Style.css";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';
class AllPayandVerify extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             PaymentHistory: []
        }

        this.verifyPaymentbyAdmin = this.verifyPaymentbyAdmin.bind(this);
    }

    componentDidMount()
    {
        const api = new backendService();
        api.getAllPaymentHistory().then((res) => 
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

    verifyPaymentbyAdmin(pId)
    {
        const api = new backendService();

        api.checkIfPaymentisVerified(pId).then((res) =>
        {
            if(res.data === "VERIFIED")
            {
                swal({
                    title: "Stop!",
                    text: "Payment has been verified Already",
                    icon: "error",
                });
            }

            else
            {
                api.verifyPayment(pId).then((res) =>
                {
                    if(res.status==200)
                    {
                        swal({
                            title: "Verfied",
                            text: "Payment has been verified Successfully",
                            icon: "success",
                        });
                        window.location.href = "/verifypaymentbyadmin";
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
            if(user.getUserRole() !== "ROLE_ADMIN")
            {
                window.location.href = "/forbidden"
            }

            else
            {
                return (
                    <div class="wrapperPayhistoryList">
                        <h2><i class="fa fa-list" aria-hidden="true"></i> All Payments Done By User</h2>
                        <div class="listholder">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Payment Id</th>
                                        <th>User Name</th>                               
                                        <th>User Flat No</th>
                                        <th>Paid At</th>
                                        <th>Total Amount</th>
                                        <th>Status</th>
                                        <th>Verified At</th>
                                        <th>Verify Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            this.state.PaymentHistory.map(payhistory =>
                                            
                                                <tr>
                                                    <td>{payhistory[0]}</td>
                                                    <td>{payhistory[1]}</td>
                                                    <td>{payhistory[2]}</td>
                                                    <td>{payhistory[4]}</td>
                                                    <td>{payhistory[3]}</td>
                                                    <td>{payhistory[5]}</td>
                                                    <td>{payhistory[6]}</td>
                                                    <td><button id="vewbtn" onClick={() => this.verifyPaymentbyAdmin(payhistory[0])}>Verify Pay <i class="fa fa-eye" aria-hidden="true"></i></button></td>
                                                
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

export default AllPayandVerify
