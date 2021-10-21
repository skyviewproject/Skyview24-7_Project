import React, { Component } from 'react';
import "../AddFamily/Style.css";
import Formbg from "../Images/formbg.jpg";
import backEnd from "./Service";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class AddFamilyPage extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {

            memberName:'',
            memberAge:0,
            emailId:'',
            mobileNo:0,
            relation:''
             
        }
            this.changemembername=this.changemembername.bind(this);
            this.changememberage=this.changememberage.bind(this);
            this.changeemailid=this.changeemailid.bind(this);
            this.changemobileno=this.changemobileno.bind(this);
            this.changerelation=this.changerelation.bind(this);
            this.addNewMember=this.addNewMember.bind(this);

    }
    changemembername(event){this.setState({memberName: event.target.value});}
    changememberage(event){this.setState({memberAge: event.target.value});}
    changeemailid(event){this.setState({emailId: event.target.value});}
    changemobileno(event){this.setState({mobileNo: event.target.value});}
    changerelation(event){this.setState({relation: event.target.value});}
    

    addNewMember(event)
    {
        event.preventDefault();
        var userSession = new SesssionService();
            
            var uid=userSession.getUserId();
      
    
        let memberdata={
            'ownerId':uid,
            'memberName':this.state.memberName,
            'memberAge':this.state.memberAge,
            'emailId':this.state.emailId,
            'mobileNo':this.state.mobileNo,
            'relation':this.state.relation

        }
        var regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(this.state.memberName == ''||this.state.memberAge == ''||this.state.emailId == ''
        ||this.state.mobileNo == ''|| this.state.relation =='')
        {
            swal({
                title: "Wait",
                text: "All Fields are mandatory Please fill all the fields",
                icon: "warning",
              })
        }
        else if(regexEmail.test(this.state.emailId) == false)
        {
            swal({
                title: "Wait",
                text: "Emailid is not in proper format",
                icon: "warning",
              })
        }
        else if(this.state.mobileNo.toString().length != 10)
        {
            swal({
                title: "Wait",
                text: "Mobile No must be 10 Digits",
                icon: "warning",
              })
        }

        else if(this.state.memberAge <1 || this.state.memberAge > 100)
        {
            swal({
                title: "Wait",
                text: "Age must be within 1 to 100",
                icon: "warning",
              })
        }
        else
        {
        swal({
            title: "Are you sure?",
            text: `${ JSON.stringify(memberdata)}`,
            icon: "warning",
            buttons: true,
          })
          .then((create) => {
            if (create) 
            {
                const api = new backEnd();
                api.registerNewFamily(memberdata).then((res) =>
                {
                    console.log(res.status);
                    if(res.status == 200)
                    {
                        swal("New Family added Successfully!", {
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
              swal("Adding Member Aborted!");
            }
          });
        }
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
                    <div class="wrapperaddfamily">
                        <h2><i class="fa fa-file-text" aria-hidden="true"></i> Add Your Family Details</h2>
                        
                        <div class="containerform">
                            <div class="formholder">
                                
        
                                <div class="inpthlder">
                                    <form>
                                        
                                        <label for="membername">Member Name: </label><br />
                                        <input type="text" name="membername" id="Membername" placeholder="Enter Member name  " onChange={this.changemembername}/><br />
        
                                        <label for="memberemail">Member email: </label><br />
                                        <input type="email" name="memberemail" id="memberemail" placeholder="Enter Member Email " onChange={this.changeemailid}/><br />
        
                                        <label for="membercontact">Member contact: </label><br />
                                        <input type="text" name="membercontact" id="membercontact" placeholder="Enter member contact " onChange={this.changemobileno}/><br />
        
                                        <label for="memberrelation">Member Relation: </label><br />
                                        <input type="text" name="memberrelation" id="memberrelation" placeholder="Enter member Relation " onChange={this.changerelation}/><br />
                                        
                                        <label for="memberage">Member Age: </label><br />
                                        <input type="number" name="memberage" id="memberage" placeholder="Enter member age  " onChange={this.changememberage}/><br />
        
                                        
                                        <button onClick={this.addNewMember}>Add Familydetails <i class="fa fa-plus" aria-hidden="true"></i></button>
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

export default AddFamilyPage
