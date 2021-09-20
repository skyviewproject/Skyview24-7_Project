import React, { Component } from 'react';
import "../MyTickets/Style.css";
import backendService from "./Service";
import SesssionService from '../SessionManagement/SesssionService';

class Tickets extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             MyTicketsList:[]
        }
        
    }
    componentDidMount()
    {
        const api = new backendService();
        api.getMyAllTickets().then((res) => 
        {
            this.setState(
                {
                MyTicketsList:res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
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
                    <div class="wrapperMyTicketList">
                        <h2><i class="fa fa-list" aria-hidden="true"></i> My all raised Tickets</h2>
                        <div class="listholder">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Ticket id </th>
                                        <th>Riser Name</th>                               
                                        <th>Flat number</th>
                                        <th>Ticket topic </th>
                                        <th>Raised At</th>
                                        <th>Ticket Details</th>
                                        <th>Ticket Status</th>
                                        <th>Solved At</th>
                                        
                                    </tr>
                                </thead>
                                    <tbody>
                                    {
                                            this.state.MyTicketsList.map(ticket=>
                                            <tr>
                                                <td> {ticket.id}  </td>
                                                <td>{ticket.raiserName}</td>
                                                <td>{ticket.raiserFlatno}</td>
                                                <td>{ticket.ticketTopic} </td>
                                                <td>{ticket.ticketIssuedate} </td>
                                                <td>{ticket. ticketDetails}</td>
                                                <td>{ticket.ticketStatus} </td>
                                                <td>{ticket.ticketSolveddate} </td>
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

export default Tickets
