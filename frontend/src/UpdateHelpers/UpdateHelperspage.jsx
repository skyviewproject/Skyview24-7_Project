import React, { Component } from 'react'
import backEnd from "./Service";
import Formbg from "../Images/formbg.jpg";
import "../UpdateHelpers/Style.css";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class UpdateHelperspage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            hId: this.props.match.params.id,
            Fullname: '',
            MobileNo: '',
            HelpAge: 0,
            HelpType: '',
            Gender: '',
        }

        this.changeFullname = this.changeFullname.bind(this);
        this.changeMobileno = this.changeMobileno.bind(this);
        this.changeHelpGender = this.changeHelpGender.bind(this);
        this.changeHelpAge = this.changeHelpAge.bind(this);
        this.changeHelptype = this.changeHelptype.bind(this);
        this.updateHelp = this.updateHelp.bind(this);

    }

    componentDidMount()
    {
        const api = new backEnd();
        api.getHelpersDetails(this.state.hId).then((res) =>
        {
            this.setState(
                {
                    Fullname: res.data.helpName,
                    MobileNo: res.data.helpContact,
                    HelpAge: res.data.helpAge,
                    HelpType: res.data.helpType,
                    Gender: res.data.helpGender,
                }
            )
        })
        .catch((error) =>
        {
            console.log(error);
        })
    }

    changeFullname(event){this.setState({Fullname: event.target.value});}
    changeMobileno(event){this.setState({MobileNo: event.target.value});}
    changeHelpAge(event){this.setState({HelpAge: event.target.value});}
    changeHelpGender(event){this.setState({Gender: event.target.value});}
    changeHelptype(event){this.setState({HelpType: event.target.value});}

    
    updateHelp(event) 
    {
        event.preventDefault();

        let helpData = {
            "helpName": this.state.Fullname,
            "helpContact": this.state.MobileNo,
            "helpAge": this.state.HelpAge,
            "helpGender": this.state.Gender,
            "helpType": this.state.HelpType
        }
        if(this.state.Fullname ==''||this.state.MobileNo==''||this.state.HelpAge==''
      ||this.state.HelpType=='')
       {
        swal({
            title: "Wait",
            text: "All Fields are mandatory Please fill all the fields",
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

       else if(this.state.HelpAge <1 || this.state.HelpAge > 100)
       {
           swal({
               title: "Wait",
               text: "Age must be within 1 to 100",
               icon: "warning",
             })
       }

        else{

        
        swal({
            title: "Are you sure?",
            text: `${ JSON.stringify(helpData)}`,
            icon: "warning",
            buttons: true,
          })
          .then((create) => {
            if (create) 
            {
                const api = new backEnd();
                api.updateHelperDetails(this.state.hId, helpData).then((res) =>
                {
                    console.log(res.status);
                    if(res.status == 200)
                    {
                        swal("Car updated Successfully!", {
                            icon: "success",
                          });
                          
                        window.location.href = "/allhelpsforadmin";
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
              swal("Car Updated Aborted!");
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
            if(user.getUserRole() !== "ROLE_ADMIN")
            {
                window.location.href = "/forbidden"
            }

            else
            {
                return (
                    <div class="wrapperupdatehelperform">
                        <h2><i class="fa fa-file-text" aria-hidden="true"></i> Update Help Details</h2>
                        <div class="containerform">
                            <div class="formholder">
                                <div class="imghlder">
                                    <img src={Formbg} alt="formbg" srcset="" />
                                </div>

                                <div class="inpthlder">
                                    <form>
                                        <label for="uname">Help Name: </label><br />
                                        <input type="text" name="uname" id="uname" value={this.state.Fullname} onChange={this.changeFullname}/><br />

                                        <label for="mblno">Help Contact: </label><br />
                                        <input type="text" name="mblno" id="mblno" value={this.state.MobileNo} onChange={this.changeMobileno}/><br />

                                        <label for="age">Help Age: </label><br />
                                        <input type="number" name="age" id="age" value={this.state.HelpAge} min="1" max="100" onChange={this.changeHelpAge}/><br />

                                        <label for="type">Help Type: </label><br />
                                        <input type="text" name="type" id="type" value={this.state.HelpType} onChange={this.changeHelptype}/><br />

                                        <label for="gndr">Gender: </label><br />
                                        <select name="gndr" id="gndr" onChange={this.changeHelpGender} value={this.state.Gender}>
                                            <option value="Male">MALE</option>
                                            <option value="Female">FEMALE</option>
                                            <option value="Other">OTHER</option>
                                        </select><br />

                                    <button onClick={this.updateHelp}>Update Help <i class="fa fa-pencil" aria-hidden="true"></i></button>
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

export default UpdateHelperspage
