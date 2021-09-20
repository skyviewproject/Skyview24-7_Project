import React, { Component } from 'react';
import "../ErrorPages/Style.css";
import Error from "../Images/error.png";

class Unauthorized extends Component 
{
    render() {
        return (
            <div class="errorpages">
                <h2>401</h2>
                <p>You are Unauthorized. Please Login to Access</p>
                <img src={Error} alt="error" srcset="" />
            </div>
        )
    }
}

export default Unauthorized