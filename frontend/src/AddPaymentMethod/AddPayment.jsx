import React, { Component } from 'react';
import "../AddPaymentMethod/Style.css";
import Formbg from "../Images/formbg.jpg";
import SesssionService from '../SessionManagement/SesssionService';
import backendService from "./Service";
import userSession from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class AddPayment extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             method: 'DEBIT CARD',
             value: '',
             massage: ''
        }

        this.changeMethodData = this.changeMethodData.bind(this);
        this.changeValueData = this.changeValueData.bind(this);
        this.addPaymentMethod = this.addPaymentMethod.bind(this);
    }

    changeMethodData(event){this.setState({method: event.target.value});}
    changeValueData(event){this.setState({value: event.target.value});}
    
    addPaymentMethod(event)
    {
        event.preventDefault();
        const api = new backendService();
        var user = new userSession();
        var uId = user.getUserId();

        var payment = 
        {
            "userId": uId,
            "methodName": this.state.method,
            "methodDetails": this.state.value
        }


        swal({
            title: "Are you sure?",
            text: `${ JSON.stringify(payment)}`,
            icon: "warning",
            buttons: true,
          })
          .then((create) => {
            if (create) 
            {
                
                api.addNewPaymentMethod(payment).then((res) =>
                {
                    console.log(res.status);
                    if(res.data === "Payment Method already Available, if required you can Update it")
                    {
                        swal({
                            title: "Data Exists",
                            text: "Payment Method already Available, if required you can Update it",
                            icon: "error"
                          })
                    }

                    else
                    {
                        

                        swal("New Payment Method added Successfully!", {
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
                swal("Adding Payment Method Aborted!");
            }
        });

    }
    
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
                    <div class="wrapperaddpaymethodform">
                        <h2><i class="fa fa-file-text" aria-hidden="true"></i> Add Your Payment Details</h2>
                        
                        <div class="containerform">
                            <div class="formholder">
                               

                                <div class="inpthlder">
                                    <form>
                            
                                        <label for="pymtd">Payment Method: </label><br />
                                        <select name="pymtd" id="pymtd" onChange={this.changeMethodData}>
                                            <option value="DEBIT CARD">Debit Card</option>
                                            <option value="CREDIT CARD">Credit Card</option>
                                            <option value="NET BANKING">Net Banking</option>
                                            <option value="UPI PAYMENT">UPI Payment</option>
                                        </select><br />

                                        <label for="crdt">Payment Details: </label><br />
                                        <input type="text" name="crdt" id="crdt" placeholder="Enter Your Paymrnt Credentials. " onChange={this.changeValueData}/><br />

                                        <h4>{this.state.massage}</h4>

                                        <button onClick={this.addPaymentMethod}>Add Paymethod <i class="fa fa-plus" aria-hidden="true"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default AddPayment
