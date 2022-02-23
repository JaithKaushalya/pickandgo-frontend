import React, { Component } from "react";
import { Typography } from "@mui/material"
import Header from "./header";

class ManageUsers extends Component {

    render() {
        return (
            <div>
                <Header />
                <br />
                <Typography variant="h4" gutterBottom component="div">
                    ManageUsers
                </Typography>
            </div>
        )
    }

}

export default ManageUsers;