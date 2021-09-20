import React, { Component } from 'react';
import "../ErrorPages/Style.css";
import Error from "../Images/error.png";

class Notfound extends Component 
{
    render() {
        return (
            <div class="errorpages">
                <h2>404</h2>
                <p>Page not Found. Requested Page does n't Exists.</p>
                <img src={Error} alt="error" srcset="" />
            </div>
        )
    }
}

export default Notfound