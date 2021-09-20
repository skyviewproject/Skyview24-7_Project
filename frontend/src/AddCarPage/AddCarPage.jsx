import React, { Component } from 'react';
import "../AddCarPage/Style.css";
import Formbg from "../Images/formbg.jpg";
import backEnd from "./Service";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class AddCarPage extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
            carBrand: '',
            carNo: 0,
            carType: '4 Wheeler'
             
        }
        this.changeCarbrand=this.changeCarbrand.bind(this);
        this.changeCarNo=this.changeCarNo.bind(this);
        this.changeCartype=this.changeCartype.bind(this);
        this.addNewCar=this.addNewCar.bind(this);
       
    }

    changeCarbrand(event){this.setState({carBrand: event.target.value})}
    changeCarNo(event){this.setState({carNo: event.target.value});}
    changeCartype(event){this.setState({carType: event.target.value});}
    
    addNewCar(event)
    {
        event.preventDefault();
        var userSession = new SesssionService();
            
            var uid=userSession.getUserId();
    

        let cardata={
            'userId':uid,
            'carNo': this.state.carNo,
            'carBrand':this.state.carBrand,
            'carType':this.state.carType
        }

        swal({
            title: "Are you sure?",
            text: `${ JSON.stringify(cardata)}`,
            icon: "warning",
            buttons: true,
          })
          .then((create) => {
            if (create) 
            {
                const api = new backEnd();
                api.registerNewCAR(cardata).then((res) =>
                {
                    if(res.status == 200)
                    {
                        if(res.data === "Max 3 vehicles are Allowed and you have already resistered 3 vehicle details")
                        {
                            swal({
                                title: "STOP",
                                text: "You are not Allowed to add more than 3 Vehicles",
                                icon: "error",
                              })
                        }

                        else
                        {
                            swal("New Car added Successfully!", {
                                icon: "success",
                              });
                              
                            window.location.href = "/mycarlist";
                        }
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
              swal("Adding Car Aborted!");
            }
          });
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
                    <div class="wrapperaddcarform">
                        <h2><i class="fa fa-file-text" aria-hidden="true"></i> Add Your Car Details</h2>
                        
                        <div class="containerform">
                            <div class="formholder">
                                <div class="imghlder">
                                    <img src={Formbg} alt="formbg" srcset="" />
                                </div>
        
                                <div class="inpthlder">
                                    <form>
                                        <label for="crbrnd">Car Brand: </label><br />
                                        <input type="text" name="crbrnd" id="crbrnd" placeholder="Enter Your Car Brand. "onChange={this.changeCarbrand}/><br />
        
                                        <label for="crno">Car Number: </label><br />
                                        <input type="text" name="crno" id="crno" placeholder="Enter Your Car No. "onChange={this.changeCarNo}/><br />
        
                                        <label for="crtyp">Car Type: </label><br />
                                        <select name="crtyp" id="crtyp" onChange={this.changeCartype}>
                                            <option value="4 Wheeler">4 Wheeler</option>
                                            <option value="3 Wheeler">3 Wheeler</option>
                                            <option value="2 Wheeler">2 Wheeler</option>
                                        </select><br />
                                        <button  onClick={this.addNewCar}>Add Cardetails <i class="fa fa-plus" aria-hidden="true"></i></button>
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

export default AddCarPage
