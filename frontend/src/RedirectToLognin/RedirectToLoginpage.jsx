import React, { Component } from 'react'

export class RedirectToLoginpage extends Component {
    render() {
        return (
            window.location.href = "/login"
        )
    }
}

export default RedirectToLoginpage
