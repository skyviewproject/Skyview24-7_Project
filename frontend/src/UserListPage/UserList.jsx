import React, { Component } from 'react'
import "../UserListPage/Style.css";
import backendService from "./Service";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class UserList extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             UserList: []
        }

        this.removeUserfromDB = this.removeUserfromDB.bind(this);
    }

    componentDidMount()
    {
        const api = new backendService();
        api.getAllUsers().then((res) => 
        {
            this.setState(
                {
                    UserList: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })
    }

    removeUserfromDB(uId)
    {
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
                api.removeUser(uId).then((res) =>
                {
                    console.log(res.status);
                    if(res.status == 200)
                    {
                        swal("User Data Deleted Successfully!", {
                            icon: "success",
                          });
                          
                        window.location.href = "/userlistforadmin";
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
              swal("Deleting User Aborted!");
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
                    <div class="wrapperUserList">
                        <h2><i class="fa fa-list" aria-hidden="true"></i> All Users Found in the System</h2>
                        <div class="listholder">
                            <table>
                                <thead>
                                    <tr>
                                        <th>User Id</th>
                                        <th>User Name</th>                               
                                        <th>User Contact</th>
                                        <th>User Flat No</th>
                                        <th>User Block No</th>
                                        <th>View User</th>
                                        <th>Delete User</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            this.state.UserList.map(user =>
                                            
                                                <tr>
                                                    <td>{user.uId}</td>
                                                    <td>{user.fullName}</td>
                                                    <td>{user.mobileNo}</td>
                                                    <td>{user.userFlatNo}</td>
                                                    <td>{user.blockNo}</td>
                                                    <td><a href={"/updateuserbyadmin/" + user.uId}><button id="vewbtn">View/Update <i class="fa fa-eye" aria-hidden="true"></i></button></a></td>
                                                    <td><button id="dltbtn" onClick ={() => this.removeUserfromDB(user.uId)}>Remove User <i class="fa fa-trash" aria-hidden="true" ></i></button></td>
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

export default UserList
