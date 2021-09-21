import React, { Component } from 'react'
import backEnd from "./Service";
import "../AddInvoice/Style.css";
import Formbg from "../Images/formbg.jpg";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class AddInvoicepage extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             User: 0,
             Date: '',
             Amount: 0,
             Reason: ''
        }

        this.changeAmount = this.changeAmount.bind(this);
        this.changeDuedate = this.changeDuedate.bind(this);
        this.changeReason = this.changeReason.bind(this);
        this.changeUid = this.changeUid.bind(this);
        this.addNewInvoice = this.addNewInvoice.bind(this);
    }

    changeUid(event){this.setState({User: event.target.value});}
    changeDuedate(event){this.setState({Date: event.target.value});}
    changeAmount(event){this.setState({Amount: event.target.value});}
    changeReason(event){this.setState({Reason: event.target.value});}

    addNewInvoice(event)
    {
        event.preventDefault();

        let invoiceData = {
            "ownerUserid": this.state.User,
            "totalAmount": this.state.Amount,
            "dueDate": this.state.Date,
            "invoiceReason": this.state.Reason
        }
        if(this.state.User ==''||this.state.Amount==''||this.state.Date==''
        ||this.state.Reason =='')
        {
            swal({
                title: "Wait",
                text: "All Fields are mandatory Please fill all the fields",
                icon: "warning",
              })
        }
        else
        {

        swal({
            title: "Are you sure?",
            text: `${ JSON.stringify(invoiceData)}`,
            icon: "warning",
            buttons: true,
          })
          .then((create) => {
            if (create) 
            {
                const api = new backEnd();
                api.registerNewInvoice(invoiceData).then((res) =>
                {
                    console.log(res.status);
                    if(res.status == 200)
                    {
                        swal("New Invoice added Successfully!", {
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
              swal("Adding Invoice Aborted!");
            }
          });
        }
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
                    <div class="wrapperinvoiceform">
                        <h2><i class="fa fa-file-text" aria-hidden="true"></i> Add New Invoice</h2>
                        <div class="containerform">
                            <div class="formholder">
                                <div class="imghlder">
                                    <img src={Formbg} alt="formbg" srcset="" />
                                </div>

                                <div class="inpthlder">
                                    <form>
                                        <label for="ownid">User Id: </label><br />
                                        <input type="number" name="ownid" id="ownid" placeholder="Enter Owner Id: " onChange={this.changeUid}/><br />

                                        <label for="duedt">Due Date: </label><br />
                                        <input type="date" name="duedt" id="duedt" placeholder="Enter Due Date: " onChange={this.changeDuedate}/><br />

                                        <label for="amnt">Invoice Amount: </label><br />
                                        <input type="number" name="amnt" id="amnt" placeholder="Enter Invoice Amount: " onChange={this.changeAmount}/><br />

                                        <label for="rsn">Charged For: </label><br />
                                        <input type="text" name="rsn" id="rsn" placeholder="Enter Reason for Invoice: " onChange={this.changeReason}/><br />

                                        <button onClick={this.addNewInvoice}>Add New Invoice <i class="fa fa-plus" aria-hidden="true"></i></button>
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

export default AddInvoicepage
