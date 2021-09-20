import React, { Component } from 'react'
import "../AllHelperlistForAdmin/Style.css";
import backendService from "./Service";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class AllHelpsForAdmin extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             HelpersList: [],
             HelpWorking: [],
             Findhelp: 0
        }

        this.deleteHelpfromDB = this.deleteHelpfromDB.bind(this);
        this.findWorkingHelps = this.findWorkingHelps.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    componentDidMount()
    {
        const api = new backendService();
        api.getyAllHelpWorkersList().then((res) => 
        {
            this.setState(
                {
                    HelpersList: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })
    }

    changeInput(event){this.setState({Findhelp: event.target.value});}

    findWorkingHelps(event)
    {
        event.preventDefault();
        const api = new backendService();
        api.findHelpersinDiffFlats(this.state.Findhelp).then((res) => 
        {
            this.setState(
                {
                    HelpWorking: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        }) 
    }

    deleteHelpfromDB(hId)
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
                api.removeMyPaymentMethod(hId).then((res) =>
                {
                    if(res.status == 200)
                    {
                        swal("Help Removed Successfully!", {
                            icon: "success",
                          });
                          
                        window.location.href = "/allhelpsforadmin";
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
              swal("Removing Help Aborted!");
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
                    
                    <div class="wrapperadminhelpList">
                        <h2><i class="fa fa-list" aria-hidden="true"></i> Helpers Present in the System</h2>
                        <div class="listholder">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Help Id</th>
                                        <th>Help Name</th>                               
                                        <th>Help Contact</th>
                                        <th>Hekp Age</th>
                                        <th>Help Gender</th>
                                        <th>Help Type</th>
                                        <th>Update Help</th>
                                        <th>Remove Help</th>
                                    </tr>
                                </thead>
                                <tbody>  
                                    {
                                        this.state.HelpersList.map(helps =>
                                            
                                            <tr>
                                                <td>{helps.id}</td>
                                                <td>{helps.helpName}</td>
                                                <td>{helps.helpContact}</td>
                                                <td>{helps.helpAge}</td>
                                                <td>{helps.helpGender}</td>
                                                <td>{helps.helpType}</td>
                                                <td><a href={"/updatehelpbyadmin/" + helps.id}><button id="vewbtn">View/Update <i class="fa fa-eye" aria-hidden="true"></i></button></a></td>
                                                <td><button id="dltbtn" onClick={() => this.deleteHelpfromDB(helps.id)}>Remove Help <i class="fa fa-trash" aria-hidden="true" ></i></button></td>
                                            </tr>
                                            
                                        )
                                        
                                    }  
                                </tbody>
                            
                            </table>

                        </div>

                        <h2><i class="fa fa-list" aria-hidden="true"></i> Check Helps Working in Flats</h2>

                        <form id="srhfrm">
                            <input type="number" name="fndhlp" id="fndhlp" placeholder="Enter Help Id to Search: " onChange={this.changeInput}/>
                            <button onClick={this.findWorkingHelps}>Find Helps</button>
                        </form>

                        <div class="listholder">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Owner Name</th>
                                        <th>Flat No</th>                               
                                        <th>Block No</th>
                                        <th>Hekp Name</th>
                                        <th>Help Type</th>
                                        <th>Help Contact</th>
                                    </tr>
                                </thead>
                                <tbody>  
                                    {
                                        this.state.HelpWorking.map(helps =>
                                            
                                            <tr>
                                                <td>{helps[1]}</td>
                                                <td>{helps[2]}</td>
                                                <td>{helps[3]}</td>
                                                <td>{helps[4]}</td>
                                                <td>{helps[5]}</td>
                                                <td>{helps[6]}</td>
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

export default AllHelpsForAdmin
