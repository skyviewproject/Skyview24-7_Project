import React, { Component } from 'react';
import "../UpdateCar/Style.css";
import Formbg from "../Images/formbg.jpg";
import backEnd from "./Service";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class UpdateCarPage extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
            carBrand: '',
            carNo: 0,
            carType: '4 Wheeler',
            carId:this.props.match.params.id
        }
        this.changeCarbrand=this.changeCarbrand.bind(this);
        this.changeCarNo=this.changeCarNo.bind(this);
        this.changeCartype=this.changeCartype.bind(this);
        this.Updatecar=this.Updatecar.bind(this);
       
    }
    componentDidMount()
    {

        const api = new backEnd();
        api.getMyCardetails(this.state.carId).then((res) =>
        {
            this.setState(
                {
                    carBrand: res.data.carBrand, 
                    carNo:  res.data.carNo,
                    carType: res.data.carType 
                }
            );
        })
    }
    changeCarbrand(event){this.setState({carBrand: event.target.value});}
    changeCarNo(event){this.setState({carNo: event.target.value});}
    changeCartype(event){this.setState({carType: event.target.value});}

    Updatecar(event){
        event.preventDefault();
      
    var userSession = new SesssionService();
        
        var uid=userSession.getUserId();
  
        
        let updatecar = {
           
                "userId": uid,
                "carNo": this.state.carNo,
                "carBrand":this.state.carBrand ,
                "carType": this.state.carType
        }

        const api = new backEnd();
        if(this.state.carBrand == ''|| this.state.carNo == ''||this.state.carType=='')
        {
            swal({
                title: "Wait",
                text: "All Fields are mandatory Please fill all the fields",
                icon: "warning",
              })
        }
        else{

        swal({
            title: "Are you sure?",
            text: `${ JSON.stringify(updatecar)}`,
            icon: "warning",
            buttons: true,
          })
          .then((update) => {
            if (update) 
            {
                const api = new backEnd();
                api.updateMyCarDetails(this.state.carId, updatecar).then((res) =>
                {
                    console.log(res.status);
                    if(res.status == 200)
                    {
                        swal("Car Updated Successfully!", {
                            icon: "success",
                          });
                          
                        window.location.href = "/mycarlist";
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
                    <div class="wrapperUpdatecar">
                         <h2><i class="fa fa-file-text" aria-hidden="true"></i> Update Your Vehicle Details</h2>
                        
                        
                        <div class="containerform">
                            <div class="formholder">
                                <div class="imghlder">
                                    <img src={Formbg} alt="formbg" srcset="" />
                                </div>
        
                                <div class="inpthlder">
                                <form>
                                        <label for="crbrnd">Car Brand: </label><br />
                                        <input type="text" name="crbrnd" id="crbrnd" placeholder="Enter Your Car Brand. " value={this.state.carBrand}onChange={this.changeCarbrand}/><br />
        
                                        <label for="crno">Car Number: </label><br />
                                        <input type="text" name="crno" id="crno" placeholder="Enter Your Car No. " value={this.state.carNo} onChange={this.changeCarNo}/><br />
        
                                        <label for="crtyp">Car Type: </label><br />
                                        <select name="crtyp" id="crtyp" value={this.state.carType} onChange={this.changeCartype}>
                                            <option value="4 Wheeler">4 Wheeler</option>
                                            <option value="3 Wheeler">3 Wheeler</option>
                                            <option value="2 Wheeler">2 Wheeler</option>
                                        </select><br />
                                        <button onClick={this.Updatecar}>Update Cardetails <i class="fa fa-plus" aria-hidden="true"></i></button>
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

export default UpdateCarPage
