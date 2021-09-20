import React, { Component } from 'react'
import "../AddNewHelp/Style.css";
import backendService from "./Service";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class AddNewHelp extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             DailyHelpList: []
        }

        this.addHelptoWork = this.addHelptoWork.bind(this);
    }

    componentDidMount()
    {
        const api = new backendService();
        api.getMyAllDailyHelpList().then((res) => 
        {
            this.setState(
                {
                    DailyHelpList: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })
    }

    addHelptoWork(hId)
    {
        const api = new backendService();
        var userSession = new SesssionService();
    
        var help = {
            "helperId": hId,
            "residentId": userSession.getUserId()
        }

        swal({
            title: "Are you sure?",
            text: "Assign the Help for Your Flat",
            icon: "warning",
            buttons: true,
          })
          .then((create) => {
            if (create) 
            {
                const api = new backendService();
                api.ifWorkinginFlat(hId).then((res) =>
                {
                    if(res.status == 200)
                    {
                        if(res.data==false)
                        {
                            api.assginHelptoWork(help).then((ret) => 
                            {
                                if(ret.status == 200)
                                {
                                    swal("New Help Assigned Successfully!", {
                                        icon: "success",
                                      });
                                      
                                    window.location.href = "/myhelperslist";
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

                        else
                        {
                            swal({
                                title: "Error",
                                text: "Help is already Working in your Flat",
                                icon: "error",
                            });
                        }
                        
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
              swal("Assigning Help Aborted!");
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
                    <div class="wrapperAllHelpsListByUser">
                        <h2><i class="fa fa-list" aria-hidden="true"></i> All Daily Helps Found in the System</h2>
                        <div class="listholder">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Help Id</th>
                                        <th>Help Name</th>                               
                                        <th>Help Type</th>
                                        <th>Help Contact</th>
                                        <th>Help Gender</th>
                                        <th>Help Age</th>
                                        <th>Add to Work</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.DailyHelpList.map(
                                            help =>
                                            <tr>
                                                <td>{help.id}</td>
                                                <td>{help.helpName}</td>
                                                <td>{help.helpType}</td>
                                                <td>{help.helpContact}</td>
                                                <td>{help.helpGender}</td>
                                                <td>{help.helpAge}</td>
                                                <td><button id="vewbtn" onClick = {() => this.addHelptoWork(help.id)}>Assign Help <i class="fa fa-eye" aria-hidden="true"></i></button></td>
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

export default AddNewHelp
