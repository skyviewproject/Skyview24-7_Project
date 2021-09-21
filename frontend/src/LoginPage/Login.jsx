import React, { Component } from 'react'
import "../LoginPage/Style.css";
import SessionService from "../SessionManagement/SesssionService";
import Formbg from "../Images/formbg.jpg";
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
            infoSMS: 'No Error',
        }

        this.changeEmailId = this.changeEmailId.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.loginAndCreateSession = this.loginAndCreateSession.bind(this);
    }

    changeEmailId(event){this.setState({UserEmailid: event.target.value});}
    changePassword(event){this.setState({UserPassword: event.target.value});}

    loginAndCreateSession(event)
    {
        event.preventDefault();
        const userSession = new SessionService();
        const api = new LoginService();

        var username = this.state.UserEmailid;
        var password = this.state.UserPassword;
      


        api.loginService(username, password).then((res) => 
        {
            if(res.status == 200)
            {
                var token = res.data.access_token;
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
                        title: "Wait",
                        text: "Something Wrong Happened in the Backend",
                        icon: "error",
                      });
                })

                console.log(res.data.access_token);
            }
     

            else
            {
                swal({
                    title: "Login Failed!",
                    text: "Either Your Account is Disabled or You have entired Wrong Credentails",
                    icon: "error",
                  });
            }
        })
        .catch((error) =>
        {
            swal({
                title: "Login Failed!",
                text: "Either Your Account is Disabled or You have entired Wrong Credentails",
                icon: "error",
              });
        })
        


       

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
                                <img src={Formbg} alt="formbg" srcset="" />
                            </div>

                            <div class="inpthlder">
                                <form>
                                    <label for="uname">Username: </label><br />
                                    <input type="text" name="uname" id="uname" placeholder="Enter Your Emailid: " onChange={this.changeEmailId}/><br />

                                    <label for="pwd">Password: </label><br />
                                    <input type="password" name="pwd" id="pwd" placeholder="Enter Your Password: " onChange={this.changePassword}/><br />

                                    <button onClick={this.loginAndCreateSession}>Login Now <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                                </form>

                                <h2>Don't have any account ..... <a href="/signup">Signup Now</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Login