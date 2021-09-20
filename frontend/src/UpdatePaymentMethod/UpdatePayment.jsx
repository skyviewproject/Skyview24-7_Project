import React, { Component } from 'react'
import "../UpdatePaymentMethod/Style.css";
import Formbg from "../Images/formbg.jpg";
import backEnd from "./Service";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class UpdatePayment extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
            payId: this.props.match.params.id,
            payMethod: '',
            payDetails: ''
            
        }

        this.changePayMethod = this.changePayMethod.bind(this);
        this.changePayDetails = this.changePayDetails.bind(this);
        this.updatePaymentMethod = this.updatePaymentMethod.bind(this);

    }

    componentDidMount()
    {
        const api = new backEnd();
        api.getPaymentMethodDetails(this.state.payId).then((res) =>
        {
            this.setState(
                {
                    payMethod: res.data.methodName,
                    payDetails: res.data.methodDetails
            
                }
            );
        })
    }

    changePayMethod(event){this.setState({payMethod: event.target.value});}
    changePayDetails(event){this.setState({payDetails: event.target.value});}


    updatePaymentMethod(event)
    {
        event.preventDefault();
        
        let updatedPaymentMethod = {
            "methodName": this.state.payMethod,
            "methodDetails": this.state.payDetails
        }

        swal({
            title: "Are you sure?",
            text: `${ JSON.stringify(updatedPaymentMethod)}`,
            icon: "warning",
            buttons: true,
          })
          .then((update) => {
            if (update) 
            {
                const api = new backEnd();
                api.updatePaymentMethod(this.state.payId, updatedPaymentMethod).then((res) =>
                {
                    console.log(res.status);
                    if(res.status == 200)
                    {
                        swal("Payment Method Updated Successfully!", {
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
              swal("Updating Payment Method Aborted!");
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
                    <div class="wrapperupdatepaymethodform">
                        <h2><i class="fa fa-file-text" aria-hidden="true"></i> Update Your Payment Details</h2>
                        
                        <div class="containerform">
                            <div class="formholder">
                                <div class="imghlder">
                                    <img src={Formbg} alt="formbg" srcset="" />
                                </div>

                                <div class="inpthlder">
                                    <form>
                            
                                        <label for="pymtd">Payment Method: </label><br />
                                        <select name="pymtd" id="pymtd" value = {this.state.payMethod} onChange={this.changePayMethod}>
                                            <option value="DEBIT CARD">Debit Card</option>
                                            <option value="CREDIT CARD">Credit Card</option>
                                            <option value="NET BANKING">Net Banking</option>
                                            <option value="UPI PAYMENT">UPI Payment</option>
                                        </select><br />

                                        <label for="crdt">Payment Details: </label><br />
                                        <input type="text" name="crdt" id="crdt" placeholder="Enter Your Paymrnt Credentials. " value = {this.state.payDetails} onChange={this.changePayDetails}/><br />

                                        <button onClick={this.updatePaymentMethod}>Update Paymethod <i class="fa fa-pencil" aria-hidden="true"></i></button>
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

export default UpdatePayment
