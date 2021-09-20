import React, { Component } from 'react';
import "../ErrorPages/Style.css";
import Error from "../Images/error.png";

class Forbidden extends Component 
{
    render() {
        return (
            <div class="errorpages">
                <h2>403</h2>
                <p>Page is Forbidden. You are Not Allowed to view this Page.</p>
                <img src={Error} alt="error" srcset="" />
            </div>
        )
    }
}

export default Forbidden
