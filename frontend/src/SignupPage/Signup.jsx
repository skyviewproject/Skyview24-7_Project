import React, { Component } from 'react'
import "../SignupPage/Style.css";
import Formbg from "../Images/formbg.jpg";
import SessionService from "../SessionManagement/SesssionService";
import backEnd from "./Service";
import swal from 'sweetalert';

class Signup extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
            UserId: this.props.match.params.id,
            Username: '',
            Emailid: '',
            MobileNo: '',
            UserAge: 0,
            Password: '',
            UserJob: '',
            Gender: 'Male',
        }

        this.changeUsername = this.changeUsername.bind(this);
        this.changeEmailId = this.changeEmailId.bind(this);
        this.changeMobileno = this.changeMobileno.bind(this);
        this.changeUserAge = this.changeUserAge.bind(this);
        this.changeUserGender = this.changeUserGender.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeUserJob = this.changeUserJob.bind(this);
        this.signupuser = this.signupuser.bind(this);
    }

    changeUsername(event){this.setState({Username: event.target.value});}
    changeEmailId(event){this.setState({Emailid: event.target.value});}
    changeMobileno(event){this.setState({MobileNo: event.target.value});}
    changePassword(event){this.setState({Password: event.target.value});}
    changeUserAge(event){this.setState({UserAge: event.target.value});}
    changeUserGender(event){this.setState({Gender: event.target.value});}
    changeUserJob(event){this.setState({UserJob: event.target.value});}

    
    signupuser(event) 
    {
        event.preventDefault();

        let userData = {
            "fullName": this.state.Username,
            "emailId": this.state.Emailid,
            "mobileNo": this.state.MobileNo,
            "userPassword": this.state.Password,
            "userGender": this.state.Gender,
            "userAge": this.state.UserAge,
            "userOccupation": this.state.UserJob
        }

        swal({
            title: "Are you sure?",
            text: `${ JSON.stringify(userData)}`,
            icon: "warning",
            buttons: true,
          })
          .then((signUp) => {
            if (signUp) 
            {
                const api = new backEnd();
                api.checkIfuserisPresent(this.state.Emailid).then((ret) =>
                {
                    if(ret.data == false)
                    {
                        api.registerUser(userData).then((res) =>
                        {
                            console.log(res.status);
                            if(res.status == 200)
                            {
                                swal("Signup Successfull!", {
                                    icon: "success",
                                  });
                                window.location.href = "/login";
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
                            title: "Wait",
                            text:"Emailid Already Present in our Database, Please Change Your Emailid",
                            icon: "warning",
                        });
                    }
                }).catch((error) =>
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
              swal("Signup Aborted!");
            }
          });

        
        
 
    }
    
    render() 
    {
        const user = new SessionService();
        if(user.getUserSession()!=null)
        {
            window.location.href = "/home"
        }

        else
        {
            return (
                <div class="wrappersignupform">
                    
                    <div class="containerform">
                        <div class="formholder">
                            <div class="imghlder">
                                <img src={Formbg} alt="formbg" srcset="" />
                            </div>

                            <div class="inpthlder">
                                <form>
                                    <label for="uname">Username: </label><br />
                                    <input type="text" name="uname" id="uname" placeholder="Enter Your Full Name: " onChange={this.changeUsername}/><br />

                                    <label for="email">Emailid: </label><br />
                                    <input type="email" name="email" id="email" placeholder="Enter Your Emailid: " onChange={this.changeEmailId}/><br />

                                    <label for="mblno">Mobile No: </label><br />
                                    <input type="text" name="mblno" id="mblno" placeholder="Enter Your Mobile No: " onChange={this.changeMobileno}/><br />

                                    <label for="age">Your Age: </label><br />
                                    <input type="number" name="age" id="age" placeholder="Enter Your Age: " min="1" max="100" onChange={this.changeUserAge}/><br />

                                    <label for="job">Your Job: </label><br />
                                    <input type="text" name="job" id="job" placeholder="Enter Your Occupation: " onChange={this.changeUserJob}/><br />

                                    <label for="gndr">Gender: </label><br />
                                    <select name="gndr" id="gndr" onChange={this.changeUserGender}>
                                        <option value="Male">MALE</option>
                                        <option value="Female">FEMALE</option>
                                        <option value="Other">OTHER</option>
                                    </select><br />

                                    <label for="pwd">Password: </label><br />
                                    <input type="password" name="pwd" id="pwd" placeholder="Enter Your Password: " onChange={this.changePassword}/><br />

                                    <button onClick={this.signupuser}>Signup Now <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                                </form>

                                <h2>Already have an account ..... <a href="/login">Login Now</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Signup
