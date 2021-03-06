import React, { Component } from 'react'
import "../UpdateFamily/Style.css";
import Formbg from "../Images/formbg.jpg";
import backEnd from "./Service";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class UpdateFamilyPage extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {

            memberName:'',
            memberAge:0,
            emailId:'',
            mobileNo:0,
            relation:'',
            id:this.props.match.params.id
             
        }
            this.changemembername=this.changemembername.bind(this);
            this.changememberage=this.changememberage.bind(this);
            this.changeemailid=this.changeemailid.bind(this);
            this.changemobileno=this.changemobileno.bind(this);
            this.changerelation=this.changerelation.bind(this);
            this.Updatemember=this.Updatemember.bind(this);
    }

    componentDidMount()
    {

        const api = new backEnd();
        api.getFamilyDetails(this.state.id).then((res) =>
        {
            if(res.data.ownerId == 0)
            {
                window.location.href = "/unauthorized";
            }

            else
            {
                this.setState(
                    {
                        memberName: res.data.memberName,
                        memberAge: res.data.memberAge,
                        emailId: res.data.emailId,
                        mobileNo: res.data.mobileNo,
                        relation: res.data.relation,
                    }
                );
            }
        })
    }
    changemembername(event){this.setState({memberName: event.target.value});}
    changememberage(event){this.setState({memberAge: event.target.value});}
    changeemailid(event){this.setState({emailId: event.target.value});}
    changemobileno(event){this.setState({mobileNo: event.target.value});}
    changerelation(event){this.setState({relation: event.target.value});}
    
    Updatemember(event){
        event.preventDefault();
      
    var userSession = new SesssionService();
        
        var uid=userSession.getUserId();
  
        
        let Updatemember = {
           
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
            text: `${ JSON.stringify(Updatemember)}`,
            icon: "warning",
            buttons: true,
          })
          .then((update) => {
            if (update) 
            {
                const api = new backEnd();
                api.updateMyFamilyDetails(this.state.id, Updatemember).then((res) =>
                {
                    console.log(res.status);
                    if(res.data == "Family Members details has been Updated Successfully")
                    {
                        swal("New Family added Successfully!", {
                            icon: "success",
                          });
                          
                        //window.location.href = "/myfamilymembers";
                    }

                    else if(res.data == "Not Allowed")
                    {
                        swal({
                            title: "Error",
                            text: "Don't Try To Do This Again",
                            icon: "error",
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
            } else {
              swal("Updating Member Aborted!");
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
            <div class="wrapperUpdateFamily">
                 <h2><i class="fa fa-file-text" aria-hidden="true"></i> Update Your Family Details</h2>
                
                
                <div class="containerform">
                    <div class="formholder">
                        

                        <div class="inpthlder">
                        <form>
                                
                                <label for="membername">Member Name: </label><br />
                                <input type="text" name="membername" id="Membername" placeholder="Enter Member name  " value={this.state.memberName}  onChange={this.changemembername}/><br />

                                <label for="memberemail">Member email: </label><br />
                                <input type="text" name="memberemail" id="memberemail" placeholder="Enter Member Email "value={this.state.emailId} onChange={this.changeemailid}/><br />

                                <label for="membercontact">Member contact: </label><br />
                                <input type="text" name="membercontact" id="membercontact" placeholder="Enter member contact " value={this.state.mobileNo}  onChange={this.changemobileno}/><br />

                                <label for="memberrelation">Member Relation: </label><br />
                                <input type="text" name="memberrelation" id="memberrelation" placeholder="Enter member Relation "value={this.state.relation} onChange={this.changerelation}/><br />
                                
                                <label for="memberage">Member Age: </label><br />
                                <input type="text" name="memberage" id="memberage" placeholder="Enter member age  " value={this.state.memberAge}  onChange={this.changememberage}/><br />

                                
                               <button onClick={this.Updatemember}>Update Familydetails <i class="fa fa-plus" aria-hidden="true"></i></button>
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

export default UpdateFamilyPage
