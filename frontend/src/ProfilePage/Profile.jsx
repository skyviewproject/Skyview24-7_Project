import React, { Component } from 'react'
import "../ProfilePage/Style.css";
import Avater from "../Images/avater.png";
import SessionService from "../SessionManagement/SesssionService";
import backEnd from "./Service";
import swal from 'sweetalert';

class Profile extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             UserProfile: [],
             atv: '',
             vrf: ''
        }

        this.logoutUser = this.logoutUser.bind(this);
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
                        UserProfile: res.data,
                        atv: res.data.active,
                        vrf: res.data.verified
                    }
                );        
            }

            
        )
        .catch((error) =>
        {
            console.log(error);
        });
    }

    logoutUser()
    {
        swal({
            title: "LOGGING OUT",
            text: "Why.... Please stay and Keep Browsing",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willLogout) => {
            if (willLogout) {
                const api = new SessionService();
                api.logoutUserAndAndDestroySession();
                window.location.href = "/login"
            } else {
              swal("Thaks for Staing with Us");
            }
          });
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
                <div class="wraperprofile">
                    
                    <div className="containerprofile">
                        <div class="card">
                            <div class="card-body">
                                <div class="headholder">
                                    <div class="overlay"></div>
                                    <img src={Avater} alt="avater" srcset="" />
                                </div>

                                <div class="infoholder">
                                    <h3>User Id: {this.state.UserProfile.uId}</h3>
                                    <h3>Name: {this.state.UserProfile.fullName}</h3>
                                    <h3>Email: {this.state.UserProfile.emailId}</h3>
                                    <h3>Contact: {this.state.UserProfile.mobileNo}</h3>
                                    <h3>Age: {this.state.UserProfile.userAge}</h3>
                                    <h3>Gender: {this.state.UserProfile.userGender}</h3>
                                    <h3>Occupation: {this.state.UserProfile.userOccupation}</h3>
                                    <h3>Role: {this.state.UserProfile.userRole}</h3>
                                    <h3>Flat No: {this.state.UserProfile.userFlatNo}</h3>
                                    <h3>Block No: {this.state.UserProfile.blockNo}</h3>
                                    <h3>Account_isActive: {this.state.atv.toString()}</h3>
                                    <h3>Account_isVerified: {this.state.vrf.toString()}</h3>
                                </div>

                                <div class="btnholder">
                                <a href={"/updatemyprofile/"+this.state.UserProfile.uId}><button type="button" id="updt">Update Profile <i class="fa fa-pencil-square" aria-hidden="true"></i> </button> </a>
                                    
                                    <button type="button" id="lgot" onClick = {this.logoutUser}>Logout Now <i class="fa fa-sign-out" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            )
        }
    }
}

export default Profile
