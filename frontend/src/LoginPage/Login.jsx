import React, { Component } from 'react'
import "../LoginPage/Style.css";
import SessionService from "../SessionManagement/SesssionService";
import Avater from "../Images/login.png";
import LoginService from "./Service";
import swal from 'sweetalert';

class Login extends Component 
{
    constructor(props) {
        super(props)

        this.state = 
        {
            UserEmailid: '',
            UserPassword: '',
            NewPassword: '',
            RePassword: ''
        }

        this.changeEmailId = this.changeEmailId.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeNewPassword = this.changeNewPassword.bind(this);
        this.changeRePassword = this.changeRePassword.bind(this);
        this.loginAndCreateSession = this.loginAndCreateSession.bind(this);
        this.changeAndResetPassword = this.changeAndResetPassword.bind(this);
    }

    changeEmailId(event){this.setState({UserEmailid: event.target.value});}
    changePassword(event){this.setState({UserPassword: event.target.value});}
    changeNewPassword(event){this.setState({NewPassword: event.target.value});}
    changeRePassword(event){this.setState({RePassword: event.target.value});}

    loginAndCreateSession(event)
    {
        event.preventDefault();
        const userSession = new SessionService();
        const api = new LoginService();

        var username = this.state.UserEmailid;
        var password = this.state.UserPassword;
      


        api.loginService(username, password).then((res) => 
        {
            if(res.data.isAuthenticated === true)
            {
                var token = res.data.bearerToken;
                userSession.loginUserAndAndCreateSession(null, null, token);

                api.getUserdataAfterLogin(this.state.UserEmailid).then((res) =>
                {
                    var a = res.data.split(",");
                    userSession.loginUserAndAndCreateSession(parseInt(a[0]), a[1], token);
                    console.log(a[0],a[1],token);

                    window.location.href = "/home";
                })
                .catch((error) =>
                {
                    swal({
                        title: "Error",
                        text: `${error}`,
                        icon: "error",
                      });
                })
                
            }
     

            else
            {
                var error = JSON.stringify(res.data.errorMessage);
                swal({
                    title: "Wait",
                    text: `${error}`,
                    icon: "warning",
                  });
            }
        })
        .catch((error) =>
        {
            swal({
                title: "Error",
                text: `${error}`,
                icon: "error",
              });
        })
        
    }

    changeAndResetPassword()
    {
        const api = new LoginService();
        swal("Enter your Emailid:", {
            content: "input",
            buttons: true,
          })
          .then((value) => 
          {
            if(value)
            {

                this.setState({UserEmailid: value});

                api.checkIfuserisPresent(this.state.UserEmailid).then((res) =>
                {
                    if(res.data == true)
                    {
                        api.sendOTP(this.state.UserEmailid).catch((error) =>
                        {
                            swal({
                                title: "Error",
                                text: `${error}`,
                                icon: "warning",
                            });
                        });
    
                        swal("Enter the OTP sended to your Emailid:", {
                            content: "input",
                        })
                        .then((value) => 
                        {
                                var otp = {
                                    "otpValue": value
                                };
                        
                            api.verifyOTP(this.state.UserEmailid, otp).then((res) => 
                            {
                                if(res.data == true)
                                {
                                    swal("Enter Your New Password:", {
                                        content: "input",
                                        buttons: true,
                                        })
                                        .then((value1) => 
                                        {
                                            this.setState({NewPassword: value1})
                                            if(this.state.NewPassword.length < 5)
                                            {
                                                swal({
                                                    title: "Wait!",
                                                    text: "Your Password legth must be minimum 5 ",
                                                    icon: "warning",
                                                    buttons: true,
                                                    }
                                                );
                                            }
        
                                            else
                                            {
                                                swal("Confirm Your Password:", {
                                                    content: "input",
                                                    })
                                                    .then((value2) => 
                                                    {
                                                    this.setState({RePassword: value2})
        
                                                    if(this.state.NewPassword === this.state.RePassword)
                                                    {
                                                        var uname = this.state.UserEmailid;
                                                        var psw = this.state.NewPassword;
        
                                                        api.resetPassword(uname, psw).then((res) =>
                                                        {
                                                            if(res.data === "Password Updated Successfully")
                                                            {
                                                                swal({
                                                                    title: "Completed!",
                                                                    text: "Password Updated Successfully.. Login Now",
                                                                    icon: "success",
                                                                });

                                                                this.setState(
                                                                    {
                                                                        NewPassword: '',
                                                                        RePassword: ''
                                                                    }
                                                                );

                                                                window.location.href = "/login"
        
                                                            }
                                                        })
                                                        .catch((error) =>
                                                        {
                                                            swal({
                                                                title: "Error",
                                                                text: `${error}`,
                                                                icon: "warning",
                                                                }
                                                            );
                                                        });
                                                    }
        
                                                    else
                                                    {
                                                        swal({
                                                            title: "Wait!",
                                                            text: "Your Password does not Match ! TRY AGAIN",
                                                            icon: "error",
                                                            }
                                                        );
                                                    }
                                                });
                                            }
                                        }
                                    );
                                }

                                else
                                {
                                    swal({
                                        title: "Wrong Data!",
                                        text: "You have entered the Wrong OTP! TRY AGAIN ",
                                        icon: "warning",
                                      });
                                }
                            })
                            .catch((error) =>
                            {
                                swal({
                                    title: "Error",
                                    text: `${error}`,
                                    icon: "warning",
                                });
                            });

                        });
                    }   

                    else
                    {
                        swal({
                            title: "Wait",
                            text:"Emailid does not Exists in our Database. Please Check",
                            icon: "warning",
                        });
                    }
                })
                .catch((error) =>
                {
                    swal({
                        title: "Error",
                        text: `${error}`,
                        icon: "warning",
                    });
                })
            }

            else
            {
                swal({
                    title: "Wait!",
                    text: "Email is Null, thus Aborting Reset",
                    icon: "warning",
                  });
            }
        });

        this.setState(
            {
                NewPassword: '',
                RePassword: ''
            }
        );
       
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
                <div class="wrapperloginform">
                    
                    <div class="containerform">
                        <div class="formholder">
                            <div class="imghlder">
                                <img src={Avater} alt="formbg" srcset="" />
                            </div>

                            <div class="inpthlder">
                                <form>
                                    <label for="uname"><i class="fa fa-user" aria-hidden="true"></i> Username: </label><br />
                                    <input type="text" name="uname" id="uname" placeholder="Enter Your Emailid: " onChange={this.changeEmailId}/><br />

                                    <label for="pwd"><i class="fa fa-lock" aria-hidden="true"></i> Password: </label><br />
                                    <input type="password" name="pwd" id="pwd" placeholder="Enter Your Password: " onChange={this.changePassword}/><br />

                                    <button onClick={this.loginAndCreateSession}>Login Now <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                                </form>

                                <div class="linkhold">

                                    <div class="subdiv1">
                                        <input type="checkbox" name="rmrme" id="rmrme" class="chkbx" checked/>
                                        <label for="rmrme"> Remember Me</label>
                                        <h3 onClick={this.changeAndResetPassword}>Forget Password</h3>
                                    </div>

                                    <div class="subdiv2">
                                        <h2>New to Us.. <a href="/signup">Signup Now</a></h2>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Login