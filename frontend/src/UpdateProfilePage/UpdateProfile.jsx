import React, { Component } from 'react'
import Formbg from "../Images/formbg.jpg";
import "../UpdateProfilePage/Style.css";
import SessionService from "../SessionManagement/SesssionService";
import backEnd from "./Service";
import swal from 'sweetalert';

class UpdateProfile extends Component 
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
            Gender: '',
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
        this.updateUser = this.updateUser.bind(this);

    }

    componentDidMount()
    {
        const api = new backEnd();
        const userSession = new SessionService();
        const id = userSession.getUserId();
        api.viewMyProfile(id).then((res) =>
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

    
    updateUser(event) 
    {
        event.preventDefault();

        let updatedUser = {
            "fullName": this.state.Username,
            "emailId": this.state.Emailid,
            "mobileNo": this.state.MobileNo,
            "userPassword": this.state.Password,
            "userGender": this.state.Gender,
            "userAge": this.state.UserAge,
            "userOccupation": this.state.UserJob
        }

        var regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(this.state.Username == '' || this.state.Emailid == '' || this.state.MobileNo == '' || this.state.Password == '' || this.state.Gender == '' || 
        this.state.UserAge == '' || this.state.UserJob == '')
        {
            swal({
                title: "Wait",
                text: "All Fields are mandatory Please fill all the fields",
                icon: "warning",
              })
        }

        else if(regexEmail.test(this.state.Emailid) == false)
        {
            swal({
                title: "Wait",
                text: "Emailid is not in proper format",
                icon: "warning",
              })
        }

        else if(this.state.MobileNo.toString().length != 10)
        {
            swal({
                title: "Wait",
                text: "Mobile No must be 10 Digits",
                icon: "warning",
              })
        }

        else if(this.state.UserAge <1 || this.state.UserAge > 100)
        {
            swal({
                title: "Wait",
                text: "Age must be within 1 to 100",
                icon: "warning",
              })
        }

        else if(this.state.Password.length < 5)
        {
            swal({
                title: "Wait",
                text: "Password Length must be 5 or greater than 5",
                icon: "warning",
              })
        }

        else
        {
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
                    api.updateProfile(this.state.UserId, updatedUser).then((res) =>
                    {
                        console.log(res.status);
                        if(res.status == 200)
                        {
                            swal("Profile Updated Successfully!", {
                                icon: "success",
                              });
                              
                            window.location.href = "/myprofile";
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
        
 
    }
    


    render() 
    {
        const user = new SessionService();

        if(user.getUserSession()==null)
        {
            window.location.href = "/unauthorized"
        }

        else
        {
            return (
                <div class="wrapperupdateprofile">
                    
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
                                    <input type="number" name="age" id="age"  onChange={this.changeUserAge} value={this.state.UserAge}/><br />

                                    <label for="usrjb">Your Job: </label><br />
                                    <input type="text" name="usrjb" id="usrjb" onChange={this.changeUserJob} value={this.state.UserJob}/><br />

                                    <label for="pswd">Your Password: </label><br />
                                    <input type="password" onChange={this.changePassword} id="pswd" name="pswd" required/>

                                    <label for="role">Role: </label><br />
                                    <select name="role" id="role" value={this.state.UserRole} disabled>
                                        <option value="ROLE_RESIDENT">ROLE_RESIDENT</option>
                                        <option value="ROLE_SUPERVISIOR">ROLE_SUPERVISIOR</option>
                                        <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                                    </select><br />

                                    <label for="fltno">Flat No: </label><br />
                                    <input type="text" name="fltno" id="fltno" value={this.state.FlatNo} disabled/><br />

                                    <label for="blkno">Block No: </label><br />
                                    <input type="text" name="blkno" id="blkno" value={this.state.BlockNo} disabled/><br />

                                    <label for="gndr">Gender: </label><br />
                                    <select name="gndr" id="gndr" value={this.state.Gender} onChange={this.changeUserGender}>
                                        <option value="Male">MALE</option>
                                        <option value="Female">FEMALE</option>
                                        <option value="Other">OTHER</option>
                                    </select><br />

                                    <label for="vrif">Is_Verified: </label><br />
                                    <select name="vrif" id="vrif" value={this.state.ISVerified} disabled>
                                        <option value="true">TRUE</option>
                                        <option value="false">FALSE</option> 
                                    </select><br />

                                    <label for="actv">Is_Active: </label><br />
                                    <select name="actv" id="actv" value={this.state.ISActive} disabled>
                                        <option value="true">TRUE</option>
                                        <option value="false">FALSE</option> 
                                    </select><br />

                                    <button onClick={this.updateUser}>Update Profile <i class="fa fa-pencil" aria-hidden="true"></i></button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default UpdateProfile
