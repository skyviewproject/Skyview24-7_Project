import React, { Component } from 'react'
import SesssionService from '../SessionManagement/SesssionService';
import backendService from "./service";
import "../ViewMyCars/Style.css";
import swal from 'sweetalert';

class MycarsPage extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             MyCarsList:[]
        }
        this.deletemyCar=this.deletemyCar.bind(this);
    }

    componentDidMount()
    {
        const api = new backendService();
        api.getMyAllCars().then((res) => 
        {
            this.setState(
                {
                   MyCarsList:res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })
    
    }

    deletemyCar(carId){
        swal({
            title: "Are you sure?",
            text: "Data will be deleted Permanently",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((deleted) => {
            if (deleted) 
            {
                const api = new backendService();
                api.removeMyCar(carId).then((res) =>
                {
                    console.log(res.status);
                    if(res.status == 200)
                    {
                        swal("Car Deleted Successfully!", {
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
              swal("Adding Member Aborted!");
            }
          });

    }

    render() {
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
                    <div class="wrappermycarList">
                        <h2><i class="fa fa-list" aria-hidden="true"></i> My Cars </h2>
                        <div class="listholder">
                            <table>
                                <thead>
                                    <tr>
                                        <th> car Id </th>
                                        <th>Car Brand</th>
                                        <th>Car Number</th>                               
                                        <th>Car Type</th>
                                        <th>Update </th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                {
                                        this.state.MyCarsList.map(car=>
                                        <tr>
                                            <td>{car.carId}</td>
                                            <td>{car.carBrand}</td>
                                            <td>{car.carNo}</td>
                                            <td>  {car.carType}  </td>
                                
                                        <td> <a href={"/updatecar/"+car.carId}><button id="vewbtn">View/Update <i class="fa fa-eye" aria-hidden="true"></i></button></a></td>
                                            <td><button id="dltbtn" onClick={()=>this.deletemyCar(car.carId)}>Remove Car <i class="fa fa-trash" aria-hidden="true" ></i></button></td>
                                        </tr>
                                        )

                                    }
                
                                </tbody>
                            
                            </table>
        
                        </div>
                    </div>
                )
            }
        }
    }
}

export default MycarsPage
