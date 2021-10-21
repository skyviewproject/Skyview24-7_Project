import React, { Component } from 'react'
import backendService from "./Service";
import "../ViewTicketsAndResolve/Style.css";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

export class TicketAndResolve extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             TicketList: []
        }

        this.resolveTicket = this.resolveTicket.bind(this);
    }

    componentDidMount()
    {
        const api = new backendService();
        api.getAllTickets().then((res) => 
        {
            this.setState(
                {
                    TicketList: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })
    }

    resolveTicket(tId)
    {
        const api = new backendService();
        api.checkIfTicketisSolved(tId).then((res) =>
        {
            if(res.data === "SOLVED")
            {
                swal({
                    title: "Stop!",
                    text: "Ticket has been resolved Already",
                    icon: "error",
                });
            }

            else
            {
                api.resolveTicket(tId).then((res) =>
                {
                    if(res.status==200)
                    {
                        swal({
                            title: "Resolved",
                            text: "Ticket has been verified Successfully",
                            icon: "success",
                        });
                        
                        window.location.href = "/resolvetickets"
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
            if(user.getUserRole() !== "ROLE_SUPERVISIOR")
            {
                window.location.href = "/forbidden"
            }

            else
            {
        
                return (
                    <div class="wrapperTicketsList">
                        <h2><i class="fa fa-list" aria-hidden="true"></i> All Tickets Raised By Residents</h2>
                        <div class="listholder">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Ticket Id</th>
                                        <th>Raiser Name</th>                               
                                        <th>Flat No</th>
                                        <th>Ticket Issue</th>
                                        <th>Ticket Details</th>
                                        <th>Ticket Issue date</th>
                                        <th>Ticket Status</th>
                                        <th>Ticket Solved Date</th>
                                        <th>Resolve Ticket</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            this.state.TicketList.map(tickets =>
                                            
                                                <tr>
                                                    <td>{tickets.id}</td>
                                                    <td>{tickets.raiserName}</td>
                                                    <td>{tickets.raiserFlatno}</td>
                                                    <td>{tickets.ticketTopic}</td>
                                                    <td>{tickets.ticketDetails}</td>
                                                    <td>{tickets.ticketIssuedate}</td>
                                                    <td>{tickets.ticketStatus}</td>
                                                    <td>{tickets.ticketSolveddate}</td>
                                                    <td><button id="vewbtn" onClick={() => this.resolveTicket(tickets.id)}>solve <i class="fa fa-eye" aria-hidden="true"></i></button></td>
                                                
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

export default TicketAndResolve
