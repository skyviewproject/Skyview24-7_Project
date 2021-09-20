import React, { Component } from 'react'
import "../HomePage/Style.css";
import Carousel from "react-elastic-carousel";
import i1 from "../Images/i1.jpg";
import i2 from "../Images/i2.jpg";
import i3 from "../Images/i3.jpg";
import i4 from "../Images/i4.jpg";
import i5 from "../Images/i5.jpg";
import i6 from "../Images/i6.jpg";
import i7 from "../Images/i7.jpg";
import SesssionService from '../SessionManagement/SesssionService';

const breakPoints = 
[
    { width: 1, itemsToShow: 1 },
    { width: 480, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
];
  

class Home extends Component 
{

    render() 
    {
        const user = new SesssionService();

        if(user.getUserSession()==null)
        {
            window.location.href = "/unauthorized"
        }

        else
        {
            return (
                <div class="wrapperhomepage">
                    <div className="namepart">
                        <div class="overlay"></div>

                        <div class="infopart">
                            <h1>SKYVIEW24*7</h1>
                            <p>Where Your Dream Home Awaits & The Sky Touches Your Feet</p>
                            <a href="/myprofile"><button>View Profile <i class="fa fa-user-circle" aria-hidden="true"></i></button></a>
                        </div>
                    </div>
                    
                    <div className="aboutpart">
                        <h2>What On the Earth is SKYVIEW24*7 ?? </h2>
                        <p>
                            The World we live in is digital one and connecting Client is no different. 
                            At RIPL we have initiated change - change for the best. We are on a journey 
                            to simplifying of Booking Homes Online with the fast and easy mobile app 
                            that bundles in amazing features. It Has Proven to be Win Win for Both 
                            Builders and End Customers. Along with the Online Booking other services 
                            are also being offered to its real estate clients, RIPL also manages 
                            the Launch of Exclusive Homes / Project provides Email and SMS Marketing 
                            and Promotion, Pre sales Customer Support, Exclusive Real Estate Targeted 
                            Online Marketing etc. for its Real Estate Online App Clients.
                            The World we live in is digital one and connecting Client is no different. 
                            At RIPL we have initiated change - change for the best. We are on a journey 
                            to simplifying of Booking Homes Online with the fast and easy mobile app 
                            that bundles in amazing features. It Has Proven to be Win Win for Both 
                            Builders and End Customers. Along with the Online Booking other services 
                            are also being offered to its real estate clients, RIPL also manages 
                            the Launch of Exclusive Homes / Project provides Email and SMS Marketing 
                            and Promotion, Pre sales Customer Support, Exclusive Real Estate Targeted 
                            Online Marketing etc. for its Real Estate Online App Clients.
                        </p>
                    </div>

                    <div className="imgglrypart" onLoad={this.imageAutoSlider}>
                        <h2>Get a Tour of our Flats at a Glance</h2>

                        <Carousel breakPoints={breakPoints}>
                            <img src={i1} alt="img1"/>
                            <img src={i2} alt="img2"/>
                            <img src={i3} alt="img3"/>
                            <img src={i4} alt="img4"/>
                            <img src={i5} alt="img5"/>
                            <img src={i6} alt="img6"/>
                            <img src={i7} alt="img7"/>
                        </Carousel>

                    </div>

                </div>
            )
        }
    }
}

export default Home
