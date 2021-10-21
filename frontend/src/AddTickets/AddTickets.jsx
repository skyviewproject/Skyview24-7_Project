import React, { Component } from 'react';
import "../AddTickets/Style.css";
import Formbg from "../Images/formbg.jpg";
import backEnd from "./Service";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class AddTickets extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
            ticketTopic:'Electricity problem',
            ticketDetails:''
             
        }

        this.changetickettopic=this.changetickettopic.bind(this);
        this.changeticketDetails=this.changeticketDetails.bind(this);
        this.addNewTicket=this.addNewTicket.bind(this);
    }

    changetickettopic(event){this.setState({ticketTopic: event.target.value});}
    changeticketDetails(event){this.setState({ticketDetails: event.target.value});}
    
    
    addNewTicket(event)
    {
        event.preventDefault();
       
        let ticketdata={
            'ticketTopic':this.state.ticketTopic,
            'ticketDetails':this.state.ticketDetails
        }
        if(this.state.ticketDetails == '')
        {
            swal({
                title: "Wait",
                text: "All Fields are mandatory Please fill all the fields",
                icon: "warning",
              }) 
        }
        else{
        
        swal({
            title: "Are you sure?",
            text: `${ JSON.stringify(ticketdata)}`,
            icon: "warning",
            buttons: true,
          })
          .then((create) => {
            if (create) 
            {
                const api = new backEnd();
                api.registerNewTicket(ticketdata).then((res) =>
                {
                  
                    if(res.status == 200)
                    {
                        swal("New Ticket added Successfully!", {
                            icon: "success",
                          });
                          
                        window.location.href = "/mytickets";
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
              swal("Adding Ticket Aborted!");
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
            if(user.getUserRole() !== "ROLE_RESIDENT")
            {
                window.location.href = "/forbidden"
            }

            else
            {
                return (
                    <div class="wrapperaddticketsform">
                        <h2><i class="fa fa-file-text" aria-hidden="true"></i> Add Your Ticket Details</h2>
                        
                        <div class="containerform">
                            <div class="formholder">
                                
        
                                <div class="inpthlder">
                                    <form>
        
                                        <label for="tickettopic">Ticket Topic: </label><br />
                                        <select name="tickettopic" id="tickettopic" onChange={this.changetickettopic}>                                                                                                         
                        
                                            <option value="Electricity Problem">Electricity problem</option>
                                            <option value="water problem">water problem</option>
                                            <option value="Payment Problem">Payment problem</option>
                                            <option value="Website problem">Website problem</option>
                                            <option value="Others">Others</option>
                                        </select><br />
        
                                        <label for="ticketdetails">Ticket Details: </label><br />
                                        <input type="ticketdetails" name="ticketdetails" id="crno" placeholder="Enter Your Details. " onChange={this.changeticketDetails}/><br />
        
                                        <button onClick={this.addNewTicket}>Add Ticket <i class="fa fa-plus" aria-hidden="true"></i></button>
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

export default AddTickets
