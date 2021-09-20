import React, { Component } from 'react';
import Formbg from "../Images/formbg.jpg";
import backEnd from "./Service";
import "../UpdateUser/Style.css";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class UpdateUserPage extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
            UserId: this.props.match.params.id,
            Username: '',
            Emailid: '',
            MobileNo: '',
            UserAge: 0,
            UserRole: '',
            Password: '',
            UserJob: '',
            Gender: 'Male',
            FlatNo: '',
            BlockNo: '',
            ISActive: false,
            ISVerified: false
            
        }

        this.changeUsername = this.changeUsername.bind(this);
        this.changeEmailId = this.changeEmailId.bind(this);
        this.changeMobileno = this.changeMobileno.bind(this);
        this.changeUserAge = this.changeUserAge.bind(this);
        this.changeUserGender = this.changeUserGender.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeUserJob = this.changeUserJob.bind(this);
        this.changeUserRole = this.changeUserRole.bind(this);
        this.changeUserFlatNo = this.changeUserFlatNo.bind(this);
        this.changeUserBlockNo = this.changeUserBlockNo.bind(this);
        this.changeUserActiveState = this.changeUserActiveState.bind(this);
        this.changeUserVerifiedState = this.changeUserVerifiedState.bind(this);
        this.updateUserDatabyAdmin = this.updateUserDatabyAdmin.bind(this);
    }

    componentDidMount()
    {
        const api = new backEnd();
        api.getUserDetailsbyId(this.state.UserId).then((res) =>
            {
                this.setState(
                    {
                        Username: res.data.fullName,
                        Emailid: res.data.emailId,
                        MobileNo: res.data.mobileNo,
                        UserAge: res.data.userAge,
                        UserRole: res.data.userRole,
                        Password: res.data.userPassword,
                        UserJob: res.data.userOccupation,
                        Gender: res.data.userGender,
                        FlatNo: res.data.userFlatNo,
                        BlockNo: res.data.blockNo,
                        ISActive: res.data.active,
                        ISVerified: res.data.verified
                    }
                );
                
            }
        )
        .catch((error) =>
        {
            console.log(error);
        });
    }

    changeUsername(event){this.setState({Username: event.target.value});}
    changeEmailId(event){this.setState({Emailid: event.target.value});}
    changeMobileno(event){this.setState({MobileNo: event.target.value});}
    changePassword(event){this.setState({Password: event.target.value});}
    changeUserAge(event){this.setState({UserAge: event.target.value});}
    changeUserGender(event){this.setState({Gender: event.target.value});}
    changeUserJob(event){this.setState({UserJob: event.target.value});}
    changeUserRole(event){this.setState({UserRole: event.target.value});}
    changeUserFlatNo(event){this.setState({FlatNo: event.target.value});}
    changeUserBlockNo(event){this.setState({BlockNo: event.target.value});}
    changeUserActiveState(event){this.setState({ISActive: event.target.value});}
    changeUserVerifiedState(event){this.setState({ISVerified: event.target.value});}

    updateUserDatabyAdmin(event) 
    {
        event.preventDefault();

        let updatedUser = {
            "fullName": this.state.Username,
            "emailId": this.state.Emailid,
            "mobileNo": this.state.MobileNo,
            "userPassword": this.state.Password,
            "userGender": this.state.Gender,
            "userAge": parseInt(this.state.UserAge),
            "userOccupation": this.state.UserJob,
            "userFlatNo": this.state.FlatNo,
            "blockNo": this.state.BlockNo,
            "userRole": this.state.UserRole,
            "active": this.state.ISActive,
            "verified": this.state.ISVerified
        }
        
        swal({
            title: "Are you sure?",
            text: `${ JSON.stringify(updatedUser)}`,
            icon: "warning",
            buttons: true,
          })
          .then((update) => {
            if (update) 
            {
                const api = new backEnd();
                api.updateUserDetails(this.state.UserId, updatedUser).then((res) =>
                {
                    console.log(res.status);
                    if(res.status == 200)
                    {
                        swal("User Updated Successfully!", {
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
              swal("Updating Profile Aborted!");
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
                    <div class="wrapperupdateuser">
                        
                        <div class="containerform">
                            <div class="formholder">
                                <div class="imghlder">
                                    <img src={Formbg} alt="formbg" srcset="" />
                                </div>

                                <div class="inpthlder">
                                    <form>
                                    <label for="uname">Username: </label><br />
                                        <input type="text" name="uname" id="uname" onChange={this.changeUsername} value={this.state.Username}/><br />

                                        <label for="eml">Emailid: </label><br />
                                        <input type="text" name="eml" id="eml" onChange={this.changeEmailId} value={this.state.Emailid}/><br />

                                        <label for="mbl">Mobile No: </label><br />
                                        <input type="text" name="mbl" id="mbl" onChange={this.changeMobileno} value={this.state.MobileNo}/>

                                        <label for="age">Your Age: </label><br />
                                        <input type="number" name="age" id="age"  min="1" max="100" onChange={this.changeUserAge} value={this.state.UserAge}/><br />

                                        <label for="usrjb">Your Job: </label><br />
                                        <input type="text" name="usrjb" id="usrjb" onChange={this.changeUserJob} value={this.state.UserJob}/><br />

                                        <label for="role">Role: </label><br />
                                        <select name="role" id="role" value={this.state.UserRole} onChange={this.changeUserRole}>
                                            <option value="ROLE_RESIDENT">ROLE_RESIDENT</option>
                                            <option value="ROLE_SUPERVISIOR">ROLE_SUPERVISIOR</option>
                                            <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                                        </select><br />

                                        <label for="fltno">Flat No: </label><br />
                                        <input type="text" name="fltno" id="fltno" value={this.state.FlatNo} onChange={this.changeUserFlatNo}/><br />

                                        <label for="blkno">Block No: </label><br />
                                        <input type="text" name="blkno" id="blkno" value={this.state.BlockNo} onChange={this.changeUserBlockNo}/><br />

                                        <label for="gndr">Gender: </label><br />
                                        <select name="gndr" id="gndr" value={this.state.Gender} onChange={this.changeUserGender}>
                                            <option value="Male">MALE</option>
                                            <option value="Female">FEMALE</option>
                                            <option value="Other">OTHER</option>
                                        </select><br />

                                        <label for="vrif">Is_Verified: </label><br />
                                        <select name="vrif" id="vrif" value={this.state.ISVerified} onChange={this.changeUserVerifiedState}>
                                            <option value="true">TRUE</option>
                                            <option value="false">FALSE</option> 
                                        </select><br />

                                        <label for="actv">Is_Active: </label><br />
                                        <select name="actv" id="actv" value={this.state.ISActive} onChange={this.changeUserActiveState}>
                                            <option value="true">TRUE</option>
                                            <option value="false">FALSE</option> 
                                        </select><br />

                                        <button onClick={this.updateUserDatabyAdmin}>Update Userdata <i class="fa fa-pencil" aria-hidden="true"></i></button>
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

export default UpdateUserPage
