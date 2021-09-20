import React, { Component } from 'react'
import "../MakePayment/Style.css";
import Payment from "../Images/payment.png";
import Methods from "../Images/methods.png";
import backEnd from "./service";
import swal from 'sweetalert';
import SesssionService from '../SessionManagement/SesssionService';
import ProfileService from "../ProfilePage/Service";
import jsPDF from 'jspdf';
import logo from "../Images/logo.png";

class PaymentPage extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
            payId: this.props.match.params.iId,
            MethodName: '',
            MethodDetails: '',
            Amount: 0,
            Recipant: '',
            flag: false,
            Profile: []
        }

        this.changeMethodname = this.changeMethodname.bind(this);
        this.changeMethoddetails = this.changeMethoddetails.bind(this);
        this.changePayAmount = this.changePayAmount.bind(this);
        this.changeRecipantdata = this.changeRecipantdata.bind(this);
        this.verifyPaymentByUser = this.verifyPaymentByUser.bind(this);
        this.makePaymentByUser = this.makePaymentByUser.bind(this);
        this.getRecipt = this.getRecipt.bind(this);
    }

    changeMethodname(event){this.setState({MethodName: event.target.value});}
    changeMethoddetails(event){this.setState({MethodDetails: event.target.value});}
    changePayAmount(event){this.setState({Amount: event.target.value});}
    changeRecipantdata(event){this.setState({Recipant: event.target.value});}

    componentDidMount()
    {
        const api = new ProfileService();
        const userSession = new SesssionService();
        const id = userSession.getUserId();
        api.viewMyProfile(id).then((res) =>
        {
            this.setState(
                {
                    Profile: res.data,
                }
            );        
        });
    }

    getRecipt()
    {
        var currentdate = new Date(); var datetime = 
            currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds()
            + " "
            + currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() ;

            var text = 
                "SKYVIEW24*7 Pay_Slip" + "\n" +
                "Resident Name:" +  this.state.Profile.fullName + "\n" +
                "Resident Flatno:" +  this.state.Profile.userFlatNo + "\n" +
                "Recipant Details:" + this.state.Recipant + "\n" +
                "Paid Amount:" +  this.state.Amount + "\n" +
                "Payment Method:" +  this.state.MethodName + "\n" +
                "Payment Time:" +  datetime
            
           
            var doc = new jsPDF("p", "pt", "a4");
            doc.addImage(logo, "PNG", 50, 40, 100, 100);
            doc.text(text, 50, 200);
            doc.setFontSize(25);
            doc.setLineHeightFactor(8);
            doc.setFont("Times New Roman");
            doc.save("recipt.pdf");

            window.location.href = "/myinvoices";
            
    }

    verifyPaymentByUser(event)
    {
        const api = new backEnd();
        event.preventDefault();

        var method = {
            "userId": new SesssionService().getUserId(),
            "methodName": this.state.MethodName,
            "methodDetails": this.state.MethodDetails
        }

        console.log(method);

        api.verifyPaymentMethod(method).then((res) =>
        {
            if(res.data != true)
            {
                swal({
                    title: "Wrong Data!",
                    text: "You have entered the Wrong Payment Method Credentials",
                    icon: "warning",
                  });
            }

            else
            {
                
                var a = document.querySelector(".wrappermakepaymentform .formsholderpart .paymentholder .makepayment");
                var b = document.querySelector(".wrappermakepaymentform .formsholderpart .paymentholder .verifypaymentmethod");
        
                a.style.display = "block";
                a.style.pointerEvents = "all";
                a.style.transition = "all 500ms";
        
                b.style.display = "none";
                b.style.pointerEvents = "none";
                b.style.transition = "all 500ms";

                this.setState({flag: true});
                
            }
        }).catch((error) =>
        {
            swal({
                title: "Error",
                text: `${error}`,
                icon: "warning",
            });
        });

        
    }

    makePaymentByUser(event)
    {
        const api = new backEnd();
        event.preventDefault();

        api.sendOTP().catch((error) =>
        {
            swal({
                title: "Error",
                text: `${error}`,
                icon: "warning",
            });
        })

        swal("Enter the OTP sended to your Emailid:", {
            content: "input",
          })
          .then((value) => 
          {
            var otp = {
                "userId": new SesssionService().getUserId(),
                "otpValue": value
            }

            api.verifyOTP(otp).then((res) => 
            {
                if(res.data == true)
                {
                    var pay = {
                        "processUserId": parseInt(new SesssionService().getUserId()),
                        "invoiceId": this.state.payId,
                        "processPayMethod": this.state.MethodName,
                        "processMethodDetails": this.state.MethodDetails,
                        "processTotalAmount": this.state.Amount,
                        "processRecipantDetails": this.state.Recipant
                    }

                    api.makePaymentforInvoice(pay).then((res) =>
                    {
                        if(res.data === "Payment has been done Successfully, just wait for Sometime to be Verified by the Admin Panel")
                        {
                            var currentdate = new Date(); 
                            var datetime = 
                            currentdate.getHours() + ":"  
                            + currentdate.getMinutes() + ":" 
                            + " "
                            + currentdate.getDate() + "/"
                            + (currentdate.getMonth()+1)  + "/" 
                            + currentdate.getFullYear() ;

                            swal({
                                title: "SUCCESSFULL",
                                text: "Your Payment is Completed",
                                icon: "success",
                                button: {
                                    text: "Download Recipt",
                                  },
                              }).then((getReciptText) => 
                              {
                                if (getReciptText) 
                                {
                                  this.getRecipt();
                                }
                              });
                        }

                        else if(res.data === "Payment not done. Please Check the Credentials you have entered")
                        {
                            swal({
                                title: "Wrong Data!",
                                text: "You have entered the Wrong Payment Method Credentials",
                                icon: "warning",
                              });
                        }

                        else
                        {
                            swal({
                                title: "Payment Failed",
                                text: "Something went Wrong",
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
                        title: "Wrong Data!",
                        text: "You have entered the Wrong OTP! TRY AGAIN ",
                        icon: "warning",
                      });
                }
            })
            
          })
          .catch((error) =>
            {
                swal({
                    title: "Error",
                    text: `${error}`,
                    icon: "warning",
                    });
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
                    <div class="wrappermakepaymentform" id="paymentformbody">
                        
                        <div class="formsholderpart">

                            <div class="imgholder">
                                <img src={Payment} alt="pautm logo" id="pytmlgo" />
                                <img src={Methods} alt="payment methods" id="paymthds" />
                            </div>
                            
                            <div class="paymentholder">
                                <div class="verifypaymentmethod">

                                    <form>
                                        <label for="pymtd">Payment Method: </label><br />
                                        <select name="pymtd" id="pymtd" onChange={this.changeMethodname}>
                                            <option value="DEBIT CARD">Debit Card</option>
                                            <option value="CREDIT CARD">Credit Card</option>
                                            <option value="NET BANKING">Net Banking</option>
                                            <option value="UPI PAYMENT">UPI Payment</option>
                                        </select><br />

                                        <label for="crdt">Payment Details: </label><br />
                                        <input type="text" name="crdt" id="crdt" onChange={this.changeMethoddetails}/><br />

                                        <button onClick={this.verifyPaymentByUser}>Verify Paymethod</button>
                                    </form>
                                </div>

                                <div class="makepayment">

                                    <form >
                                        <label for="rcpt">Recipant Details: </label><br />
                                        <input type="text" name="rcpt" id="rcpt" onChange={this.changeRecipantdata}/><br />

                                        <label for="amnt">Total Amount: </label><br />
                                        <input type="text" name="amnt" id="amnt" onChange={this.changePayAmount}/><br />

                                        <label for="meth">Payment Method: </label><br />
                                        <input type="text" name="meth" id="meth" disabled value={this.state.MethodName}/><br />

                                        <label for="dtls">Payment Details: </label><br />
                                        <input type="text" name="dtls" id="dtls" disabled value={this.state.MethodDetails}/><br />

                                        <button onClick={this.makePaymentByUser}>Send OTP & Proceed</button>
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

export default PaymentPage
