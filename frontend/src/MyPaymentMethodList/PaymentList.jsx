import React, { Component } from 'react'
import "../MyPaymentMethodList/Style.css";
import backendService from "./Service";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class PaymentList extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             PaymentMethods: []
        }

        this.removePaymentMethod = this.removePaymentMethod.bind(this);
    }

    componentDidMount()
    {
        const api = new backendService();
        api.getMyAllPaymentMethod().then((res) => 
        {
            this.setState(
                {
                    PaymentMethods: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })
    }

    removePaymentMethod(id)
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
                api.removeMyPaymentMethod(id).then((res) =>
                {
                    if(res.status == 200)
                    {
                        swal("Help Resigned Successfully!", {
                            icon: "success",
                          });
                          
                        window.location.href = "/mypaymentmethods";
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
              swal("Resiging Help Aborted!");
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
            if(user.getUserRole() !== "ROLE_RESIDENT")
            {
                window.location.href = "/forbidden"
            }

            else
            {

                return (
                    <div class="wrapperMyPaymentMenthodList">
                        <h2><i class="fa fa-list" aria-hidden="true"></i> My All Payment Methods</h2>
                        <div class="listholder">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Method Id</th>
                                        <th>Method Type</th>                               
                                        <th>Method Details</th>
                                        <th>Update Method</th>
                                        <th>Delete Method</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.PaymentMethods.map(pay =>
                                            
                                            <tr>
                                                <td>{pay.id}</td>
                                                <td>{pay.methodName}</td>
                                                <td>{pay.methodDetails}</td>
                                                <td><a href= {"/updatepayment/" + pay.id }><button id="vewbtn">View/Update Method <i class="fa fa-eye" aria-hidden="true"></i></button></a></td>
                                                <td><button id="dltbtn" onClick={() => this.removePaymentMethod(pay.id)}>Remove Method <i class="fa fa-trash" aria-hidden="true" id="dltbtn"></i></button></td>
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

export default PaymentList
