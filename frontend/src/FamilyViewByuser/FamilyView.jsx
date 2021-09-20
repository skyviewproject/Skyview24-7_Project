import React, { Component } from 'react'
import SesssionService from '../SessionManagement/SesssionService';
import "../FamilyViewByuser/Style.css";
import backendService from "./Service";
import swal from 'sweetalert';

class FamilyView extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             MyFamilyList:[]
        }
       
    }
    componentDidMount()
    {
        const api = new backendService();
        api.getMyAllMembers().then((res) => 
        {
            this.setState(
                {
                   MyFamilyList:res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })
    
    }

    deletemyMember(id){
        swal({
            title: "Are you sure?",
            text: "Data will be deleted Permanently",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((deleted) => {
            if (deleted) 
            {
                const api = new backendService();
                api.removeMyMember(id).then((res) =>
                {
                    console.log(res.status);
                    if(res.status == 200)
                    {
                        swal("Family Member Deleted Successfully!", {
                            icon: "success",
                          });
                          
                        window.location.href = "/myfamilymembers";
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
                    <div class="wrapperMyFamilyList">
                        <h2><i class="fa fa-list" aria-hidden="true"></i> My All Family Members</h2>
                        <div class="listholder">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Member Name</th>                               
                                        <th>Member Email</th>
                                        <th>Member Contact</th>
                                        <th>Member Relation</th>
                                        <th>Member Age  </th>
                                        <th>Update Member </th>
                                        <th>Delete Member </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        this.state.MyFamilyList.map(member=>
                                            <tr>
                                                <td>{member.memberName}</td>
                                                <td>{member.emailId}</td>
                                                <td>{member.mobileNo}</td>
                                                <td>{member.relation} </td>
                                                <td>{member.memberAge}</td>
                                                <td><a href={"/updatemyfamily/"+member.id}><button id="vewbtn">View/Update Member <i class="fa fa-eye" aria-hidden="true"></i></button></a></td>
                                                <td><button id="dltbtn" onClick={() =>this.deletemyMember(member.id)}>Delete Memeber <i class="fa fa-trash" aria-hidden="true" id="dltbtn"></i></button></td>
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

export default FamilyView
