import React, { Component } from 'react'
import backEnd from "./Service";
import "../UpdateInvoice/Style.css";
import Formbg from "../Images/formbg.jpg";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class UpdateInvoicePage extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
            iId: this.props.match.params.id,
            User: 0,
            Date: '',
            Amount: 0,
            Reason: ''
       }

       
       this.changeAmount = this.changeAmount.bind(this);
       this.changeDuedate = this.changeDuedate.bind(this);
       this.changeReason = this.changeReason.bind(this);
       this.changeUid = this.changeUid.bind(this);
       this.updateInvoice = this.updateInvoice.bind(this);
    }

    componentDidMount()
    {
        const api = new backEnd();
        api.getInvoiceDetails(this.state.iId).then((res) =>
        {
            this.setState({
                User: res.data.ownerUserid,
                Date: res.data.dueDate,
                Amount: res.data.totalAmount,
                Reason: res.data.invoiceReason
            })
        })
        .then((error) =>
        {
            console.log(error);
        })
        
    }
    
    changeUid(event){this.setState({User: event.target.value});}
    changeDuedate(event){this.setState({Date: event.target.value});}
    changeAmount(event){this.setState({Amount: event.target.value});}
    changeReason(event){this.setState({Reason: event.target.value});}

    updateInvoice(event)
    {
        event.preventDefault();

        let invoiceData = {
            "ownerUserid": this.state.User,
            "totalAmount": this.state.Amount,
            "dueDate": this.state.Date,
            "invoiceReason": this.state.Reason
        }

        swal({
            title: "Are you sure?",
            text: `${ JSON.stringify(invoiceData)}`,
            icon: "warning",
            buttons: true,
          })
          .then((update) => {
            if (update) 
            {
                const api = new backEnd();
                api.updateInvoiceDetails(this.state.iId, invoiceData).then((res) =>
                {
                    if(res.status == 200)
                    {
                        swal("Invoice Updated Successfully!", {
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
              swal("Updated Invoice Aborted!");
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
                    <div class="wrapperupdateinvoiceform">
                        <h2><i class="fa fa-file-text" aria-hidden="true"></i> Update Invoice Details</h2>
                        <div class="containerform">
                            <div class="formholder">
                                <div class="imghlder">
                                    <img src={Formbg} alt="formbg" srcset="" />
                                </div>

                                <div class="inpthlder">
                                    <form>
                                        <label for="ownid">User Id: </label><br />
                                        <input type="number" name="ownid" id="ownid" placeholder="Enter Owner Id: " value={this.state.User} onChange={this.changeUid}/><br />

                                        <label for="duedt">Due Date: </label><br />
                                        <input type="text" name="duedt" id="duedt" placeholder="Enter Due Date: " value={this.state.Date} onChange={this.changeDuedate}/><br />

                                        <label for="amnt">Invoice Amount: </label><br />
                                        <input type="number" name="amnt" id="amnt" placeholder="Enter Invoice Amount: " value={this.state.Amount} onChange={this.changeAmount}/><br />

                                        <label for="rsn">Charged For: </label><br />
                                        <input type="text" name="rsn" id="rsn" placeholder="Enter Reason for Invoice: " value={this.state.Reason} onChange={this.changeReason}/><br />

                                        <button onClick={this.updateInvoice}>Update Invoice <i class="fa fa-pencil" aria-hidden="true"></i></button>
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

export default UpdateInvoicePage
