import React, { Component } from 'react'
import "../MyAllHelperlist/Style.css";
import backendService from "./Service";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class MyHelpersList extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             MyHelpersList: []
        }

        this.resignHelpfromMyFlat = this.resignHelpfromMyFlat.bind(this);
    }

    componentDidMount()
    {
        const api = new backendService();
        api.getMyAllHelpWorkers().then((res) => 
        {
            this.setState(
                {
                    MyHelpersList: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })
    }

    resignHelpfromMyFlat(hId)
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
                api.removeMyHelp(hId).then((res) =>
                {
                    if(res.status == 200)
                    {
                        swal("Help is resigned Successfully!", {
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
            } else {
              swal("Deleting Member Aborted!");
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
                    
                    <div class="wrapperMyHelpsList">
                        <h2><i class="fa fa-list" aria-hidden="true"></i> Helpers working in My Flat</h2>
                        <div class="listholder">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Help Id</th>
                                        <th>Your Name</th>
                                        <th>Your Flat No</th>
                                        <th>Help Name</th>                               
                                        <th>Help Type</th>
                                        <th>Help Contact</th>
                                        <th>Resign Help</th>
                                    </tr>
                                </thead>
                                <tbody>  
                                    {
                                        this.state.MyHelpersList.map(helps =>
                                            
                                            <tr>
                                                <td>{helps[0]}</td>
                                                <td>{helps[1]}</td>
                                                <td>{helps[2]}</td>
                                                <td>{helps[4]}</td>
                                                <td>{helps[5]}</td>
                                                <td>{helps[6]}</td>
                                                <td><button id="dltbtn" onClick={() => this.resignHelpfromMyFlat(helps[0])}>Resign Help <i class="fa fa-trash" aria-hidden="true" ></i></button></td>
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

export default MyHelpersList
