import React, { Component } from 'react'
import "../NavbarPart/Style.css";
import Logo from "../Images/logo.png";
import Crossicon from "../Images/menuclose.png";
import SessionService from "../SessionManagement/SesssionService";
import swal from 'sweetalert';

class NavBar extends Component 
{

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.closeNavbar = this.closeNavbar.bind(this);
        this.openNavbar = this.openNavbar.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    logOut()
    {
        swal({
            title: "LOGGING OUT",
            text: "Why.... Please stay and Keep Browsing",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willLogout) => {
            if (willLogout) {
                const api = new SessionService();
                api.logoutUserAndAndDestroySession();
                window.location.href = "/login"
            } else {
              swal("Thaks for Staing with Us");
            }
          });
        
    }

    closeNavbar(event)
    {
        var a = document.getElementsByTagName("nav");
        a[0].style.marginLeft = "-100%";
        a[0].style.transition = "all 500ms";
    }

    openNavbar(event)
    {
        
        var a = document.getElementsByTagName("nav");
        a[0].style.marginLeft = "0";
        a[0].style.transition = "all 500ms";
    }
    
    render() 
    {
        const userSession = new SessionService();

        if(userSession.getUserRole() == null)
        {
            return (
                <nav></nav>
            )
        }

        else
        {
            if(userSession.getUserRole() == "ROLE_RESIDENT")
            {
                return (
                    <nav>
                        <div class="lgoadcrshldr">
                            <img src={Crossicon} alt="crossicon" srcset="" id="cross" onClick={this.closeNavbar}/>
                            <img src={Logo} alt="logo" id="logo"/>
                        </div>
        
                        <ul>
                            <li><a href="/home"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
                            <li><a href="/addorupdatefamilymember"><i class="fa fa-female" aria-hidden="true"></i> My Family</a></li>
                            <li><a href="/addorupdatecar"><i class="fa fa-car" aria-hidden="true"></i> Vehicles</a></li>
                            <li><a href="/vieworaddhelpers"><i class="fa fa-phone-square" aria-hidden="true"></i> Daily Helps</a></li>
                            <li><a href="/addorviewmytickets"><i class="fa fa-ticket" aria-hidden="true"></i> Tickets</a></li>
                            <li><a href="/groupchat"><i class="fa fa-comments" aria-hidden="true"></i> Group Chat</a></li>
                            <li><a href="/myinvoices"><i class="fa fa-money" aria-hidden="true"></i> Invoices</a></li>
                            <li><a href="addorviewpaymethod"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Pay Method</a></li>
                            <li><a href="/myprofile"><i class="fa fa-user" aria-hidden="true"></i> My Profile</a></li>
                            <li><button onClick={this.logOut}>Logout Now <i class="fa fa-sign-out" aria-hidden="true"></i></button></li>
                        </ul>
                    </nav>
                )
            }

            else if(userSession.getUserRole() == "ROLE_ADMIN")
            {
                return (
                    <nav>
                        <div class="lgoadcrshldr">
                            <img src={Crossicon} alt="crossicon" srcset="" id="cross" onClick={this.closeNavbar}/>
                            <img src={Logo} alt="logo" id="logo"/>
                        </div>
        
                        <ul>
                            <li><a href="/home"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
                            <li><a href="/userlistforadmin"><i class="fa fa-list-alt" aria-hidden="true"></i> Userlist</a></li>
                            <li><a href="/addorviewinvoicesbyadmin"><i class="fa fa-money" aria-hidden="true"></i> Invoices</a></li>
                            <li><a href="/sendmailbyadmin"><i class="fa fa-envelope" aria-hidden="true"></i> Send Email</a></li>
                            <li><a href="/addorviewhelpsbyadmin"><i class="fa fa-phone-square" aria-hidden="true"></i> Daily Helps</a></li>
                            <li><a href="/verifypaymentbyadmin"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Payments</a></li>
                            <li><a href="/groupchat"><i class="fa fa-comments" aria-hidden="true"></i> Group Chat</a></li>
                            <li><a href="/myprofile"><i class="fa fa-user" aria-hidden="true"></i> My Profile</a></li>
                            <li><button onClick={this.logOut}>Logout Now <i class="fa fa-sign-out" aria-hidden="true"></i></button></li>
                        </ul>
                    </nav>
                )
            }

            else if(userSession.getUserRole() == "ROLE_SUPERVISIOR")
            {
                return (
                    <nav>
                        <div class="lgoadcrshldr">
                            <img src={Crossicon} alt="crossicon" srcset="" id="cross" onClick={this.closeNavbar}/>
                            <img src={Logo} alt="logo" id="logo"/>
                        </div>
        
                        <ul>
                            <li><a href="/home"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
                            <li><a href="/resolvetickets"><i class="fa fa-ticket" aria-hidden="true"></i> Tickets</a></li>
                            <li><a href="/groupchat"><i class="fa fa-comments" aria-hidden="true"></i> Group Chat</a></li>
                            <li><a href="/myprofile"><i class="fa fa-user" aria-hidden="true"></i> My Profile</a></li>
                            <li><button onClick={this.logOut}>Logout Now <i class="fa fa-sign-out" aria-hidden="true"></i></button></li>     
                        </ul>
                    </nav>
                )
            }

            else
            {
                return (
                    <nav></nav>
                )
            }
        }
    }
}

export default NavBar
