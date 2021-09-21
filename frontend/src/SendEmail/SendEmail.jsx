import React, { Component } from 'react'
import "../SendEmail/Style.css";
import Formbg from "../Images/formbg.jpg";
import backEnd from "./Service";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class SendEmail extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
            MailId: 'skyviewproject247@gmail.com',
            Header: '',
            MailBody: '',
        }

      this.changeMailId = this.changeMailId.bind(this);
      this.changeMailHeader = this.changeMailHeader.bind(this);
      this.changeMailBody = this.changeMailBody.bind(this);
      this.sendNotification = this.sendNotification.bind(this);
    }

    changeMailId(event){this.setState({MailId: event.target.value});}
    changeMailHeader(event){this.setState({Header: event.target.value});}
    changeMailBody(event){this.setState({MailBody: event.target.value});}

    
    sendNotification(event) 
    {
        event.preventDefault();

        let mailData = {
            "mailAddress": this.state.MailId,
            "mailHeader": this.state.Header,
            "mailBody": this.state.MailBody
        }
        

        const api = new backEnd();
        api.sendMail(mailData).then((res) =>
        {
            console.log(res.status);
           
             if(res.status == 200)
            {
                swal("Done!", "Mail Has Been sended to the Resident!", "success");
                window.location.href = "/home";
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
                    <div class="wrappersendmailform">
                        
                        <div class="containerform">
                            <div class="formholder">
                                <div class="imghlder">
                                    <img src={Formbg} alt="formbg" srcset="" />
                                </div>

                                <div class="inpthlder">
                                    <form>
                                        <label for="emailid"> Recipant Email: </label><br />
                                        <input type="email" name="emailid" id="emailid" placeholder="Enter Recipant Emailid: " onChange={this.changeMailId} value={this.state.MailId}/><br />

                                        <label for="emlher">Mail Subject: </label><br />
                                        <input type="text" name="emlhero" id="emlher" placeholder="Enter The Subject of your Email: " onChange={this.changeMailHeader}/><br />

                                        <label for="job">Mail Body: </label><br />
                                        <input type="text" name="job" id="job" placeholder="Enter Mail subject " onChange={this.changeMailBody}/><br />

                                        <button onClick={this.sendNotification}>Send Email <i class="fa fa-share-square" aria-hidden="true"></i></button>
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

export default SendEmail
