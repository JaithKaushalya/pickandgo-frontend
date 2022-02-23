import React, { Component } from "react";
import { Typography } from "@mui/material"
import Header from "./header";

class AllRequests extends Component {

    render() {
        return (
            <div>
                <Header />
                <br />
                <Typography variant="h4" gutterBottom component="div">
                    AllRequests
                </Typography>
            </div>
        )
    }

}

export default AllRequests;